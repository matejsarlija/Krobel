import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee, Gender } from '../employee';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id!: number;
  employee!: Employee;
  editForm;

  genders = Object.values(Gender);
  selectedGender: Gender = this.genders[0];

  constructor(
    public employeesService: EmployeesService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { 
      this.editForm = this.formBuilder.group({
        id: [''],
        name: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        doB: [''],
        employeeGender: ['']
  })
}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['employeeId'];

    this.employeesService.getEmployee(this.id).subscribe((data: Employee) => {
      this.employee = data;
      this.editForm.patchValue(data);
    })

  }

  onSubmit(formData: any) {
    this.employeesService.updateEmployee(this.id, formData.value).subscribe(res => {
      this.router.navigateByUrl('employees/list');
    });
  }

}
