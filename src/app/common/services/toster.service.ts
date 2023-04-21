import {Injectable} from "@angular/core"
import {MatSnackBar} from "@angular/material/snack-bar"
import { TosterTypes } from "../utils/enum"

export interface TosterOptions{
    duration:number
    horizontalPosition : string
    verticalPosition : string
}

@Injectable({providedIn:"root"})
export class TosterService{

    constructor(public matToster:MatSnackBar){}

    displaySnackBar(message:string,type:TosterTypes,options?:any){

        this.matToster.open(
            message,
            type,
            {
                panelClass: type == TosterTypes.Success ? "toster-success" : type == TosterTypes.Error ? "toster-error" : type == TosterTypes.Info ? "toster-info" : "",
                duration: options?.duration ? options.duration : 10000,
                horizontalPosition: options?.horizontalPosition ? options.horizontalPosition : 'right',
                verticalPosition: options?.verticalPosition? options.verticalPosition : 'top',
            }
        )
    }
}
