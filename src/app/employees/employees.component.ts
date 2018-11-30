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

  employees: Employees[];
  getEmployeesSub;
  private loadingError: boolean = false;
  filteredEmployees: Employees[];

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

  onEmployeeSearchKeyUP(event:any) {
    this.filteredEmployees = this.employees.filter((employee) => {
      return employee.FirstName.toLowerCase().includes(event.target.value)
        || employee.LastName.toLowerCase().includes(event.target.value)
        || employee.Position.PositionName.toLowerCase().includes(event.target.value);
    });
  }
}
