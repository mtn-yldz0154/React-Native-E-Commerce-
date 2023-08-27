using BuissnesLayer.Abstract;
using DataAcsessLayer.Abstract;
using EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuissnesLayer.Concrete
{
    public class ProductManager:IProductService
    {
        private IProductRepository _productRepository;

        public ProductManager(IProductRepository productRepository)
        {
            _productRepository= productRepository;
        }

        public void Create(Product product)
        {
            _productRepository.Create(product);
        }

        public void Delete(int id)
        {
            _productRepository.Delete(id);
        }

        public List<Product> GetAll()
        {
            return _productRepository.GetAll();
        }

        public Product GetProductById(int id)
        {
            return _productRepository.GetById(id);
        }

        public List<Product> GetProductsByCtg(int id)
        {
          return   _productRepository.GetProductsByCtg(id);
        }

        public void Update(Product product)
        {
            _productRepository.Update(product);
        }
    }
}
