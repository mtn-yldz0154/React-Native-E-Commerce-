using DataAcsessLayer.Abstract;
using EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAcsessLayer.Concrete.EfCore
{
    public class EfCoreCategoryRepository : EfCoreGenericRepsoitory<Category, Context>, ICategoryRepository
    {
        public List<Product> GetProducts(int id)
        {
            using (var db = new Context())
            {
                var products = db.Products.Where(i => i.CategoryId == id).ToList();
                return products;
            }
        }
    }
}
