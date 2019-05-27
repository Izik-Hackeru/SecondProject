import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './users/add-user/add-user.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { LoginComponent } from './users/login/login.component';

const routes: Routes = [
  {path: 'addUser', component: AddUserComponent},
  {path: 'getAll', component: ViewAllUsersComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
