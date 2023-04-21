import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddressAddComponent } from '../address-add/address-add.component';

@Component({
  selector: 'app-add-address-block',
  templateUrl: './add-address-block.component.html',
  styleUrls: ['./add-address-block.component.css']
})
export class AddAddressBlockComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  AddAddress(){
    console.log("calledd..",this.dialog)
    const dialogRef = this.dialog.open(AddressAddComponent);

    dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed',result);
    });
  }

}
