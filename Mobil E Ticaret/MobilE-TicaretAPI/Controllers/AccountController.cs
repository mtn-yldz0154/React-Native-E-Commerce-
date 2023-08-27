
using BuissnesLayer.Abstract;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using MobilE_Ticaret.Identity;
using MobilE_Ticaret.Migrations;
using System.Linq;
using System.Threading.Tasks;

namespace MobilE_TicaretAPI.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class AccountController : ControllerBase
	{
		private UserManager<User> _userManager;
		private SignInManager<User> _signInManager;
		private ICartService _cartService;
		private IFavoriService _favoriService;

		public AccountController(UserManager<User> userManager, SignInManager<User> signInManager, ICartService cartService, IFavoriService favoriService)
		{
			_userManager = userManager;
			_signInManager = signInManager;
			_cartService = cartService;
			_favoriService = favoriService;
		}

		[HttpGet]
		public IActionResult Users()
		{
			var users = _userManager.Users;

			return Ok(users);
		}

		[HttpGet("{id}")]
		public IActionResult Users(string id)
		{
			var users = _userManager.Users.Where(i => i.Id == id).FirstOrDefault();

			return Ok(users);
		}

		[HttpPost]
		[Route("register")]
		public async Task< IActionResult> CreateUser(User user)
		{
			await _userManager.CreateAsync(user, user.Password);
			_cartService.InitilazerCart(user.Id);
			_favoriService.InitilazerFavori(user.Id);

			return CreatedAtAction(nameof(Users),new {id= user.Id},user);
		}

		[HttpPost]
		[Route("login")]
		public async Task<IActionResult> LoginUser(User model)
		{
			var username = await _userManager.FindByNameAsync(model.UserName);
			var result = await _signInManager.PasswordSignInAsync(username, model.Password, true, false);
			var id=_userManager.Users.Where(i=>i.UserName==model.UserName).Select(i=>i.Id).FirstOrDefault();
			if (result.Succeeded)
			{
				return Ok(id);
			}

			else
			{
				return Ok(400);
			}
		}

	}
}
