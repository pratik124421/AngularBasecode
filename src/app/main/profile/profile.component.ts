import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AddressService } from "src/app/common/services/Address.service";
import { AddressAddComponent } from "../address/address-add/address-add.component";

@Component({
    selector:"app-profile",
    templateUrl:"./profile.component.html",
    styleUrls:["./profile.component.css"]
})
export class ProfileComponent implements OnInit{

    ActiveLink : string
    addressList : any
    constructor(private AddressService : AddressService){}

    ngOnInit(): void {
        this.ActiveLink = "Profile"
        this.addressList = this.AddressService.AddressList
    }

    handlePageEvent(event){}


    fetchProfile(){
        this.ActiveLink = "Profile"
    }

    fetchOrders(){
        this.ActiveLink = "Order"

    }

    fetchAddress(){
        this.ActiveLink = "Address"

    }

}
