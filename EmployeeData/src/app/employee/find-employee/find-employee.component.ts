import {Component} from '@angular/core';
import {EmployeeService} from '../employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'find-employee',
  styleUrls: ['./find-employee.component.scss'],
  templateUrl: './find-employee.component.html',
})
export class FindEmployeeComponent {
	employees: any[];
  keyword: string;
  displayedEmployees: any[] = [];

	constructor(private employeeService: EmployeeService, private router: Router) {

  	}

  	ngOnInit() {
  		this.find();
  	}

    find() {
    this.employeeService.find().subscribe((employees: any[]) => {

        this.employees = employees;
        this.filter();
      });
    }

    filter() {
      if(!this.keyword || this.keyword.length === 0) {
        this.displayedEmployees = this.employees;
        return;
      }
      this.displayedEmployees = this.employees.filter((o) => o.name.indexOf(this.keyword) > -1);
    }

    view(employeeId) {
     this.router.navigate(['employee/view/' + employeeId]);

    }

  	add() {
  		this.router.navigate(['employee/edit']);
  	}

  	edit(employeeId) {
  		this.router.navigate(['employee/edit/' + employeeId]);
  	}

    delete(employeeId) {
      this.employeeService.delete(employeeId).subscribe(()=>{
        this.find();
      });
    }
}