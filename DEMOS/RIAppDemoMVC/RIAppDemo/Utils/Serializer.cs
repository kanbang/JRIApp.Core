using Newtonsoft.Json;
using RIAPP.DataService.Utils;
using System;
using System.IO;

namespace RIAppDemo.Utils
{
    /// <summary>
    ///  serialize an object to JSON
    /// </summary>
    public class Serializer : ISerializer
    {
        public string Serialize(object obj)
        {
            var serializer = new JsonSerializer();
            serializer.NullValueHandling = NullValueHandling.Include;
            StringWriter writer = new StringWriter();
            using (JsonWriter jsonWriter = new JsonTextWriter(writer))
            {
                serializer.Serialize(writer, obj);
            }
            return writer.ToString();
        }

        public void Serialize(object obj, TextWriter writer)
        {
            var serializer = new JsonSerializer();
            serializer.NullValueHandling = NullValueHandling.Include;

            using (JsonWriter jsonWriter = new JsonTextWriter(writer))
            {
                serializer.Serialize(writer, obj);
            }
        }

        public object DeSerialize(string input, Type targetType)
        {
            return JsonConvert.DeserializeObject(input, targetType);
        }
    }
}