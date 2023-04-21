import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailDialogComponent } from '../../product-detail-dialog/product-detail-dialog.component';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openProductInfoDialog(){
    const dialogRef = this.dialog.open(ProductDetailDialogComponent,{
      panelClass:"dialog-responsive"
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
    });

  }

}
