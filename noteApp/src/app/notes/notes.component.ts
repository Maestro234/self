import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { Note } from '../shared/note';
import { UserSharedService } from '../user-shared.service';
import { CreatNoteService } from '../create-note/creat-note.service';
import { NoteService } from './note.service';
import { Router } from '@angular/router'
import { UserFiles } from '../shared/user-files';
import { UserHomeServiceService } from '../home/user-home-service.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  panelOpenState = false;
  loggedInUser: User;
  userNotes: Note[];
  noteList: Note[] = [];
  fileList: UserFiles[] = [];
  errMsg: string = "";
  dataSource;
  displayedColumns: string[] = ['fileId', 'filename','filetype','download'];


  constructor(private userHomeService: UserHomeServiceService, private router: Router, private userSharedSrv: UserSharedService, private noteSrv: CreatNoteService, private delSrv: NoteService) { }

  ngOnInit() {
    this.loggedInUser = JSON.parse(sessionStorage.getItem("user"))
    this.userHomeService.getUserFiles(this.loggedInUser.username).subscribe(
      files => {
        this.fileList = files;
        this.dataSource = new MatTableDataSource(files);
        console.log(this.dataSource.data)
      },
      error => {
        this.errMsg = error;
      },
      () => {
        console.log("file fetch completed");
      }
    )
  }

  applyFilter(filterValue: string) {
    console.log("Filter value: " + filterValue);
    console.log(this.dataSource.data)
    this.dataSource.filter = filterValue;
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(["/"]);
  }
}
