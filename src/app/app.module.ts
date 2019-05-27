import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './users/add/add.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { LoginComponent } from './users/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    AddUserComponent,
    ViewAllUsersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
