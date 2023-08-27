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
    public class CategoryManager:ICategoryService
    {
        private ICategoryRepository _categoryRepository;

        public CategoryManager(ICategoryRepository categoryRepository)
        {
            _categoryRepository= categoryRepository;
        }

        public void Create(Category category)
        {
            _categoryRepository.Create(category);
        }

        public void Delete(int id)
        {
            _categoryRepository.Delete(id);
        }

        public List<Category> GetAll()
        {
            return _categoryRepository.GetAll();
        }

        public Category GetCategoryById(int id)
        {
            return _categoryRepository.GetById(id);
        }

        public List<Product> GetProducts(int id)
        {
            return _categoryRepository.GetProducts(id);
        }

        public void Update(Category category)
        {
            _categoryRepository.Update(category);
        }
    }
}
