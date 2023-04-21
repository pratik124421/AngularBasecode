import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Output("closeDialog") closedialog = new EventEmitter<boolean>()
  checkvalue : boolean = false
  buttonstyle = {
    "background-color": "black",
    "color": "white",
    "font-weight": "bolder",
    "letter-spacing": "2px"
  }
  @Input("ordered") ordered : boolean
  constructor() { }

  ngOnInit(): void {
  }

  addproducttocart(){
    console.log("product addedd to cart...")
  }

  closeDialog(){
    this.closedialog.emit(true)
  }

}

