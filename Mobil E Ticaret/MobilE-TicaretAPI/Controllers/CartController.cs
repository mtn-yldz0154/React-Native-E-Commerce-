using BuissnesLayer.Abstract;
using DataAcsessLayer.Concrete.EfCore;
using EntityLayer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MobilE_Ticaret.Identity;
using MobilE_TicaretAPI.Model;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace MobilE_TicaretAPI.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class CartController : ControllerBase
	{
		JsonSerializerOptions options = new()
		{
			ReferenceHandler = ReferenceHandler.Preserve,
			WriteIndented = true
		};


		[HttpGet("{id}")]
	
		public IActionResult GetCart(string id)
		{
			using (var db = new Context())
			{
				var cart = db.Carts.Where(i => i.UserId == id).FirstOrDefault();

		     var  cartItem=db.CartItems.Where(i => i.CartId == cart.Id).Include(i=>i.Product).ToList();

				List<CartItem> cartItems = new List<CartItem>();
		

				foreach (var item in cartItem)
				{
					CartItem cartItem1= new CartItem();

					cartItem1.CartId = item.Id;
					cartItem1.ProductId = item.ProductId;
					cartItem1.Product = item.Product;
					cartItem1.Quantity = item.Quantity;
					cartItem1.Size= item.Size;
					cartItem1.Color = item.Color;


					cartItems.Add(cartItem1);
				}



				JsonSerializerOptions options = new()
				{
					ReferenceHandler = ReferenceHandler.Preserve,
					WriteIndented = true
				};

				return Ok(JsonSerializer.Serialize(cartItems, options));
			}
		}

		[HttpPost]
		[Route("addtocart")]
		public IActionResult AddToCart(Sepet sepet)
		{
			string userId = sepet.userId;
			string color = sepet.color;
			string size = sepet.size;
			int productId = sepet.productId;
			int quantity = sepet.quantity;

			using (var db=new Context())
			{
				var cart=db.Carts.Where(i=>i.UserId==userId).FirstOrDefault();
				if (cart!=null)
				{
					var carts = db.CartItems.ToList();
					int a = 0;

					foreach (var item in carts)
					{
						if (item.ProductId == sepet.productId && item.CartId==cart.Id && item.Color==sepet.color&&item.Size==sepet.size)
						{
							item.Quantity += quantity;
							db.CartItems.Update(item);
							db.SaveChanges();

						}
						else
						{
							a++;
						}


						if (a  ==carts.Count)
						{
							CartItem cartItem = new CartItem()
							{
								CartId = cart.Id,
								IsActive = true,
								ProductId = productId,
								Quantity = quantity,
								Size = size,
								Color = color
							};

							db.CartItems.Add(cartItem);
							db.SaveChanges();

						}

					
					

					}


					
				}
			}

			return Ok(200);
		}


        [Route("total/{id}")]
        [HttpGet]
        public IActionResult GetTotalPrice(string id)
		{
			using (var db=new Context())
			{
				var cart=db.Carts.Where(i=>i.UserId==id).FirstOrDefault();
				
				var cartItems=db.CartItems.Where(i=>i.CartId==cart.Id).Include(i=>i.Product).ToList();

				double price=0;
				foreach (var item in cartItems)
				{
					price += item.Product.Price;
				}

				return Ok(price);

			}
		}
	
	}
}
