using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json.Serialization;
using System.Text.Json;
using DataAcsessLayer.Concrete.EfCore;
using EntityLayer;
using MobilE_TicaretAPI.Model;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace MobilE_TicaretAPI.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class FavoriController : ControllerBase
	{
	

		[HttpGet("{id}")]

		public IActionResult GetaFavori(string id)
		{
			using (var db = new Context())
			{
				var favori = db.Favoris.Where(i => i.UserId == id).FirstOrDefault();
				var favoriItem = db.FavoriItems.Where(i => i.FavoriId == favori.Id).Include(i => i.Product).ToList();

				List<FavoriItem> fv = new List<FavoriItem>();


				foreach (var item in favoriItem)
				{
					FavoriItem favoriItem1 = new FavoriItem();

					favoriItem1.FavoriId = item.Id;
					favoriItem1.ProductId = item.ProductId;
					favoriItem1.Product = item.Product;
					favoriItem1.Quantity = item.Quantity;


					fv.Add(favoriItem1);
				}



				JsonSerializerOptions options = new()
				{
					ReferenceHandler = ReferenceHandler.Preserve,
					WriteIndented = true
				};

				return Ok(JsonSerializer.Serialize(fv, options));
			}
		}

		[HttpPost]
		[Route("addfavori")]
		public IActionResult AddToFavori(Like like)
		{
			string userId = like.userId;
			int productId = like.productId;
			int quantity = like.quantity;
			 


			using (var db= new Context())
			{
				var favori = db.Favoris.Where(i => i.UserId == userId).FirstOrDefault();
				FavoriItem favoriItem = new FavoriItem()
				{
					FavoriId = favori.Id,
					ProductId = productId,
					Quantity = 1
				};

				db.FavoriItems.Add(favoriItem);
				db.SaveChanges();

			}

			//using (var db = new Context())
			//{
			//	var favori = db.Favoris.Where(i => i.UserId == userId).FirstOrDefault();
			//	if (favori != null)
			//	{
			//		var favoris = db.FavoriItems.ToList();
			//		int a = 0;

			//		foreach (var item in favoris)
			//		{
			//			if (item.ProductId == like.productId && item.FavoriId == favori.Id)
			//			{
			//				item.Quantity += quantity;
			//				db.FavoriItems.Update(item);
			//				db.SaveChanges();

			//			}
			//			else
			//			{
			//				a++;
			//			}


			//			if (a == favoris.Count)
			//			{
			//				FavoriItem fv = new FavoriItem()
			//				{
			//					FavoriId = favori.Id,
							
			//					ProductId = productId,
			//					Quantity = 1,
								
			//				};

			//				db.FavoriItems.Add(fv);
			//				db.SaveChanges();

			//			}




			//		}



			//	}
			//}

			return Ok(200);
		}




	}
}
