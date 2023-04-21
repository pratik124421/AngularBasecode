import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from "./profile.component";

const Route : Routes = [
    {path:"",component:ProfileComponent}
]

@NgModule({
    imports:[RouterModule.forChild(Route)],
    exports:[RouterModule]
})
export class ProfileRoutingModule{

}
