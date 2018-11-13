import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {EmployeeService} from './employee/employee.service';
import {FindEmployeeComponent} from './employee/find-employee/find-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


const appRoutes: Routes = [
  { path: 'employees', component: FindEmployeeComponent },
  { path: 'employee/view/:id', component: EmployeeDetailComponent },
  { path: 'employee/edit/:id', component: EmployeeEditComponent }, 
    { path: 'employee/edit', component: EmployeeEditComponent }, 
  { path: '',
    redirectTo: '/employees',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FindEmployeeComponent,
    EmployeeEditComponent,
    EmployeeDetailComponent
  ],
  imports: [
  	RouterModule.forRoot(
      appRoutes
    ),
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
