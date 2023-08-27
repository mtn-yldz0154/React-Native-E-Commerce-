using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer
{
	public class Payment
	{

		public int Id { get; set; }
		public string  CardName { get; set; }
		public string  CardNumber { get; set; }
		public string  ExperitionMonth { get; set; }
		public string  ExperitionYear { get; set; }
		public string  Cvc { get; set; }
		public string  userId { get; set; }

	}
}
