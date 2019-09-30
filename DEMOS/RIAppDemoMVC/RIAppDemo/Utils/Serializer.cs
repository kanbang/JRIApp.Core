using RIAPP.DataService.Utils;
using System;
using System.IO;
using System.Text.Json;
using System.Threading.Tasks;

namespace RIAppDemo.Utils
{
    /// <summary>
    ///  serialize an object to JSON
    /// </summary>
    public class Serializer : ISerializer
    {
        public string Serialize(object obj)
        {
            return JsonSerializer.Serialize(obj);
        }

        public Task SerializeAsync<T>(T obj, Stream stream)
        {
            return JsonSerializer.SerializeAsync<T>(stream, obj);
        }

        public object DeSerialize(string input, Type targetType)
        {
            return JsonSerializer.Deserialize(input, targetType);
        }
    }
}