import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { User } from '../shared/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User ;
  errorMsg: string;
  loginForm: FormGroup;
  logging: boolean =false;

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.user = new User();
    this.createForm();
  }

  createForm(){
    this.loginForm = this.formBuilder.group({
      username: [this.user.username, [Validators.required]],
      password: [this.user.password, [Validators.required]]
    })
  }
  
  onLogin() {
    this.logging = true;
    this.user = this.loginForm.value as User;
    this.loginService.login(this.user)
      .subscribe(
          response => {
            this.user = response;
            console.log(this.user)
            //create a variable in session storage called user and store the user details on it
            sessionStorage.setItem("user", JSON.stringify(this.user));
            this.logging = false;
            //route the user after successful login to the user's home page
            this.router.navigate(['/home']);
           },
          error => {
            this.logging = false;
            this.errorMsg = error;
          },
          () => {
            console.log("user fetch completed")
          }
    )

    console.log(this.user);
  }
}
