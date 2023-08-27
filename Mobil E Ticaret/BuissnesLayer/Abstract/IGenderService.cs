using EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuissnesLayer.Abstract
{
    public interface IGenderService
    {

        void Create(Gender gender);

        void Update(Gender gender);

        void Delete(int id);

        List<Gender> GetAll();
        List<Category> GetAllCategory(int id);

        Gender GetGenderById(int id);
    }
}
