import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { httpInterceptor } from './common/interceptors/http.interceptor';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedModule } from './common/shared/shared.module';
import { ErrorInterceptor } from './common/interceptors/error.interceptor';
import { DragDropDirective } from './common/directives/dragdrop.directive';

@NgModule({
  declarations: [
    AppComponent,
    DragDropDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:httpInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
