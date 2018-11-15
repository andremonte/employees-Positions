import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {
  _id: string;
  PositionName: string;
  PositionDescription: string;
  PositionBaseSalary: number;
  __v: number;
  constructor() { }

  ngOnInit() {
  }

}
