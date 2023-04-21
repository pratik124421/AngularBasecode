import { NgModule } from '@angular/core';

import {MatButtonModule} from "@angular/material/button"
import {MatSidenavModule} from "@angular/material/sidenav"
import {MatListModule} from "@angular/material/list"
import {MatExpansionModule} from "@angular/material/expansion"
import {MatToolbarModule} from "@angular/material/toolbar"
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field"
import {MatSelectModule} from "@angular/material/select"
import {MatInputModule} from "@angular/material/input"
import {MatCardModule} from "@angular/material/card"
import {MatTooltipModule} from "@angular/material/tooltip"
import {MatSnackBarModule} from "@angular/material/snack-bar"
import {MatTableModule} from "@angular/material/table"
import {MatPaginatorModule} from "@angular/material/paginator"
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner"
import {MatDialogModule} from "@angular/material/dialog"
import { MatChipsModule } from "@angular/material/chips"
import {MatStepperModule} from "@angular/material/stepper"

@NgModule({
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatChipsModule,
    MatStepperModule
  ],
  exports:[
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatChipsModule,
    MatStepperModule
  ]
})
export class MaterialModule { }
