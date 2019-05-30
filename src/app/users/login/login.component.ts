import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { MyServerService } from '../../my-server.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {


  @ViewChild('input1') input: ElementRef;
  username: String;
  password: String;

  constructor(private server: MyServerService, private route: Router, public dialog: MatDialog) { }

  ngOnInit() {

  }

  login() {
    // const dialogRef = this.dialog.open(LoginDialogComponent, {
    //   width: '500px'
    // })
    // dialogRef.afterClosed().subscribe(response => {

    // })
    // if (5 < 6) {
    //   return;
    // }
    this.server.login(this.username, this.password).subscribe(
      data => {
        if (data) {
          //goto home
          this.route.navigate(['/addUser']);
        }
      }, error => {
        console.log(error);
        alert('try again');
      }
    )
  }

  ngAfterViewInit() {
    //alert(this.input);
    console.log(this.input);

  }



}


@Component({
  selector: 'app-login-dialog',
  templateUrl: 'loginDialog.html'
})
export class LoginDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<LoginDialogComponent>) {

  }

  ngOnInit() {

  }
}