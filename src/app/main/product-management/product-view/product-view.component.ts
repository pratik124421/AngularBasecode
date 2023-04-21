import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { TableNames } from 'src/app/common/utils/enum';
import { ProductCreateComponent } from '../product-create/product-create.component';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  buttonstyle = {
    "background-color": "black",
    "color": "white",
    "font-weight": "bolder",
    "letter-spacing": "2px"
  }
  productData : any
  tableName = TableNames.ProductTable


  constructor(private ActiveRoute : ActivatedRoute,public dialog: MatDialog) { }

  ngOnInit(): void {

    this.ActiveRoute.data.subscribe((data)=>{
      console.log("data :::::::::::::::: ",data)
      this.productData = data.products
    })

  }

  AddProduct(){
    console.log("calledd..",this.dialog)
    const dialogRef = this.dialog.open(ProductCreateComponent,{disableClose : true});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
    });

  }

}
