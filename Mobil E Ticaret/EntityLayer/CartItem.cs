using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer
{
	public class CartItem
	{
		public int Id { get; set; }

		public int CartId { get; set; }

		public Cart Cart { get; set; }

		public int ProductId { get; set; }

		public Product Product { get; set; }

		public int Quantity { get; set; }

		public string Color { get; set; }

		public string Size { get; set; }

		public bool IsActive { get; set; }

	}
}
