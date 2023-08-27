using BuissnesLayer.Abstract;
using DataAcsessLayer.Concrete.EfCore;

using EntityLayer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using MobilE_Ticaret.Identity;
using MobilE_Ticaret.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MobilE_Ticaret.Controllers
{
    [Authorize(Roles ="Admin")]
    public class AdminController : Controller
    {

        private IGenderService _menuService;
        private ICategoryService _categoryService;
        private IProductService _productService;
		private RoleManager<IdentityRole> _roleManager;
		private UserManager<User> _userManager;
		public AdminController(IGenderService menuService, ICategoryService categoryService, IProductService productService, RoleManager<IdentityRole> roleManager, UserManager<User> userManager)
        {

            _categoryService = categoryService;
            _menuService = menuService;
            _productService = productService;
            _roleManager = roleManager;
			_userManager = userManager;
		}

        public IActionResult Index()
        {
            return View();
        }



		public async Task<IActionResult> UserEdit(string id)
		{
			var user = await _userManager.FindByIdAsync(id);
			if (user != null)
			{
				var selectedRoles = await _userManager.GetRolesAsync(user);
				var roles = _roleManager.Roles.Select(i => i.Name);

				ViewBag.Roles = roles;
				return View(new UserDetailsModel()
				{
					UserId = user.Id,
					UserName = user.UserName,
					FirstName = user.FirstName,
					LastName = user.LastName,
					Email = user.Email,
					EmailConfirmed = user.EmailConfirmed,
					SelectedRoles = selectedRoles
				});
			}
			return Redirect("~/admin/users/");
		}


		[HttpPost]
		public async Task<IActionResult> UserEdit(UserDetailsModel model, string[] selectedRoles)
		{
			if (ModelState.IsValid)
			{
				var user = await _userManager.FindByIdAsync(model.UserId);
				if (user != null)
				{
					user.FirstName = model.FirstName;
					user.LastName = model.LastName;
					user.UserName = model.UserName;
					user.Email = model.Email;
					user.EmailConfirmed = model.EmailConfirmed;

					var result = await _userManager.UpdateAsync(user);

					if (result.Succeeded)
					{
						var userRoles = await _userManager.GetRolesAsync(user);
						selectedRoles = selectedRoles ?? new string[] { };
						await _userManager.AddToRolesAsync(user, selectedRoles.Except(userRoles).ToArray<string>());
						await _userManager.RemoveFromRolesAsync(user, userRoles.Except(selectedRoles).ToArray<string>());

						return Redirect("/admin/users");
					}
				}
				return Redirect("/admin/users");
			}

			return View(model);

		}

		public IActionResult Users()
		{
			return View(_userManager.Users);
		}
		public async Task<IActionResult> RoleEdit(string id)
		{
			var role = await _roleManager.FindByIdAsync(id);

			var members = new List<User>();
			var nonmembers = new List<User>();

			foreach (var user in _userManager.Users.ToList())
			{
				if (await _userManager.IsInRoleAsync(user, role.Name))
				{
					members.Add(user);
				}
				else
				{
					nonmembers.Add(user);
				}

			}
			var model = new RoleDetails()
			{
				Role = role,
				Members = members,
				NonMembers = nonmembers
			};
			return View(model);
		}


		[HttpPost]
		public async Task<IActionResult> RoleEdit(RoleEditModel model)
		{
			if (ModelState.IsValid)
			{
				foreach (var userId in model.IdsToAdd ?? new string[] { })
				{
					var user = await _userManager.FindByIdAsync(userId);
					if (user != null)
					{
						var result = await _userManager.AddToRoleAsync(user, model.RoleName);

						if (!result.Succeeded)
						{
							foreach (var error in result.Errors)
							{
								ModelState.AddModelError("", error.Description);
							}
						}
					}
				}

				foreach (var userId in model.IdsToDelete ?? new string[] { })
				{
					var user = await _userManager.FindByIdAsync(userId);
					if (user != null)
					{
						var result = await _userManager.RemoveFromRoleAsync(user, model.RoleName);

						if (!result.Succeeded)
						{
							foreach (var error in result.Errors)
							{
								ModelState.AddModelError("", error.Description);
							}
						}
					}
				}
			}
			return Redirect("/Admin/roleEdit/" + model.RoleId);


		}
		public IActionResult RoleList()
		{
			return View(_roleManager.Roles);
		}

		public IActionResult CreateRole()
		{
			return View();
		}
		[HttpPost]
		public async Task<IActionResult> CreateRole(RoleModel model)
		{
			if (!ModelState.IsValid)
			{
				return View(model);
			}

			var result = await _roleManager.CreateAsync(new IdentityRole(model.RoleName));

			if (result.Succeeded)
			{
				return RedirectToAction("rolelist", "admin");
			}

			return View(model);
		}




		public IActionResult Menus()
        {
            var menus = _menuService.GetAll();
            return View(menus);
        }

        public IActionResult AddMenu()
        {

            return View();

        }

        [HttpPost]
        public IActionResult AddMenu(Gender menu)
        {
            _menuService.Create(menu);

            return RedirectToAction("menus");
        }

        public IActionResult MenuDetails(int id)
        {
            using (var db = new Context())
            {
                var ctg = db.Category.Where(i => i.GenderId == id).ToList();
                ViewBag.menu = db.Genders.Where(i => i.Id == id).Select(i => i.Name).FirstOrDefault();
                return View(ctg);
            }


        }

        public IActionResult DeleteMenu(int id)
        {
            _menuService.Delete(id);
            return Redirect("/admin/menus");
        }

        public IActionResult UpdateMenu(int id)
        {
            var menu = _menuService.GetGenderById(id);
            return View(menu);
        }
        [HttpPost]
        public IActionResult UpdateMenu(Gender menu)
        {
            _menuService.Update(menu);

            return Redirect("/admin/updatemenu/" + menu.Id);
        }


        public IActionResult Categories()
        {
            using (var db = new Context())
            {
                var ctg = db.Category.Include(i=>i.Gender).ToList();

                return View(ctg);
            }

        }


        public IActionResult AddCategory()
        {
            List<SelectListItem> values = (from i in _menuService.GetAll().ToList()
                                           select new SelectListItem
                                           {
                                               Text = i.Name,
                                               Value = i.Id.ToString()
                                           }).ToList();
            ViewBag.Values = values;
            return View();

        }


        [HttpPost]
        public IActionResult AddCategory(Category category)
        {
            _categoryService.Create(category);

            return RedirectToAction("Categories");
        }

        public IActionResult CategoryDetail(int id)
        {
            var prd = _categoryService.GetProducts(id);
            using (var db = new Context())
            {

                ViewBag.ctg = db.Category.Where(i => i.Id == id).Select(i => i.Name).FirstOrDefault();

            }
            return View(prd);
        }

        public IActionResult UpdateCategories(int id)
        {
            List<SelectListItem> values = (from i in _menuService.GetAll().ToList()
                                           select new SelectListItem
                                           {
                                               Text = i.Name,
                                               Value = i.Id.ToString()
                                           }).ToList();
            ViewBag.Values = values;

            var ctg = _categoryService.GetCategoryById(id);
            return View(ctg);
        }

        [HttpPost]
        public IActionResult UpdateCategories(Category category)
        {
            _categoryService.Update(category);
            return Redirect("/admin/UpdateCategories/" + category.Id);
        }

        public IActionResult DeleteCategory(int id)
        {
            _categoryService.Delete(id);

            return RedirectToAction("Categories");
        }

        public IActionResult Products()
        {
            using (var db = new Context())
            {
                var prd = db.Products.Include(i => i.Category).ToList();

                return View(prd);
            }
        }


        public IActionResult AddProduct()
        {
            List<SelectListItem> values = (from i in _categoryService.GetAll().ToList()
                                           select new SelectListItem
                                           {
                                               Text = i.Name,
                                               Value = i.Id.ToString()
                                           }).ToList();
            ViewBag.Values = values;

            return View();

        }


        [HttpPost]
        public IActionResult AddProduct(Product product)
        {
            product.AddTime = DateTime.Now;

            _productService.Create(product);

            return RedirectToAction("products");
        }

        

        public IActionResult UpdateProduct(int id)
        {
            var product = _productService.GetProductById(id);
            List<SelectListItem> values = (from i in _categoryService.GetAll().ToList()
                                           select new SelectListItem
                                           {
                                               Text = i.Name,
                                               Value = i.Id.ToString()
                                           }).ToList();
            ViewBag.Values = values;
            return View(product);
        }
        [HttpPost]
        public IActionResult UpdateProduct(Product product)
        {

            _productService.Update(product);

            return Redirect("/admin/UpdateProduct/" + product.Id);
        }

        public IActionResult DeleteProduct(int id)
        {
            _productService.Delete(id);
            return RedirectToAction("Products");

        }


    }
}
