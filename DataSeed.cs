using Krobel.Models;
using Microsoft.EntityFrameworkCore;

namespace Krobel;

public class DataSeed
{
    public static void Initialize(IServiceProvider serviceProvider)
    {
        using var context = new EmployeeContext(
            serviceProvider.GetRequiredService<DbContextOptions<EmployeeContext>>());
        if (context.EmployeeItems.Any())
        {
            return;
        }

        context.EmployeeItems.AddRange(

            new Employee
            {
                Id = 1,
                Name = "Matej",
                DoB = DateTime.Today - TimeSpan.FromDays(15500),
                PhoneNumber = "+385915439060",
                EmployeeGender = Gender.Male
            },
            new Employee
            {
                Id = 2,
                Name = "Hanna",
                DoB = DateTime.Today - TimeSpan.FromDays(1350),
                PhoneNumber = "+38599723960",
                EmployeeGender = Gender.Female
            }
        );
        context.SaveChanges();
    }
}