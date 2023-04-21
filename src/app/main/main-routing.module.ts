import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../common/services/auth-guard.service';
import { Route_path } from '../common/utils/enum';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {path: Route_path.None,redirectTo:"page/dashboard",pathMatch:"full"},
  {path: Route_path.Page, component: MainComponent,children:[
    {path:Route_path.Auth,
      loadChildren:()=>import("../auth/auth.module").then(m => m.AuthModule)
    },
    {path:Route_path.Dashboard,component:DashboardComponent},
    {path:Route_path.Product,loadChildren:()=>import("./product-management/product-management.module").then(m => m.ProductManagementModule)},
    {path:Route_path.Order,loadChildren:()=>import("./order/order.module").then(m => m.OrderModule)},
  ]},
  {path:Route_path.Profile,loadChildren:()=>import("./profile/profile.module").then(m => m.ProfileModule)}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
