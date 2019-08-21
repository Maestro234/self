import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { User } from '../shared/user';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User ;
  errorMsg: string;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.user = new User();
  }

  onLogin() {
    this.loginService.login(this.user).subscribe(
      response => {
        //return the user details from backend if successful
        this.user = response;
         //create a variable in session storage called user and store the user details on it
        sessionStorage.setItem("user", JSON.stringify(this.user));
        //route the user after successful login to the user's home page
        this.router.navigate(['/home']);
      },
      error => {
        this.errorMsg = error;
      },
      () => {
        console.log("fetch user completed")
      }
    )

    console.log(this.user);
  }
}
