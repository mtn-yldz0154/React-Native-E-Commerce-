using EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuissnesLayer.Abstract
{
    public interface IProductService
    {
      
        List<Product> GetProductsByCtg(int id);

        void Create(Product product);

        void Update(Product product);

        void Delete(int id);

        List<Product> GetAll();

        Product GetProductById(int id);
    }
}
