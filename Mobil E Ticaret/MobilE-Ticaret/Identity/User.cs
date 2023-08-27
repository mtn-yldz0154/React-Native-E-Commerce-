using Microsoft.AspNetCore.Identity;

namespace MobilE_Ticaret.Identity
{
    public class User:IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ProfilePhoto { get; set; }
        public string Password { get; set; }
    }
}
