import { Component, OnInit } from '@angular/core';
import { PositionService } from '../data/position.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Positions } from '../data/positions';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  paramSubscription: any;
  positionSubscription: any;
  savePositionSubscription: any;
  position: Positions;
  successMessage: boolean = false;
  failMessage: boolean = false;

  constructor(private pSer:PositionService, private aR:ActivatedRoute) { }

  ngOnInit() {
    this.paramSubscription = this.aR.params.subscribe(params => {
      this.positionSubscription = this.pSer.getPosition(params['_id']).subscribe(pos => {this.position = pos[0];})
    })
  }

  onSubmit(f: NgForm): void {
    this.savePositionSubscription = this.pSer.savePosition(this.position).subscribe( pos => {
      this.successMessage = true;
      setTimeout( () => { this.successMessage = false;}, 2500);

    }, error => {
      this.failMessage = true;
      setTimeout( () => { this.failMessage = false;}, 2500);
    })
  }

  ngOnDestroy() {
    if(this.paramSubscription != null) {
      this.paramSubscription.unsubscribe();
    }
    if(this.positionSubscription != null) {
      this.positionSubscription.unsubscribe();
    }
    if(this.savePositionSubscription != null) {
      this.savePositionSubscription.unsubscribe();
    }
  }
}
