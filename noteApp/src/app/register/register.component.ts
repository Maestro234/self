import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { Router } from '@angular/router'
import { LoginService } from '../login/login.service';
import { RegisterService } from './register.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  success: string= "";
  errorMsg: string;
  constructor(private router: Router, private registerService: RegisterService) { }

  ngOnInit() {
  }

  onLogin() {
    this.user.user_id=null;
    this.registerService.register(this.user).subscribe(
      response => {
        this.success = response;
        this.router.navigate(['/login']);
      },
      error => {
        this.errorMsg = error;
      },
      () => {
        console.log("registered")
      }
    )

    console.log(this.user);
  }
}


