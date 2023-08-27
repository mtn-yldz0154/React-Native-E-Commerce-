using EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuissnesLayer.Abstract
{
	public interface IFavoriService
	{
		void InitilazerFavori(string userId);

		Favori GetFavoriByUserId(string userId);

		void AddToFavori(string userId, int productId);
		void DeleteFromFavori(string userId, int productId);
	}
}
