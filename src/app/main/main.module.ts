import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from '../common/shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from '../common/shared/components/table/table.component';
import { CartDialogComponent } from './cart-dialog/cart-dialog.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailDialogComponent } from './product-detail-dialog/product-detail-dialog.component';
import { ProductManagementModule } from './product-management/product-management.module';


@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    CartDialogComponent,
    ProductDetailDialogComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    FormsModule,
    ProductManagementModule
  ],
  exports:[]
})
export class MainModule { }
