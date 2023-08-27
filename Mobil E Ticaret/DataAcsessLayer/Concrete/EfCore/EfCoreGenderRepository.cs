using DataAcsessLayer.Abstract;
using EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAcsessLayer.Concrete.EfCore
{
    public class EfCoreGenderRepository : EfCoreGenericRepsoitory<Gender, Context>, IGenderRepository
    {
        public List<Category> GetAllCategory(int id)
        {
            using (var db = new Context())
            {
                var category = db.Category.Where(i => i.GenderId == id).ToList();
                return category;
            }
        }
    }
}
