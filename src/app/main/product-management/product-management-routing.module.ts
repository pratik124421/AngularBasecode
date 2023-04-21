import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { ProductListResolverResolver } from "src/app/common/services/product-list-resolver.resolver";
import { Route_path } from "src/app/common/utils/enum";
import { ProductViewComponent } from "./product-view/product-view.component";

const Route : Routes = [
    {path:Route_path.None,component:ProductViewComponent,resolve:{products:ProductListResolverResolver}}
]

@NgModule({
    imports:[RouterModule.forChild(Route)],
    exports:[RouterModule]
})
export class ProductManagementRoutingModule{

}
