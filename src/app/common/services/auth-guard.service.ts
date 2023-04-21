import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthUserModel } from "../models/auth.model";
import { StorageKeyNames } from "../utils/enum";
import { AuthService } from "./auth.service";
import { EncryptDecryptService } from "./encrypt-decrypt.service";

@Injectable({providedIn:"root"})
export class AuthGuard implements CanActivate{
    constructor(private EncryptDecryptService : EncryptDecryptService,private Route:Router,private ActiveRoute:ActivatedRoute,private AuthService:AuthService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this.EncryptDecryptService.getDecryptedLocalstorage(
            StorageKeyNames.token
        )){
            const user = new AuthUserModel()
            user.logedin = true
            user.user_auth_token = this.EncryptDecryptService.getDecryptedLocalstorage(StorageKeyNames.token)
            user.user_email = ""
            this.AuthService.UserSubject.next(user)
            return true
        }
        else{
            console.log("::::::::")
            this.Route.navigate(["main/page/auth/login"])
            return false
        }
    }
}
