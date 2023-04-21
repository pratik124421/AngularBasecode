import { HttpClient } from "@angular/common/http"
import {Injectable} from "@angular/core"
import { AddressModel } from "../models/address.model"


@Injectable({providedIn:"root"})
export class AddressService{

    AddressList : AddressModel[] = [
        {
            Id:"1",
            Country:"India",
            Pincode : "382443",
            House_no:"A/7 vrajbhumisoc ,shakjfnkj sk fskja kjsa kj fsaksafkj sfakj fsk fska sfkajksfja",
            Area : "Isanpur",
            Landmark : "OPP Jethabhai vav",
            City : "Ahmedabad",
            State : "Gujarat"
        },
        {
            Id:"2",
            Country:"USA",
            Pincode : "382443",
            House_no:"A/7 vrajbhumisoc",
            Area : "Isanpur",
            Landmark : "OPP Jethabhai vav",
            City : "Ahmedabad",
            State : "Gujarat"
        }
    ]

    constructor(private http:HttpClient){}

    AddAddress(address:AddressModel){
        this.AddressList.unshift(address)
    }

    EditAddress(Id:string,AddressData : AddressModel){
        for(let i=0;i<this.AddressList.length;i++){
            if(this.AddressList[i]["Id"] == Id){
                this.AddressList[i] = AddressData
            }
        }
    }

    GetAddress(Id:string){
        const AddData = this.AddressList.filter((val)=>val.Id == Id)
        console.log("datta ",AddData)
        return AddData.length>0 ? AddData[0] : undefined
    }

}
