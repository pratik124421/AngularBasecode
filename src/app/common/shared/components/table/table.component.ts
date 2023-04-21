import { Component, OnInit,ViewChild ,AfterViewInit,Input} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { LocationService } from 'src/app/common/services/location.service';
import { AuthService } from 'src/app/common/services/auth.service';
import {MatPaginator} from "@angular/material/paginator"
import {MatTableDataSource} from "@angular/material/table"
import {take,exhaustMap} from "rxjs"
import { AuthUserModel } from 'src/app/common/models/auth.model';
import { LocationModel } from 'src/app/common/models/location.model';
import { operation, TableNames } from 'src/app/common/utils/enum';
import { TableModel, TableonfigInterface } from 'src/app/common/utils/TableModel';


/**
 * @title Table with expandable rows
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export  class TableComponent implements OnInit,AfterViewInit{
  dataSource : MatTableDataSource<LocationModel> = new MatTableDataSource<LocationModel>()
  columnsToDisplay : any
  columnsToDisplayWithExpand:any
  expandedElement: LocationModel | null;

  opearionList:Array<operation> = []

  PageSize:number
  TotalLength:number
  PageOptions:Array<number>
  showFirstLastPageButton:boolean

  @Input("TableData") TableData : any
  @Input("tablename") TableName : TableNames
  TableConfig : TableonfigInterface

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private LocationService:LocationService,private authService:AuthService){}

  ngOnInit(): void {

    console.log("table data::: ",this.TableData)

    this.TableConfig = TableModel.GetTable(this.TableName)
    this.setTableConfig()




    console.log("table config ",this.TableConfig)
    // this.authService.UserSubject.pipe(take(1), exhaustMap(data=>{
    //   return this.LocationService.getLocationDetails()
    // })).subscribe((response)=>{
    //   console.log("userrrdata ",response)
    // })

  }

  loadPage(data){
    console.log("page ",data)
  }

  ngAfterViewInit() {
    this.columnsToDisplay = this.TableConfig.Columns;
    this.columnsToDisplayWithExpand = [...this.columnsToDisplay];

    if(this.TableConfig.Operations){
      this.columnsToDisplayWithExpand.push("operation")
      this.opearionList.push(...this.TableConfig.Operations)
    }

    // if(this.TableConfig.Expandable){
    //   this.columnsToDisplayWithExpand.push("expand")
    // }

    this.dataSource = new MatTableDataSource<LocationModel>(this.TableData)
    this.dataSource.paginator = this.paginator;

  }

  setTableConfig(){
    this.PageSize = this.TableConfig.PaginatorConfig.Pagesize
    this.TotalLength = this.TableConfig.PaginatorConfig.TotalLength
    this.PageOptions = this.TableConfig.PaginatorConfig.PageOptions
    this.showFirstLastPageButton = this.TableConfig.PaginatorConfig.showFirstLastPageButton
  }

}

