using BuissnesLayer.Abstract;
using DataAcsessLayer.Abstract;
using EntityLayer;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuissnesLayer.Concrete
{
	public class FavoriManager : IFavoriService
	{

		private IFavoriRepository _favoriRepository;

		public FavoriManager(IFavoriRepository favoriRepository)
		{
			_favoriRepository = favoriRepository;
		}

		public void AddToFavori(string userId, int productId)
		{
			var favori = GetFavoriByUserId(userId);
			if (favori != null)
			{
				var index = favori.FavoriItems.FindIndex(i => i.ProductId == productId);

				if (index < 0)
				{
					favori.FavoriItems.Add(new FavoriItem { ProductId = productId, Quantity = 1, FavoriId = favori.Id});
				}
				else
				{
					favori.FavoriItems[index].Quantity += 1;
					_favoriRepository.Update(favori);
				}

			}
		}

		public void DeleteFromFavori(string userId, int productId)
		{
			var cart = GetFavoriByUserId(userId);

			_favoriRepository.DeleteLike(cart.Id, productId);
		}

		public Favori GetFavoriByUserId(string userId)
		{
			return _favoriRepository.GetLikeByUser(userId);
		}

		public void InitilazerFavori(string userId)
		{
			_favoriRepository.Create(new Favori { UserId = userId });
		}
	}
}
