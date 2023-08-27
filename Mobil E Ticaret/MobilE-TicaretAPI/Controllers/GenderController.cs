using BuissnesLayer.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace MobilE_TicaretAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenderController : Controller
    {
        private IGenderService _genderService;

        public GenderController(IGenderService genderService)
        {

           _genderService= genderService;

        }
        [HttpGet("{id}")]
        public IActionResult GetCategory(int id)
        {
           var ctg=  _genderService.GetAllCategory(id);
            return Ok(ctg);
        }
    }
}
