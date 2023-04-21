import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/common/shared/shared.module";
import { ProductManagementRoutingModule } from "./product-management-routing.module";
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ProductDetailComponent } from "./product-detail/product-detail.component";


@NgModule({
    declarations:[
    ProductViewComponent,
    ProductCreateComponent,
    ProductDetailComponent
    ],
    imports:[
        ProductManagementRoutingModule,
        SharedModule,
        CommonModule
    ],
    providers:[],
    exports:[ProductDetailComponent]
})
export class ProductManagementModule{

}
