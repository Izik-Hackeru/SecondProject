import { Component, OnInit } from '@angular/core';
import { MyServerService } from '../../my-server.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  firstName: String;
  constructor(private server: MyServerService) {
    console.log(this.server);
   }

  ngOnInit() {
  }

  add(){
    this.server.addUser({firstName: this.firstName}).
    subscribe(data=>{
      console.log(data);
    }, error=>{
      console.log(error);
    });
  }

}
