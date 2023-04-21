import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { ProductListResolverResolver } from "src/app/common/services/product-list-resolver.resolver";
import { Route_path } from "src/app/common/utils/enum";
import { OrderHistoryComponent } from "./order-history/order-history.component";
import { OrderViewComponent } from "./order-view/order-view.component";

const Route : Routes = [
    {path:"",component:OrderViewComponent},
    {path:"orderhistory",component:OrderHistoryComponent}
]

@NgModule({
    imports:[RouterModule.forChild(Route)],
    exports:[RouterModule]
})
export class OrderRoutingModule{

}
