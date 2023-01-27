using Raven.Client.Documents;
using Raven.Client.Documents.Conventions;
using Raven.Client.Http;

namespace E_CommerceServer
{
    public class DocumentStoreHolder
    {
        public static DocumentStore DocumentStore { get; set; }

        public static void Init()
        {
            DocumentStore = new DocumentStore
            {
                Urls = new string[] { "http://localhost:8080" },
                Database = "E-Commerce",
                Conventions = new DocumentConventions
                {
                    ReadBalanceBehavior = ReadBalanceBehavior.RoundRobin
                }
            };

            DocumentStore.Initialize();
        }
    }
}
