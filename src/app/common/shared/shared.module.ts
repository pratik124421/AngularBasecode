import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { ConfirmDialogComponent } from './components/dialog/confirm-dialog/confirm-dialog.component';
import { TagComponent } from './components/tag/tag.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { StepperDirective } from '../directives/stepper.directive';


const SharedComponent : any[] = [
  SidebarComponent,
  NavbarComponent,
  ReactiveFormComponent,
  CardComponent,
  ButtonComponent,
  TableComponent,
  SpinnerComponent,
  SplashScreenComponent,
  ConfirmDialogComponent,
  TagComponent,
  StepperComponent,


  StepperDirective
]

@NgModule({
  declarations: [
    SharedComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    SharedComponent,
    MaterialModule
  ]
})
export class SharedModule { }
