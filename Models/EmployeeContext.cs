using Microsoft.EntityFrameworkCore;

namespace Krobel.Models;


public class EmployeeContext : DbContext
{

    public EmployeeContext(DbContextOptions<EmployeeContext> options) :base(options)
    {
        
    }
    public DbSet<Employee> EmployeeItems { get; set; } = null!;

}