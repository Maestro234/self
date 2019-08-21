import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { Note } from '../shared/note';
import { UserSharedService } from '../user-shared.service';
import { CreatNoteService } from '../create-note/creat-note.service';
import { NoteService } from './note.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  panelOpenState = false;
  loggedInUser: User;
  userNotes: Note[];
  noteList: Note[]=[];
  constructor(private router: Router,private userSharedSrv: UserSharedService, private noteSrv: CreatNoteService, private delSrv: NoteService) { }

  ngOnInit() {
    this.loggedInUser = JSON.parse(sessionStorage.getItem("user"))
    this.userNotes = JSON.parse(sessionStorage.getItem("note"));
    // this.userSharedSrv.updatedNoteList.subscribe(note => this.noteList = note);
    //perform an Async 
    //get the note list everytime there is a change (subscribe always on change)
    this.noteSrv.getNotes(this.loggedInUser.user_id).subscribe(
      response => {
        this.noteList = response;
        //save in browser tab as "note"
        // sessionStorage.setItem("note", JSON.stringify(this.noteList));
      }
    )
    console.log(this.noteList);
  }

 
  
  logout() {
    sessionStorage.clear();
    this.router.navigate(["/"]);
  }
}
