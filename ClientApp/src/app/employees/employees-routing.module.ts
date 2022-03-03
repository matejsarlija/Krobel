import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'employees', redirectTo: 'employees/list', pathMatch: 'full' },
  { path: 'employees/list', component: ListComponent },
  { path: 'employees/:employeeId/details', component: DetailsComponent },
  { path: 'employees/create', component: CreateComponent },
  { path: 'employees/:employeeId/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
