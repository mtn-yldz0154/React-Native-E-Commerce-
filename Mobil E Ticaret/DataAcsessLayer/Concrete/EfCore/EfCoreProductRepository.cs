using DataAcsessLayer.Abstract;
using EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAcsessLayer.Concrete.EfCore
{
    public class EfCoreProductRepository : EfCoreGenericRepsoitory<Product, Context>, IProductRepository
    {
        public List<Product> GetProductsByCtg(int id)
        {
            using (var db=new  Context())
            {
                var prd = db.Products.Where(i => i.Id == id).FirstOrDefault();

                var products=db.Products.Where(i=>i.CategoryId==prd.CategoryId && i.Id!=id).ToList();

                return products;

            }
        }
    }
}
