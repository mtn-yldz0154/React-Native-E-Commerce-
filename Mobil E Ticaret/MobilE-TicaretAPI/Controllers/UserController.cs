using DataAcsessLayer.Concrete.EfCore;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using MobilE_Ticaret.Identity;
using System.Linq;
using System.Threading.Tasks;

namespace MobilE_TicaretAPI.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class UserController : ControllerBase
	{
		private UserManager<User> _userManager;

		public UserController(UserManager<User> userManager)
		{
			_userManager = userManager;
		}

		[HttpGet("{id}")]
		public  async Task< IActionResult >GetUser(string id)
		{
              var user=	await _userManager.FindByIdAsync(id);

			return Ok(user);
		}

	}
}
