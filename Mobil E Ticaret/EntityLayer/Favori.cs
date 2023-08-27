using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer
{
	public class Favori
	{
		public int Id { get; set; }
	
		public string UserId { get; set; }

		public List<FavoriItem> FavoriItems { get; set; }
	}
}
