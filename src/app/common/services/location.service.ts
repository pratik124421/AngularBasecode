
import {Injectable} from "@angular/core"
import { Router } from "@angular/router"
import {BehaviorSubject, Subject} from "rxjs"
import { AuthUserModel, LoginModel, RegisterModel } from "../models/auth.model"
import {HttpClient} from "@angular/common/http"
import { ApiRoute } from "../utils/enum"
import { environment } from "src/environments/environment"
import { LocationModel } from "../models/location.model"

@Injectable({providedIn:"root"})
export class LocationService{
    constructor(private Route : Router,private http:HttpClient){
        // this.getUserSubject()
    }

    getUserSubject(){
        // this.UserSubject = new Subject<AuthUserModel>().asObservable()
    }

    getLocationDetails(){
        const url = ApiRoute.GetLocation_url
        return this.http.post<LocationModel[]>(url,{limit:10})
    }

}
