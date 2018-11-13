import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  employee: any;

  constructor(private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) {
     route.params.subscribe((params: Params) => {
        this.fetchEmployee(params['id']);
     });
   }

  ngOnInit() {
  }
  
  fetchEmployee(id) {
  	this.employeeService.findOne(id)
  			.subscribe((employee) => {
  				this.employee = employee;
  			});
  	}

   back() {
     this.router.navigate(['employees']);
   }

   edit(employeeId) {
  		this.router.navigate(['employee/edit/' + employeeId]);
  	}

    delete(employeeId) {
      this.employeeService.delete(employeeId).subscribe(()=>{
        this.back();
      });
    }

    inHaandSalary() : number {
    console.log(this.employee.baseSalary);
        console.log(this.employee.incentive);
                console.log(this.employee.otherAllowance);
                                console.log(this.employee.deduction.taxes);
                                                console.log(this.employee.deduction.helthInsurance);
                                                                console.log(this.employee.deduction['401k']);
       return ((this.employee.baseSalary +this.employee.incentive+ (this.employee.otherAllowance || 0))
       		- (this.employee.deduction.taxes + this.employee.deduction.healthInsurance + this.employee.deduction['401k']) )


    }

}
