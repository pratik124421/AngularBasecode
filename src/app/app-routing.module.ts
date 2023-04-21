import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route_path } from './common/utils/enum';

const routes: Routes = [
  {path:Route_path.None,redirectTo:Route_path.Main,pathMatch:"full"},
  {path:Route_path.Main,loadChildren:()=>import("./main/main.module").then(m => m.MainModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
