using DataAcsessLayer.Abstract;
using EntityLayer;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAcsessLayer.Concrete.EfCore
{
	public class EfCoreFavoriRepository:EfCoreGenericRepsoitory<Favori,Context>,IFavoriRepository
	{
		public override void Update(Favori entity)
		{
			using (var context = new Context())
			{
				context.Favoris.Update(entity);
				context.SaveChanges();
			}
		}
		public void DeleteLike(int favoriId, int productId)
		{
			using (var context = new Context())
			{
				var favoriItems = context.FavoriItems.Where(i => i.FavoriId == favoriId && i.ProductId == productId).FirstOrDefault();
				
				context.FavoriItems.Remove(favoriItems);
			    
				context.SaveChanges();
			}
		}

		public Favori GetLikeByUser(string userId)
		{
			using (var context = new Context())
			{
				return context.Favoris.Include(i => i.FavoriItems).ThenInclude(i => i.Product).FirstOrDefault(i => i.UserId == userId);
			}
		}

		
	}
}
