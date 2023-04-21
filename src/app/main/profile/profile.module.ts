import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/common/shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MainModule } from "../main.module";
import { ProfileRoutingModule } from "./profile-routing.module";
import { OrderModule } from "../order/order.module";
import { ProfileComponent } from "./profile.component";
import { MenuSliderDirective } from "src/app/common/directives/menuslider.directive";
import { AddressModule } from "../address/address.module";


@NgModule({
    declarations:[
      ProfileComponent,
      MenuSliderDirective
    ],
    imports:[
      ProfileRoutingModule,
      OrderModule,
      AddressModule,
      ReactiveFormsModule,
      SharedModule,
      CommonModule,
    ],
    providers:[]
})
export class ProfileModule{

}
