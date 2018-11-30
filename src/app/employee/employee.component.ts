import { Component, OnInit } from '@angular/core';
import { EmployeeRaw } from '../data/employee-raw';
import { EmployeesService } from '../data/employees.service';
import { ActivatedRoute } from '@angular/router';
import { PositionService } from '../data/position.service';
import { NgForm } from '@angular/forms';
import { Positions } from '../data/positions';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  paramSubscription: any;
  employeeSubscription: any;
  getPositionsSubcription: any;
  saveEmployeeSubscription: any;
  employee: EmployeeRaw;
  positions: Positions[];
  successMessage: boolean = false;
  failMessage: boolean = false;

  constructor(private empServ:EmployeesService, private actRoute:ActivatedRoute, private PosServ:PositionService) { }

  ngOnInit() {
    this.paramSubscription = this.actRoute.params.subscribe(params => {

      this.employeeSubscription = this.empServ.getEmployee(params['_id']).subscribe(emp => {this.employee = emp[0];

        this.getPositionsSubcription = this.PosServ.getPositions().subscribe(pos => {
          this.positions = pos;
        })
      })
    })
  }

  onSubmit(f: NgForm): void {
    this.saveEmployeeSubscription = this.empServ.saveEmployee(this.employee).subscribe(emp => {
      this.successMessage = true;
      setTimeout(() => { this.successMessage = false; }, 2500);

    }, error => {
      this.failMessage = true;
      setTimeout(() => { this.failMessage = false; }, 2500);
    })
  }

  ngOnDestroy() {
    if(this.paramSubscription != null) {
      this.paramSubscription.unsubscribe();
    }
    if(this.employeeSubscription != null) {
      this.employeeSubscription.unsubscribe();
    }
    if(this.getPositionsSubcription != null) {
      this.getPositionsSubcription.unsubscribe();
    }
    if(this.saveEmployeeSubscription != null) {
      this.saveEmployeeSubscription.unsubscribe();
    }
  }
}
