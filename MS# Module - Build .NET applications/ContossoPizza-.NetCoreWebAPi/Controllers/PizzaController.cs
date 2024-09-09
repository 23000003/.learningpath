using ContosoPizza.Models;
using ContosoPizza.Services;
using Microsoft.AspNetCore.Mvc;

namespace ContosoPizza.Controllers;

[ApiController]
[Route("[controller]")]
public class PizzaController : ControllerBase
{
    public PizzaController()
    {
        
    }

    // GET all action
    [HttpGet]
    public ActionResult<List<Pizza>> GetAll() =>
        PizzaService.GetAll();


    // GET by Id action
    [HttpGet("{id}")] // Dynamic Routing
    public ActionResult<Pizza> Get(int id)
    {
        var pizza = PizzaService.Get(id);

        if(pizza == null)
            return NotFound();

        return pizza;
    }


    // POST action
    [HttpPost]
    public IActionResult Create(Pizza pizza)
    {            
        //creates the pizza
        PizzaService.Add(pizza);
        // gets the id that was created
        return CreatedAtAction(nameof(Get), new { id = pizza.Id }, pizza);
    }

    // PUT action
    [HttpPut("{id}")]
    public IActionResult Update(int id, Pizza pizza)
    {
        //checks if the id exists in the data
        if (id != pizza.Id){
            return BadRequest();
        }
            
        var existingPizza = PizzaService.Get(id);
        
        if(existingPizza is null){
            return NotFound();
        }
            
        PizzaService.Update(pizza);           
    
        return NoContent();
    }
    //^^^ Returns IActionResult, because the ActionResult return type isn't known until runtime. 
    //The BadRequest, NotFound, and NoContent methods return BadRequestResult, NotFoundResult, and NoContentResult types, respectively.


    // DELETE action
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var pizza = PizzaService.Get(id);
    
        if (pizza is null)
            return NotFound();
        
        PizzaService.Delete(id);
    
        return NoContent();
    }


}