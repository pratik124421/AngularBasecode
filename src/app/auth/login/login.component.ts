import { ThisReceiver } from '@angular/compiler';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthUserModel } from 'src/app/common/models/auth.model';
import { AuthService } from 'src/app/common/services/auth.service';
import { EncryptDecryptService } from 'src/app/common/services/encrypt-decrypt.service';
import { TosterService } from 'src/app/common/services/toster.service';
import { ConfirmDialogComponent } from 'src/app/common/shared/components/dialog/confirm-dialog/confirm-dialog.component';
import { DialogType, FormNames, Route_path, StorageKeyNames, TosterTypes, UserCollections } from 'src/app/common/utils/enum';
import { FormEmmiter } from 'src/app/common/utils/FormModel';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  alert : String
  Register_path : String
  FormName : FormNames = FormNames.LoginForm
  constructor(private AuthService : AuthService,
    private Route:Router,
    private TosterService:TosterService,
    private EncryptDecryptService:EncryptDecryptService,
    public dialog: MatDialog) {


  }

  ngOnInit(): void {
    this.Register_path = Route_path.backword + Route_path.Seperator + Route_path.Register
  }

  onsubmit(EmmitedObj:FormEmmiter){

    console.log("user loged in: ",EmmitedObj)

    this.AuthService.Login({
      [UserCollections.user_email] : EmmitedObj.Form.get(UserCollections.user_email).value,
      [UserCollections.user_password] : EmmitedObj.Form.get(UserCollections.user_password).value,
    }).subscribe((response:any)=>{

      console.log("response of api: ",response)
      const user = new AuthUserModel()
      user.logedin = true
      user.user_auth_token = response.access_token
      user.user_email = EmmitedObj.Form.get(UserCollections.user_email).value
      this.AuthService.UserSubject.next(user)
      const current_token = `Bearer ${response.access_token}`
      const refresh_token = `Bearer ${response.refresh_token}`

      this.EncryptDecryptService.setEncryptedLocalstorage(StorageKeyNames.token,current_token)
      this.EncryptDecryptService.setEncryptedLocalstorage(StorageKeyNames.refreshToken,refresh_token)

      this.TosterService.displaySnackBar(
        "Login Successfull",
        TosterTypes.Success
      )

      this.Route.navigate(["/main/page/dashboard"])

    },
    (error)=>{
        if(error.code === 400){
          this.TosterService.displaySnackBar(
            "Unauthorized attempt",
            TosterTypes.Error
          )
        }
    }
    )

  }


  // dialogopen(){

  //   const dialogRef = this.dialog.open(ConfirmDialogComponent, {
  //     data: {type: DialogType.ConfirmDialog, message:"Do you realy want to delete this element."},
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed',result);
  //   });
  // }

}
