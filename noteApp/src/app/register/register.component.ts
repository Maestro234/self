import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { Router } from '@angular/router'
import { LoginService } from '../login/login.service';
import { RegisterService } from './register.service';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  successMessage: string = "";
  errorMessage: string ="";
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private registerService: RegisterService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.registerForm = this.formBuilder.group({
      username: [this.user.username, [Validators.required, Validators.pattern("^[a-zA-Z]+")]],
      email: [this.user.email, [Validators.required, Validators.email]],
      password: [this.user.password, [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", Validators.required, null]
    });
  }

  onLogin() {
    this.user = this.registerForm.value as User;
    this.user.user_id = null;
    this.registerService.register(this.user)
      .subscribe(
          response => {
              this.successMessage = response;
              this.router.navigate(['/login']);
            },
          error => { 
            this.errorMessage = error;
            },
          () => {
        console.log("registered")
      }
    )
  }
}


