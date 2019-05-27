import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServerService {

  baseUrl ='http://localhost:8080/api/users/';
  constructor(private http: HttpClient) {
    console.log('server constructor');
   }

   addUser(data) {
     return this.http.post(this.baseUrl + 'addClient', data);
   }

   removeUser(){

   }

   updateUser() {

   }

   getAllUsers(){
    return this.http.get(this.baseUrl + 'allUsers');
   }

   login(username, password){
    return this.http.post(this.baseUrl + 'login', {username: username, password: password});
   }

}
