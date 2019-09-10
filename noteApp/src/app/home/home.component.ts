import { Component, OnInit } from '@angular/core';
import { Note } from '../shared/note';
import { UserHomeServiceService } from './user-home-service.service';
import { User } from '../shared/user';
import { Router } from '@angular/router';
import { DBFile } from '../shared/dbfile';
import { UserFiles } from '../shared/user-files';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggedInUser: User;
  note: Note[] = [];
  fileList: UserFiles[] =[];
  errMsg: string;
  sFile: UserFiles[]=[];
  response: any;

  constructor(private router: Router,private userHomeService: UserHomeServiceService) { }

  ngOnInit() {
   //get the logged in user from session storage 
    this.loggedInUser = JSON.parse(sessionStorage.getItem("user"));
    //pass the user id to fetch the users notes from backend
    this.userHomeService.getUserFiles(this.loggedInUser.username).subscribe(
      files => {
        this.fileList= files;
        //create a var in session storage and store the user's notes 
        sessionStorage.setItem("files", JSON.stringify(this.fileList));
      },
      error => {
        this.errMsg = error;
      },
      () => {
        console.log("file fetch completed");
      }
    )
  }


  searchFilter(criteria: string){
    if(criteria.length > 0){
      console.log(criteria)
      this.userHomeService.getAllFiles(criteria)
      .subscribe(
        allFiles => {
          this.sFile = allFiles;
          console.log(allFiles);
        },
        error => {
          this.errMsg = error;
        }
      )
    }
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(["/"]);
  }

}
