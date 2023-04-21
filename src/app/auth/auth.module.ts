import {NgModule} from "@angular/core"
import { RouterModule } from "@angular/router";
import { SharedModule } from "../common/shared/shared.module";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

@NgModule({
    declarations:[
        LoginComponent,
        RegisterComponent,
    ],
    imports:[
        AuthRoutingModule,
        SharedModule
    ],
    bootstrap:[]
})
export class AuthModule{}
