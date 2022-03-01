using System.ComponentModel.DataAnnotations;

namespace Krobel.Models;

public class TodoItem
{
    public long Id { get; set; }
    public string? Name { get; set; }
    public DateTime? DoB { get; set; }
    
    [DataType(DataType.PhoneNumber)]
    public string? PhoneNumber { get; set; }
    
    public Gender EmployeeGender { get; set; }
}

public enum Gender
{
    Male,
    Female
}