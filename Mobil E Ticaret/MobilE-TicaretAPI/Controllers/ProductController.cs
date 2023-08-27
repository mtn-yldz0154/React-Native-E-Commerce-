using BuissnesLayer.Abstract;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MobilE_TicaretAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {

        private IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService= productService;
        }

        [HttpGet]
        public IActionResult Products()
        {
          var products = _productService.GetAll();
            return Ok(products);

        }

        [Route("product/{id}")]
        [HttpGet]
        public IActionResult Product(int id)
        {
            var products = _productService.GetProductById(id);
            return Ok(products);

        }

        [Route("getLikes/{id}")]
        [HttpGet]
        public IActionResult GetProductByCtg(int id) {
        
          var prd=_productService.GetProductsByCtg(id);

            return Ok(prd);
        }            

    }
}
