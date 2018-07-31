import { Component, OnInit } from '@angular/core';
import { UserData } from '../../Models/UserInfo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userDetails = new UserData();

  constructor() { }  

  ngOnInit() {
  }

  LogInSubmit(){
    console.log(this.userDetails);

  }

}
