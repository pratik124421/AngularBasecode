import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-detail-dialog',
  templateUrl: './product-detail-dialog.component.html',
  styleUrls: ['./product-detail-dialog.component.css']
})
export class ProductDetailDialogComponent implements OnInit {

  checkvalue : boolean = false
  buttonstyle = {
    "background-color": "black",
    "color": "white",
    "font-weight": "bolder",
    "letter-spacing": "2px"
  }

  constructor(
  public dialogRef: MatDialogRef<ProductDetailDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public productid: any,
  ) {
    this.dialogRef.disableClose = true
  }

  ngOnInit(): void {
  }

  addproducttocart(){
    console.log("product addedd to cart...")
  }

  close(){
    this.dialogRef.close()
  }


}
