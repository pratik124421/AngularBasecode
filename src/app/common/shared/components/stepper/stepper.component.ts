import { Component, OnInit } from '@angular/core';
import { OrderState } from 'src/app/common/utils/enum';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  isLinear = false;
  currentState : OrderState
  StepList : string[] = [OrderState.New,OrderState.Shipped,OrderState.Delivered]

  constructor() {}

  ngOnInit(): void {
    this.currentState = OrderState.New
  }

  ngAfterViewInit(): void {

  }

  handleState(state:number){
    // if(state != this.currentState){
      alert("clicked")
    // }
  }


}
