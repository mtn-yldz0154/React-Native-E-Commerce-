using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using MobilE_Ticaret.Models;
using System.Threading.Tasks;

namespace MobilE_Ticaret.Controllers
{
    [AutoValidateAntiforgeryToken]
    public class AccountController : Controller
    {
        private UserManager<Identity.User> _userManager;
        private SignInManager<Identity.User> _signInManager;

        public AccountController(UserManager<Identity.User> userManager, SignInManager<Identity.User> signInManager)
        {
            _userManager= userManager;
            _signInManager = signInManager;
        }


        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(LoginModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            var user = await _userManager.FindByNameAsync(model.UserName);
            if (user == null)
            {
                ModelState.AddModelError("", "Kullanıcı Bulunamadı");
                return View(model);
            }



            var result = await _signInManager.PasswordSignInAsync(user, model.Password, true, false);

            if (result.Succeeded)
            {
                return Redirect("/admin/index");
            }

            return View(model);
        }

        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Register(RegisterModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            var user = new Identity.User
            {

                FirstName = model.Name,
                Email = model.Email,
                UserName = model.UserName,
                Password = model.Password


            };
            var result = await _userManager.CreateAsync(user, model.Password);

            if (result.Succeeded)
            {
               
                return RedirectToAction("login", "account");
            }
            ModelState.AddModelError("", "Bilinmeyen Bir Hata Oluştu Tekrar Deneyiniz");
            return View(model);
        }

        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();

            return RedirectToAction("index", "user");
        }

        public IActionResult Accessdenied()
        {
            return View();
        }

    }
}
