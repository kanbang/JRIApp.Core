﻿using RIAPP.DataService.Core.Exceptions;
using RIAPP.DataService.Resources;
using RIAPP.DataService.Utils;
using System.Collections.Generic;
using System.Linq;

namespace RIAPP.DataService.Core.Types
{
    public static class DbSetInfoEx
    {
        public static FieldName[] GetNames(this DbSetInfo dbSetInfo)
        {
            return dbSetInfo.GetInResultFields().Select(fi =>
                            new FieldName
                            {
                                n = fi.fieldName,
                                p = fi.fieldType == FieldType.Object ? fi.GetNames() : null
                            }).ToArray();
        }

        /// <summary>
        ///     typically methods names use templated scheme like: insert{0} or delete{0}
        ///     where {0} later is replaced by dbSet's name, that will turn into something like: insertCustomer or deleteCustomer
        /// </summary>
        /// <param name="methodNameTemplate"></param>
        /// <param name="dbSetName"></param>
        /// <returns></returns>
        private static string GenerateMethodName(string methodNameTemplate, string dbSetName)
        {
            try
            {
                return string.Format(methodNameTemplate, dbSetName);
            }
            catch
            {
                //return as is
                return methodNameTemplate;
            }
        }

        public static Dictionary<string, Field> GetFieldByNames(this DbSetInfo dbSetInfo)
        {
            return dbSetInfo._fieldsByNames;
        }


        private static void SetOrdinal(Field[] fieldInfos)
        {
            int cnt = fieldInfos.Length;
            for (int i = 0; i < cnt; ++i)
            {
                fieldInfos[i].SetOrdinal(i);
                if (fieldInfos[i].fieldType == FieldType.Object)
                {
                    SetOrdinal(fieldInfos[i].nested.ToArray());
                }
            }
        }

        public static void Initialize(this DbSetInfo dbSetInfo, IDataHelper dataHelper)
        {
            dbSetInfo._fieldsByNames = new Dictionary<string, Field>();
            var fieldInfos = dbSetInfo.fieldInfos.ToArray();
            int cnt = fieldInfos.Length;

            for (int i = 0; i < cnt; ++i)
            {
                dataHelper.ForEachFieldInfo("", fieldInfos[i], (fullName, fieldInfo) =>
                {
                    fieldInfo.SetFullName(fullName);
                    dbSetInfo._fieldsByNames.Add(fullName, fieldInfo);
                });
            }
            SetOrdinal(fieldInfos);
            var pkFields = dbSetInfo.GetPKFields();
            if (pkFields.Length < 1)
            {
                throw new DomainServiceException(string.Format(ErrorStrings.ERR_DBSET_HAS_NO_PK, dbSetInfo.dbSetName));
            }
            var fbn = dbSetInfo.GetFieldByNames();
        }

        public static FieldsList GetFieldInfos(this DbSetInfo dbSetInfo)
        {
            return dbSetInfo._fieldInfos;
        }

        public static void SetFieldInfos(this DbSetInfo dbSetInfo, FieldsList fieldList)
        {
            dbSetInfo._fieldInfos = fieldList;
        }

    }
}