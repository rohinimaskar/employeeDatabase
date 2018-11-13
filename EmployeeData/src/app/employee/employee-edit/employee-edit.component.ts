import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {
	addMode: boolean;
	employee: any = {
		address: {},
		deduction: {}
	};
  constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private router: Router) {
  	route.params.subscribe((params: Params) => {
  					if(params['id']) {
  						this.addMode = false;
  						this.fetchEmployee(params['id']);
  					}else{
						this.addMode = true;
  					}
  					
                    });
  }

  ngOnInit() {
  }

  fetchEmployee(id) {
  	this.employeeService.findOne(id)
  			.subscribe((employee: any) => {
  				if(!employee.address) {
  					employee.address = {};
  				}
  				if(!employee.deduction) {
  					employee.deduction = {};
  				}
  				this.employee = employee;
  			
  			});
  }

  submit() {
  	if(this.addMode){
  		this.employeeService.create(this.employee)
  		.subscribe((employee) => {
  				this.goList();
  			});
  	}else{
		this.employeeService.update(this.employee._id, this.employee)
  		.subscribe((employee) => {
  				this.goList();
  			});
  	}
  }

  goList() {
  	this.router.navigate(['employees']);
  }
}
