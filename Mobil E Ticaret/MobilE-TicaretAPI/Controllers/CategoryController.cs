using BuissnesLayer.Abstract;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MobilE_TicaretAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private ICategoryService _categoryService;

        public CategoryController(ICategoryService categoryService) {

            _categoryService = categoryService;

        }

        public IActionResult Category()
        {
            var ctg = _categoryService.GetAll();

            return Ok(ctg);
        }

        [HttpGet("{id}")]
        public IActionResult Category(int id)
        {
            var ctg = _categoryService.GetProducts(id);


            return Ok(ctg);
        }

    }
}
