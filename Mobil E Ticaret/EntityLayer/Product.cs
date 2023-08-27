using System;

namespace EntityLayer
{
    public class Product
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string Brand { get; set; }
        public DateTime AddTime { get; set; }
        public string ImageUrl { get; set; }
        public string ImageUrl2 { get; set; }
        public string ImageUrl3 { get; set; }
        public string Size { get; set; }
        public string Color { get; set; }
        public double Price { get; set; }
        public double SalePrice { get; set; }
        public double StarNumber { get; set; }
        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }
}
