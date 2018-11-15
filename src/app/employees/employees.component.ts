import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  _id:	string;
  FirstName:	string;
  LastName:	string;
  AddressStreet:	string;
  AddressState:	string;
  AddressCity:	string;
  AddressZip:	string;
  PhoneNum:	string;
  Extension:	number;
  Position:	Position;
  HireDate:	string;
  SalaryBonus:	number;
  __v:	number;
  
  constructor() { }

  ngOnInit() {
  }

}
