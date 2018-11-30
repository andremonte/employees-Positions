import { Component, OnInit } from '@angular/core';
import { PositionService } from '../data/position.service';
import { Positions } from '../data/positions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

  position: Positions[];
  private getPositionSub;
  private loadingError: boolean = false;

  constructor(private pos: PositionService, private router: Router) { }

  ngOnInit() {
    this.getPositionSub = this.pos.getPositions().subscribe(
      positions => this.position = positions,
      function (e) {
      this.loadingError = true;
      });
  }

  ngOnDestroy() {
    if (this.getPositionSub != 'undefined') {
      this.getPositionSub.unsubscribe();
    }
  }

  routePosition(id:String) {this.router.navigate(['/position', id]);}
  }
