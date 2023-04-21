
import {Injectable} from "@angular/core"
import { Router } from "@angular/router"
import {HttpClient} from "@angular/common/http"
import { ApiRoute } from "../utils/enum"
import { LocationModel } from "../models/location.model"
import {Observable} from "rxjs"

@Injectable({providedIn:"root"})
export class UpserProductListService{
    constructor(private Route : Router,private http:HttpClient){
        // this.getUserSubject()
    }


    getUserProductList(){

        // return new Observable(observer =>{
        //     setTimeout(()=>{
        //         observer.next([1,2,3,4,5])
        //         observer.complete()
        //     },3000)
        // })

        const url = ApiRoute.GetLocation_url
        return this.http.post<LocationModel[]>(url,{limit:10})
    }

}
