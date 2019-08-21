import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { UserHomeServiceService } from '../home/user-home-service.service';
import { CreatNoteService } from './creat-note.service';
import { Note } from '../shared/note';
import { UserSharedService } from '../user-shared.service';
import { Subject } from '../shared/subject';
// import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {
  dateCreated = new Date();//date obj
  subject: Subject;
  note: Note;
  noteList: Array<Note> = [];
  loggedInUser: User;
  success: string;
  err:string;

  // subjectFormGroup: FormGroup;
  // accessFormGroup: FormGroup;

  constructor(private createNote: CreatNoteService, private userSharedService: UserSharedService, private noteSrv: CreatNoteService) { }

  ngOnInit() {
    this.loggedInUser = JSON.parse(sessionStorage.getItem("user"));
    this.subject = new Subject();
    this.note = new Note();
    this.success = "";
    this.err = "";

    // this.subjectFormGroup = this._formBuilder.group({
    //   firstCtrl: ['', Validators.required]
    // });
    // this.accessFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });

  }

  // onCreate() {
  //   //makes a post call to persist the note
  //   console.log("in on create:::::::::subscribe");
    
  //   this.createNote.createNotes(this.loggedInUser.id, this.subject).subscribe(
  //     response => {
  //       this.success = response;
  //     },
  //     error => {
  //       this.err = error;
  //     },
  //     () => console.log(this.success)
  //   );
    
  // }

  addNew() {
    this.noteList.push(this.note);
    console.log(this.noteList);
    this.note = new Note();
  }

  done() {
    this.noteList.push(this.note);
    this.subject.notes = this.noteList;
    this.createNote.createNotes(this.loggedInUser.user_id, this.subject).subscribe(
      response => {
        this.success = response;
      },
      error => {
        this.err = error;
      },
      () => console.log(this.success)
    );
  }


}
