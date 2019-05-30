import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import { CdkTableModule } from "@angular/cdk/table";
import { CdkTreeModule } from "@angular/cdk/tree";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './users/add/add.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { LoginComponent, LoginDialogComponent } from './users/login/login.component';

import {
  MatTableModule,
  MatDialogModule
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    AddUserComponent,
    ViewAllUsersComponent,
    LoginComponent,
    LoginDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatTableModule, MatDialogModule],
  entryComponents: [
    LoginDialogComponent

  ]
})
export class AppModule { }
