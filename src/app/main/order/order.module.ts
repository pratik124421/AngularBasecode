import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/common/shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { OrderRoutingModule } from "./order-routing.module";
import { OrderViewComponent } from './order-view/order-view.component';
import { MainModule } from "../main.module";
import { ProductDetailDialogComponent } from "../product-detail-dialog/product-detail-dialog.component";
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ProductManagementModule } from "../product-management/product-management.module";


@NgModule({
    declarations:[
    OrderViewComponent,
    OrderHistoryComponent,
  ],
    imports:[
        OrderRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        CommonModule,
        MainModule,
        ProductManagementModule
    ],
    providers:[],
    exports:[
      OrderHistoryComponent
    ]
})
export class OrderModule{

}
