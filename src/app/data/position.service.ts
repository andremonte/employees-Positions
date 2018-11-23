import { Injectable } from '@angular/core';
import { Positions } from './positions';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  private url = "https://amteams.herokuapp.com";

  constructor(private http: HttpClient) { }

  getPositions(): Observable<Positions[]> {
    return this.http.get<Positions[]>(`${this.url}/positions`)
  }

  savePosition(position: Positions) {
    return this.http.put<any>(`${this.url}/positions/${position._id}`, position);
  }
  getPostition(id: number | string) {
    return this.http.get<Positions[]>(`${this.url}/positions/${id}`);
  }
}
