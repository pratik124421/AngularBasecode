import { Injectable } from "@angular/core"
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms"
import { FormModel } from "./FormModel"


@Injectable({providedIn:"root"})
export class FormModelService{
    constructor(private formBuilder: FormBuilder){}

    public generateForm(Formame:any,DefaultData:any){
        let formObj = {}
        for(let i of FormModel.GetForm(Formame,DefaultData)["Inputs"]){
            formObj[i["InputName"]] = new FormControl(i["DefaultValue"],i["validators"])
        }
        return new FormGroup(formObj)
    }

}

