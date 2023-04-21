import { BreakpointObserver } from '@angular/cdk/layout';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators,FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatStepper, StepperOrientation } from '@angular/material/stepper';
import { map, Observable } from 'rxjs';
import { OrderState } from 'src/app/common/utils/enum';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ],
})
export class OrderViewComponent implements OnInit,AfterViewInit {

  isLinear = false;
  currentState : OrderState

  constructor(private _formBuilder: FormBuilder,
    private breakpointObserver: BreakpointObserver,
    public dialogRef: MatDialogRef<OrderViewComponent>,
    @Inject(MAT_DIALOG_DATA) public product: any) {

    }

  ngOnInit(): void {
    this.currentState = OrderState.Shipped
  }

  ngAfterViewInit(): void {

  }


}
