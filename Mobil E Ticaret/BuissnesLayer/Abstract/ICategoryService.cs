using EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuissnesLayer.Abstract
{
    public interface ICategoryService
    {
        List<Product> GetProducts(int id);

        void Create(Category category);

        void Update(Category category);

        void Delete(int id);

        List<Category> GetAll();

        Category GetCategoryById(int id);
    }
}
