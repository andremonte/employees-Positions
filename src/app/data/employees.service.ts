import { Injectable } from '@angular/core';
import { Employees } from './employees';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EmployeeRaw } from './employee-raw';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private url = "https://amteams.herokuapp.com";

  constructor(private http: HttpClient) { }
  getEmployees(): Observable<Employees[]> {
    return this.http.get<Employees[]>(`${this.url}/employees`)
  }

  saveEmployee(employee: EmployeeRaw) {
    return this.http.put<Observable<any>>(`${this.url}/employee/${employee._id}`, employee);
  }

  getEmployee(id: number | string) {
    return this.http.get<EmployeeRaw[]>(`${this.url}/employee/${id}`);
  }
}
