import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressRoutingModule } from './address-routing.module';
import { AddressViewComponent } from './address-view/address-view.component';
import { SharedModule } from 'src/app/common/shared/shared.module';
import { AddressAddComponent } from './address-add/address-add.component';
import { AddAddressBlockComponent } from './add-address-block/add-address-block.component';



@NgModule({
  declarations: [
    AddressViewComponent,
    AddressAddComponent,
    AddAddressBlockComponent
  ],
  imports: [
    CommonModule,
    AddressRoutingModule,
    SharedModule
  ],
  exports:[
    AddressViewComponent,
    AddAddressBlockComponent
  ]
})
export class AddressModule { }
