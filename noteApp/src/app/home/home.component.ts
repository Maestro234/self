import { Component, OnInit } from '@angular/core';
import { Note } from '../shared/note';
import { UserHomeServiceService } from './user-home-service.service';
import { User } from '../shared/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggedInUser: User;
  note: Note[] = [];
  errMsg: string;

  constructor(private router: Router,private userHomeService: UserHomeServiceService) { }

  ngOnInit() {
   //get the logged in user from session storage 
    this.loggedInUser = JSON.parse(sessionStorage.getItem("user"));
    //pass the user id to fetch the users notes from backend
    this.userHomeService.getUserNotes(this.loggedInUser.user_id).subscribe(
      notes => {
        this.note= notes;
        //create a var in session storage and store the user's notes 
        sessionStorage.setItem("note", JSON.stringify(this.note));
      },
      error => {
        this.errMsg = error;
      },
      () => {
        console.log("Notes fetch completed");
      }
    )
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(["/"]);
  }

}
