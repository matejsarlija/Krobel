#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Krobel.Models;

namespace Krobel.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeItemsController : ControllerBase
    {
        private readonly EmployeeContext _context;

        public EmployeeItemsController(EmployeeContext context)
        {
            _context = context;
        }

        // GET: api/TodoItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employee>>> GetEmployeeItems()
        {
            return await _context.EmployeeItems.ToListAsync();
        }

        // GET: api/TodoItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> GetEmployeeItem(long id)
        {
            var todoItem = await _context.EmployeeItems.FindAsync(id);

            if (todoItem == null)
            {
                return NotFound();
            }

            return todoItem;
        }

        // PUT: api/TodoItems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployeeItem(long id, Employee employee)
        {
            if (id != employee.Id)
            {
                return BadRequest();
            }

            _context.Entry(employee).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TodoItems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Employee>> PostEmployeeItem(Employee employee)
        {
            _context.EmployeeItems.Add(employee);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetTodoItem", new { id = todoItem.Id }, todoItem);
            return CreatedAtAction(nameof(GetEmployeeItem), new {id = employee.Id}, employee);
        }

        // DELETE: api/TodoItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTodoItem(long id)
        {
            var todoItem = await _context.EmployeeItems.FindAsync(id);
            if (todoItem == null)
            {
                return NotFound();
            }

            _context.EmployeeItems.Remove(todoItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EmployeeItemExists(long id)
        {
            return _context.EmployeeItems.Any(e => e.Id == id);
        }
    }
}
