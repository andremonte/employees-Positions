import { Injectable } from '@angular/core';
import { Employees } from './employees';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private url = "https://amteams.herokuapp.com";

  constructor(private http: HttpClient) { }
  getEmployees(): Observable<Employees[]> {
    return this.http.get<Employees[]>(`${this.url}/employees`)
  }
}
