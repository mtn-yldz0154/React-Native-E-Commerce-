using System.Collections.Generic;

namespace EntityLayer
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public string ImageUrl { get; set; }

        public int GenderId { get; set; }

        public Gender Gender { get; set; }
        public List<Product> Products { get; set; }

    }
}
