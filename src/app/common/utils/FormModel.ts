import { FormGroup, Validators } from "@angular/forms";
import { AddressModel } from "../models/address.model";
import {LocationModel} from "../models/location.model"
import { AddressForm, FormNames, ProductForm, UserCollections } from "./enum";

export interface InputInterface{
    validators:any[],
    Errormsg?:{[key:string]:string},
    InputName:string,
    DefaultValue:any,
    InputType:String,
    Label:String,
    Options?: Array<{"Key":string,"Value":String}>,
    Hint?:string,
    type:string
}

export interface ButtonInterface{
    ButtonName:string,
    Label:string
}

export interface FormEmmiter{
    Form:FormGroup,
    edited:boolean
}

export interface FormInputInterface{

    Inputs:InputInterface[],
    Buttons:ButtonInterface[]


}





export class FormModel{
    public static GetForm(Formname:FormNames,DefaultData?: any) : FormInputInterface {

        console.log("default adtda : ",DefaultData)
        switch(Formname){

            case FormNames.LoginForm:
                return {
                        Inputs:[
                            {
                                InputName:UserCollections.user_email,
                                validators:[Validators.required],
                                Errormsg:{
                                    "required":"username is mandatory"
                                },
                                DefaultValue:"",
                                InputType:"Text",
                                Label:"Username",
                                type:"text"

                            },
                            {
                                InputName:UserCollections.user_password,
                                validators:[Validators.required,Validators.minLength(3)],
                                Errormsg:{
                                        "required":"password is mandatory",
                                        "minlength":"password should contain minimum 3 chnrachter"
                                    },
                                DefaultValue:"",
                                InputType:"Password",
                                Label:"Password",
                                type:"password"

                            },
                        ],
                        Buttons :[
                            {
                                ButtonName:"Submit",
                                Label:"Submit"
                            },
                            // {
                            //     ButtonName:"Reset",
                            //     Label:"Clear"
                            // }
                        ]
                    }

            case FormNames.RegisterForm:
                return {
                        Inputs:[
                            {
                                InputName:UserCollections.user_email,
                                validators:[Validators.required],
                                Errormsg:{
                                    "required":"username is mandatory"
                                },
                                DefaultValue:"",
                                InputType:"Text",
                                Label:"Username",
                                type:"text"
                            },
                            {
                                InputName:UserCollections.user_password,
                                validators:[Validators.required,Validators.minLength(3)],
                                Errormsg:{
                                        "required":"password is mandatory",
                                        "minlength":"password should contain minimum 3 chnrachter"
                                    },
                                DefaultValue:"",
                                InputType:"Password",
                                Label:"Password",
                                type:"password"


                            },
                        ],
                        Buttons :[
                            {
                                ButtonName:"Submit",
                                Label:"Submit"
                            },
                        ]
                    }

            case FormNames.Product_RegForm:
                return {
                        Inputs:[
                            {
                                InputName:ProductForm.ProductTitle,
                                validators:[Validators.required],
                                Errormsg:{
                                    "required":"title is mandatory"
                                },
                                DefaultValue:"",
                                InputType:"Text",
                                Label:"Title",
                                type:"text"
                            },
                            {
                                InputName:ProductForm.ProductDescription,
                                validators:[Validators.required,Validators.minLength(10)],
                                Errormsg:{
                                        "required":"Description is mandatory",
                                        "minlength":"description should contain minimum 10 chnrachter"
                                    },
                                DefaultValue:"",
                                InputType:"Text",
                                Label:"Description",
                                type:"text"

                            },
                            {
                                InputName:ProductForm.ProductPrice,
                                validators:[Validators.required],
                                Errormsg:{
                                        "required":"price is mandatory",
                                    },
                                DefaultValue:"",
                                InputType:"Number",
                                Label:"Price",
                                type:"text"

                            },
                            {
                                InputName:ProductForm.ProductImage,
                                validators:[],
                                DefaultValue: undefined,
                                InputType:"DragFile",
                                Label:"Image",
                                type:"file"

                            },

                        ],
                        Buttons :[
                            {
                                ButtonName:"Submit",
                                Label:"Submit"
                            },
                        ]
                    }

            case FormNames.AddAddress:
                return {
                        Inputs:[
                            {
                                InputName:AddressForm.Country,
                                validators:[Validators.required],
                                Errormsg:{
                                    "required":"title is mandatory"
                                },
                                DefaultValue: DefaultData.Country,
                                Options:[{"Key":"India","Value":"India"}],
                                InputType:"Select",
                                Label:"Title",
                                type:"text"
                            },
                            {
                                InputName:AddressForm.Pincode,
                                validators:[Validators.required],
                                Errormsg:{
                                        "required":"Pincode is mandatory",
                                    },
                                DefaultValue:DefaultData.Pincode,
                                InputType:"Text",
                                Label:"Pincode",
                                type:"text"

                            },
                            {
                                InputName:AddressForm.HouseNo,
                                validators:[Validators.required],
                                Errormsg:{
                                        "required":"this Feild is mandatory",
                                    },
                                DefaultValue: DefaultData.House_no,
                                InputType:"Text",
                                Label:"Flat, House no., Building, Company, Apartment",
                                type:"text"

                            },
                            {
                                InputName:AddressForm.Area,
                                validators:[Validators.required],
                                Errormsg:{
                                        "required":"this Feild is mandatory",
                                    },
                                DefaultValue: DefaultData.Area,
                                InputType:"Text",
                                Label:"Area, Street, Sector, Village",
                                type:"text"

                            },
                            {
                                InputName:AddressForm.Landmark,
                                validators:[Validators.required],
                                Errormsg:{
                                        "required":"this Feild is mandatory",
                                    },
                                DefaultValue: DefaultData.Landmark,
                                InputType:"Text",
                                Label:"Landmark",
                                type:"text"

                            },
                            {
                                InputName:AddressForm.City,
                                validators:[Validators.required],
                                Errormsg:{
                                        "required":"this Feild is mandatory",
                                    },
                                DefaultValue: DefaultData.City,
                                InputType:"Text",
                                Label:"City",
                                type:"text"

                            },

                            {
                                InputName:AddressForm.State,
                                validators:[Validators.required],
                                Errormsg:{
                                        "required":"this Feild is mandatory",
                                    },
                                DefaultValue: DefaultData.State,
                                InputType:"Text",
                                Label:"State",
                                type:"text"

                            },
                        ],
                        Buttons :[
                            {
                                ButtonName:"Submit",
                                Label:"Submit"
                            },
                        ]
                    }


            default :
                return {
                    Inputs:[
                        {
                            InputName:"Input",
                            validators:[Validators.required],
                            Errormsg:{
                                "required":"username is mandatory"
                            },
                            DefaultValue:"",
                            InputType:"Text",
                            Label:"Default Input",
                            type:"text"
                        }
                    ],
                    Buttons:[
                        {
                            ButtonName:"Submit",
                            Label:"Default Submit"
                        }
                    ]
                }
        }
    }

    public static GetFileInput(inputList:InputInterface[]){
        console.log("form data ",inputList)
        const fileInputs = inputList.filter((val)=>val.type == "file")
        return fileInputs[0]
    }

}

