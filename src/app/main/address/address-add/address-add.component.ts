import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddressModel } from 'src/app/common/models/address.model';
import { AddressService } from 'src/app/common/services/Address.service';
import { AuthService } from 'src/app/common/services/auth.service';
import { EncryptDecryptService } from 'src/app/common/services/encrypt-decrypt.service';
import { TosterService } from 'src/app/common/services/toster.service';
import { AddressForm, FormNames, Route_path } from 'src/app/common/utils/enum';
import { FormEmmiter } from 'src/app/common/utils/FormModel';

@Component({
  selector: 'app-address-add',
  templateUrl: './address-add.component.html',
  styleUrls: ['./address-add.component.css']
})
export class AddressAddComponent implements OnInit {

  alert : string
  FormName : FormNames = FormNames.AddAddress
  AddDefaultData : AddressModel

  constructor(private AuthService : AuthService,
    private AddressService : AddressService,
    public dialogRef: MatDialogRef<AddressAddComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public AddId: any) {

      if(AddId){
        this.AddDefaultData = AddressService.GetAddress(AddId)
      }

    }

  ngOnInit(): void {

  }

  closeDialog(){
    this.dialogRef.close()
  }

  onsubmit(EmmitedObj:FormEmmiter){
    console.log(EmmitedObj)
    // const form

    const AddressObj : AddressModel = {
      [AddressForm.Id]:this.AddId,
      [AddressForm.Country]:EmmitedObj.Form.value[AddressForm.Country],
      [AddressForm.Pincode]:EmmitedObj.Form.value[AddressForm.Pincode],
      [AddressForm.HouseNo]:EmmitedObj.Form.value[AddressForm.HouseNo],
      [AddressForm.Area]:EmmitedObj.Form.value[AddressForm.Area],
      [AddressForm.Landmark]:EmmitedObj.Form.value[AddressForm.Landmark],
      [AddressForm.City]:EmmitedObj.Form.value[AddressForm.City],
      [AddressForm.State]:EmmitedObj.Form.value[AddressForm.State]
    }

    if(EmmitedObj.edited){
      this.AddressService.EditAddress(this.AddId,AddressObj)
    }else{
      this.AddressService.AddAddress(AddressObj)
    }

    this.dialogRef.close()


  }

}
