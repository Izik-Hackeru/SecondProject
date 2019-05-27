import { Component, OnInit } from '@angular/core';
import { MyServerService } from '../my-server.service'

@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.css']
})
export class ViewAllUsersComponent implements OnInit {

  users: any = [];
  constructor(private server: MyServerService) { }

  ngOnInit() {
    this.server.getAllUsers().subscribe(data=>{
      //console.log(data);
      this.users = data;
    })
  }

}
