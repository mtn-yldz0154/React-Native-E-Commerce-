using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using MobilE_Ticaret.Identity;

namespace MobilE_Ticaret.Identity
{
    public class ApplicationContext:IdentityDbContext<User>
    {
        public ApplicationContext()
        {
        }

        public ApplicationContext(DbContextOptions<ApplicationContext> options):base(options)
        {


        }
    }
}
