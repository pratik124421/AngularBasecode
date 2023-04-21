import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Route_path } from "../common/utils/enum";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const routes : Routes = [
    {
        path:Route_path.None,
        redirectTo: Route_path.Login,
        pathMatch:"full"
    },
    {path:Route_path.Login,component:LoginComponent},
    {path:Route_path.Register,component:RegisterComponent}


]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class AuthRoutingModule{

}
