using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Raven.Client.Documents;
using Raven.Client.Documents.Commands;

namespace E_CommerceServer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : Controller
    {
        private readonly ILogger<UserController> _logger;

        public UserController(ILogger<UserController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("/users")]
        public async Task<List<User>> Get()
        {
            using(var session = DocumentStoreHolder.DocumentStore.OpenAsyncSession())
            {
                return await session.Query<User>().ToListAsync<User>();
            }
        }

        [HttpPost]
        [Route("/users")]
        public async Task<string> Post(string username, string password)
        {
            using (var session = DocumentStoreHolder.DocumentStore.OpenAsyncSession())
            {
                await session.StoreAsync(new User
                {
                    username = username,
                    password = password
                });

                await session.SaveChangesAsync();
                return "User saved successfully";
            }
        }
    }
}
