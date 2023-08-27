using System.Collections.Generic;

namespace EntityLayer
{
    public class Gender
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public List<Category> Categories { get; set; }

    }
}
