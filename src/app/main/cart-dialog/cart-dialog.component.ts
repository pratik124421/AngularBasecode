import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CartDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public product: any,
  ) {}

  ngOnInit(): void {
  }

  onCloseDialog(): void {
    this.dialogRef.close();
  }

  checkout(){
    console.log("button clicked...")
  }

  DecrementQuantity(val){
    if(val.quantity==1){
      this.product = this.product.filter((value)=>value.id!==val.id)
    }
    val.quantity -=1
    val.totalPrice = val.actualPrice * val.quantity
  }

  IncrementQuantity(val){
    val.quantity +=1
    val.totalPrice = val.actualPrice * val.quantity
  }



}


