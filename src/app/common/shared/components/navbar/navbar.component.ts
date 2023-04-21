import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartDialogComponent } from 'src/app/main/cart-dialog/cart-dialog.component';
import { OrderViewComponent } from 'src/app/main/order/order-view/order-view.component';
import { ProductDetailDialogComponent } from 'src/app/main/product-detail-dialog/product-detail-dialog.component';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginStatus : boolean
  sliderOpen : boolean = false
  @Output() togleSliderEvent : EventEmitter<boolean>
  constructor(private AuthService:AuthService,public dialog: MatDialog) {
    this.togleSliderEvent = new EventEmitter(this.sliderOpen)
  }

  ngOnInit(): void {
    this.AuthService.UserSubject.subscribe((data)=>{
      this.loginStatus = data?.logedin
    })

  }

  logout(){
    this.AuthService.signOut()
  }

  togleSidebar(){
    this.sliderOpen = !this.sliderOpen
    console.log("emited..")
    this.togleSliderEvent.emit(this.sliderOpen)
  }

  openCart(){
      const dialogRef = this.dialog.open(CartDialogComponent, {
        data:[
            {
              id:1,
              image:"https://www.shutterstock.com/image-photo/fresh-fruits-assorted-colorful-backgroundvitamins-260nw-252338818.jpg",
              actualPrice:1000,
              totalPrice:2000,
              quantity:2,
              title:"Apple",
              description:"a for apple b for bat ..."

            },
            {
              id:2,
              image:"https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4",
              actualPrice:1000,
              totalPrice:1000,
              quantity:1,
              title:"Fruit set",
              description:"very benifitial for your helth ..."
            }
          ]
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed',result);
      });
    }


    openProductInfo(){
    const dialogRef = this.dialog.open(ProductDetailDialogComponent,{
      panelClass:"dialog-responsive"
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
    });
  }

  openStepper(){
    const dialogRef = this.dialog.open(OrderViewComponent,{
      panelClass:"dialog-responsive"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
    });
  }

}
