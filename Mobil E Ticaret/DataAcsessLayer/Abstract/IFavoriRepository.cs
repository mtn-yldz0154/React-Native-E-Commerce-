using DataAcsessLayer.Migrations;
using EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAcsessLayer.Abstract
{
	public interface IFavoriRepository:IGenericRepository<Favori>
	{

		void DeleteLike(int LikeId, int productId);
		Favori GetLikeByUser(string userId);
	}
}
