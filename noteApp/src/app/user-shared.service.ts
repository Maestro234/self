import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Note } from './shared/note';

@Injectable({
  providedIn: 'root'
})
export class UserSharedService {

  // private noteList = new BehaviorSubject<Note[]>(JSON.parse(sessionStorage.getItem("note")));
  // updatedNoteList = this.noteList.asObservable();

  // updateNoteList (note: Note[]) {
  //   console.log(this.noteList);
  //   console.log(typeof(this.noteList));
  //   this.noteList.next(note);
  // }
  constructor() { }
}
