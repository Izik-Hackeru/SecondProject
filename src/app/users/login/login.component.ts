import { Component, OnInit } from '@angular/core';
import { MyServerService } from '../../my-server.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(private server: MyServerService, private route: Router) { }

  ngOnInit() {
  }

  login() {
    this.server.login(this.username, this.password).subscribe(
      data=>{
        if(data){
          //goto home
          this.route.navigate(['/addUser']);
        }
      }, error=>{
        console.log(error);
        alert('try again');
      }
    )
  }

}
