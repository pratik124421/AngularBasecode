import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/common/shared/components/dialog/confirm-dialog/confirm-dialog.component';
import { FormNames } from 'src/app/common/utils/enum';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  FormName = FormNames.Product_RegForm
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ProductCreateComponent>
  ) { }

  ngOnInit(): void {
  }

  onsubmit(data){
    console.log("done")
  }

  closeDialog(){

    this.dialogRef.close()


    // const confirmDialogRef = this.dialog.open(ConfirmDialogComponent,
    //   {
    //     data: {title:"Confirmation", message:"Do you realy want to delete this element."},
    //     disableClose : true
    //   });

    // confirmDialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed',result);
    //   if(result.event == "ok"){
    //     this.dialogRef.close()
    //   }else{
    //     console.log("not closed..")
    //   }
    // });

  }

}
