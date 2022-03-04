import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Gender } from '../employee';
import { EmployeesService } from '../employees.service';
import { enumSelector } from 'src/app/enumSelector';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createForm;
  genders = Object.values(Gender);
  selectedGender: Gender = this.genders[0];


  constructor(
    public employeesService: EmployeesService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { 
    this.createForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      doB: [''],
      employeeGender: ['']
    })
  }

  ngOnInit(): void {

  }

  onSubmit(formData: any) {
    this.employeesService.createEmployee(formData.value).subscribe(res => {
      this.router.navigateByUrl('employees/list');
    });
  }

}
