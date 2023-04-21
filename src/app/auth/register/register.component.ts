import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth.service';
import { TosterService } from 'src/app/common/services/toster.service';
import { FormNames, Route_path, UserCollections } from 'src/app/common/utils/enum';
import { FormEmmiter } from 'src/app/common/utils/FormModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Login_Path : string
  FormName : FormNames = FormNames.RegisterForm

  constructor(private AuthService : AuthService,private Route:Router) {
    this.Login_Path =  Route_path.backword + Route_path.Seperator + Route_path.Login
   }

  ngOnInit(): void {}

  onsubmit(EmmitedObj:FormEmmiter){
    console.log(EmmitedObj)

    this.AuthService.Register({
      [UserCollections.user_email] : EmmitedObj.Form.get(UserCollections.user_email).value,
      [UserCollections.user_password] : EmmitedObj.Form.get(UserCollections.user_password).value,
      [UserCollections.user_type] : "user",

    }).subscribe((response)=>{
      console.log("response of api: ",response)
    })

    this.Route.navigate(["/main/auth/login"])
  }

}
