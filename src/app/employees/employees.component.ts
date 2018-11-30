import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../data/employees.service';
import { Employees } from '../data/employees';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  private employees: Employees[];
  private getEmployeesSub;
  private loadingError: boolean = false;

  constructor(private emp:EmployeesService, private router:Router) { }

  ngOnInit() {
    this.getEmployeesSub = this.emp.getEmployees().subscribe(
      employees => this.employees = employees,
      function (e) {
        this.loadingError = true;
      });
  }

  ngOnDestroy() {

    if (this.getEmployeesSub != 'undefined') {
      this.getEmployeesSub.unsubscribe();
    }
  }

  routeEmployee(id:String) {this.router.navigate(['/employee', id]);}
}
