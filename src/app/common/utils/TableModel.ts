import { Validators } from "@angular/forms";
import { FormNames, LocationCollections, operation, TableNames, UserCollections } from "./enum";

export interface InputInterface{
    validators:any[],
    Errormsg:{[key:string]:string},
    InputName:string,
    DefaultValue:any,
    InputType:String,
    Label:String,
    Options?: Array<{"Key":string,"Value":String}>,
    Hint?:string
}

export interface ButtonInterface{
    ButtonName:string,
    Label:string
}

export interface FormInputInterface{

    Inputs:InputInterface[],
    Buttons:ButtonInterface[]


}

export interface PaginatorConfigInterface{
    Pagesize:number
    TotalLength:number
    PageOptions:Array<number>
    showFirstLastPageButton:boolean // used to go to first and last page directly
}

export interface TableonfigInterface{
    Columns:Array<string>
    Expandable?:boolean
    ExpandedColumns?:Array<string>
    Paginator?:boolean
    PaginatorConfig?:PaginatorConfigInterface
    Operations?:operation[]

}



export class TableModel{
    public static GetTable(TableName:TableNames) : TableonfigInterface{

        switch(TableName){

            case TableNames.LocationTable:
                return {
                    Columns:[LocationCollections.location_contry],
                    ExpandedColumns:[LocationCollections.location_state],
                    Expandable:true,
                    Paginator:true,
                    Operations:[operation.Edit,operation.Delete],
                    PaginatorConfig:{
                        Pagesize:5,
                        TotalLength:8,
                        PageOptions:[5,10],
                        showFirstLastPageButton:true
                    }
                }

                case TableNames.ProductTable:
                    return {
                        Columns:[LocationCollections.location_contry],
                        ExpandedColumns:[LocationCollections.location_state],
                        Expandable:true,
                        Paginator:true,
                        Operations:[operation.Edit,operation.Delete],
                        PaginatorConfig:{
                            Pagesize:5,
                            TotalLength:8,
                            PageOptions:[5,10],
                            showFirstLastPageButton:true
                        }
                    }

            default:
                return undefined
        }

    }
}

