import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddressModel } from 'src/app/common/models/address.model';
import { AddressAddComponent } from '../address-add/address-add.component';

@Component({
  selector: 'app-address-view',
  templateUrl: './address-view.component.html',
  styleUrls: ['./address-view.component.css']
})
export class AddressViewComponent implements OnInit {

  @Input("addInfo") AddInfo : AddressModel

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  EditAddress(Id:string){

    console.log("calledd..",this.dialog)
    const dialogRef = this.dialog.open(AddressAddComponent,{
      data:Id
    });

    dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed',result);
    });

  }

}
