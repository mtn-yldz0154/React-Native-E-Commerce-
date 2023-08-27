using DataAcsessLayer.Concrete.EfCore;
using EntityLayer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MobilE_Ticaret.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using MobilE_TicaretAPI.Model;
using HttpGetAttribute = Microsoft.AspNetCore.Mvc.HttpGetAttribute;
using HttpPostAttribute = Microsoft.AspNetCore.Mvc.HttpPostAttribute;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;
using System.Text.Json.Serialization;
using System.Text.Json;

namespace MobilE_TicaretAPI.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class OrderController : ControllerBase
	{

		private UserManager<User> _userManager;

		public OrderController(UserManager<User> userManager)
		{
			_userManager = userManager;
		}

		[HttpGet("{id}")]
		public IActionResult TotalPrice(string id)
		{

			using (var db = new Context())
			{

				var cart = db.Carts.Where(i => i.UserId == id).FirstOrDefault();
	
				if (cart != null)
				{
					var cartItem=db.CartItems.Where(i=>i.CartId== cart.Id).Include(i=>i.Product).ToList();

					double totalPrice = 0;

					foreach (var item in cartItem)
					{
						totalPrice += item.Product.Price;
					}

					return Ok(totalPrice);
				}

			};

			return Ok(200);
		}


		[Route("adress/{id}")]
		[HttpGet]
		public IActionResult GetAdress(string id)
		{
			using (var db = new Context())
			{
				var adres=db.Addresses.Where(i=>i.UserId== id).FirstOrDefault();

				if (adres != null)
				{
					return Ok(adres);
				}
				return BadRequest();
			}
		}


		[HttpPost]
		[Route("addAddress")]
		public IActionResult AddAdress(Address address)
		{
			using(var db = new Context())
			{
				Address address1 = new Address()
				{
                     Adress=address.Adress,
					 City=address.City,
					 Country=address.Country,
					 FullName=address.FullName,
					 UserId=address.UserId,

				};

				db.Addresses.Add(address1);
				db.SaveChanges();
				return Ok(address1);
			}
		}

		[HttpPost]
		[Route("checkout")]
		public IActionResult Checkout(Kullanici kullanici)
		{
			var userId = kullanici.UserId;

			using (var db = new Context())
			{
				var cart = db.Carts.Include(i => i.CartItems).ThenInclude(i => i.Product).FirstOrDefault(i => i.UserId == userId);
				var address = db.Addresses.FirstOrDefault(i => i.UserId == userId);
				var payment = db.Payments.FirstOrDefault(i => i.userId == userId);
				var user = _userManager.Users.FirstOrDefault(i => i.Id == userId);

				if (cart == null || address == null || payment == null || user == null)
				{
					var errorMessage = "";
					if (cart == null) errorMessage += "Sepet verileri bulunamadı. ";
					if (address == null) errorMessage += "Adres verileri bulunamadı. ";
					if (payment == null) errorMessage += "Ödeme verileri bulunamadı. ";
					if (user == null) errorMessage += "Kullanıcı verileri bulunamadı. ";

					return BadRequest(errorMessage.Trim());
				}

				var order = new Order()
				{
					ConverstionId = Guid.NewGuid().ToString(),
					FirstName = user.FirstName,
					Lastname = user.LastName,
					OrderDate = DateTime.Now,
					OrderNumber= Guid.NewGuid().ToString(),
                    StateEnumOrder = OrderStateEnum.waitig, // Önerilen: OrderStateEnum.Waiting şeklinde
					UserId = userId,
				};

				db.Orders.Add(order);
				db.SaveChanges();

				var orderItems = new List<OrderItem>();
				foreach (var item in cart.CartItems)
				{
					var orderItem = new OrderItem()
					{
						ProductId = item.ProductId,
						Quantity = item.Quantity,
						OrderId = order.Id,
						ProductPrice = item.Product.Price,
					};
					orderItems.Add(orderItem);
					db.OrderItems.Add(orderItem);
				}

				order.OrderItems = orderItems;
				db.SaveChanges();
				return Ok(order);
			}
		}


		[Route("getOrders/{id}")]
		[HttpGet]
		public IActionResult GetOrder(string id)
		{
			using (var db = new Context())
			{
				var order = db.Orders.Where(i => i.UserId == id).Include(i=>i.OrderItems).ThenInclude(i=>i.Product).ToList();

				List<Order> orders = new List<Order>();
				foreach (var item in order)
				{
					Order order1 = new Order();


					order1.ConverstionId = item.ConverstionId;
					order1.OrderNumber = item.OrderNumber;
					order1.OrderStatu = item.OrderStatu;
					order1.StateEnumOrder = item.StateEnumOrder;
					order1.Lastname = item.Lastname;
					order1.FirstName= item.FirstName;
					order1.UserId = item.UserId;
                    order1.OrderDate = item.OrderDate;
					order1.OrderItems=item.OrderItems;
					order1.OrderDate.ToString("D");
					orders.Add(order1);
				}


				JsonSerializerOptions options = new()
				{
					ReferenceHandler = ReferenceHandler.Preserve,
					WriteIndented = true
				};

				return Ok(JsonSerializer.Serialize(orders, options));
			}	
		}
	}
}
