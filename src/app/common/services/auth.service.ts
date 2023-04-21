
import {Injectable} from "@angular/core"
import { Router } from "@angular/router"
import {BehaviorSubject, Subject} from "rxjs"
import { AuthUserModel, LoginModel, RegisterModel } from "../models/auth.model"
import {HttpClient} from "@angular/common/http"
import { ApiRoute, StorageKeyNames } from "../utils/enum"
import { environment } from "src/environments/environment"
import {EncryptDecryptService} from "../services/encrypt-decrypt.service"

@Injectable({providedIn:"root"})
export class AuthService{
    UserSubject = new BehaviorSubject<AuthUserModel>(null)
    constructor(private Route : Router,private http:HttpClient,private EncryptDecryptService:EncryptDecryptService){
        // this.getUserSubject()
    }

    getUserSubject(){
        // this.UserSubject = new Subject<AuthUserModel>().asObservable()
    }

    signOut(){
        this.EncryptDecryptService.removeEncryptedLocalstorage(StorageKeyNames.token)
        this.EncryptDecryptService.removeEncryptedLocalstorage(StorageKeyNames.refreshToken)

        this.UserSubject.next(null)
        this.Route.navigate(["main/page/auth/login"])
    }

    Login(body:LoginModel){
        const url = ApiRoute.login_url
        return this.http.post<LoginModel>(url,body)
    }

    Register(body:RegisterModel){
        const url = ApiRoute.register_url
        return this.http.post<RegisterModel>(url,body)
    }

}
