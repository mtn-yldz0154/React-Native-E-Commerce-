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
    public class GenderManager : IGenderService
    {
        private IGenderRepository _genderRepository;

        public GenderManager(IGenderRepository genderRepository)
        {
            _genderRepository= genderRepository;
        }

        public void Create(Gender gender)
        {
            _genderRepository.Create(gender);
        }

        public void Delete(int id)
        {
            _genderRepository.Delete(id);
        }

        public List<Gender> GetAll()
        {
            return _genderRepository.GetAll();
        }

        public List<Category> GetAllCategory(int id)
        {
            return _genderRepository.GetAllCategory(id);
        }

     

        public Gender GetGenderById(int id)
        {
          return   _genderRepository.GetById(id);
        }

        public void Update(Gender gender)
        {
            _genderRepository.Update(gender);
        }
    }
}
