import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employees: Employee[] = [];

  constructor(public employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.employeesService.getEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
    })
  }

  deleteEmployee(Id: number) {
    this.employeesService.deleteEmployee(Id).subscribe(res => {
      this.employees = this.employees.filter(item => item.id !== Id);
    })
  }

}
