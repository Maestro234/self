import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { UploadServiceService } from './upload-service.service';
import { Uploadresponse } from '../shared/uploadresponse';
import { User } from '../shared/user';
import { UploadFileRequest } from '../shared/uploadfilerequest';
import { UserHomeServiceService } from '../home/user-home-service.service';
import { UserFiles } from '../shared/user-files';
import { MatRadioButton } from '../../../node_modules/@angular/material';

@Component({
  selector: 'upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef;

  err: string = '';
  success: Uploadresponse = new Uploadresponse();
  uploadrequest: UploadFileRequest = new UploadFileRequest();
  data: File;
  list: FileList;
  loggedInUser: User;
  form: FormData = new FormData();
  fileList: UserFiles[];
  private: string;

  constructor(private userHomeService: UserHomeServiceService, private uploadsvc: UploadServiceService) { }

  ngOnInit() {
    this.loggedInUser = JSON.parse(sessionStorage.getItem("user"));
    this.fileList = JSON.parse(sessionStorage.getItem("files"));
  }

  getFile(event: any) {
    this.list = event.target.files;
    this.data = this.list[0];
    console.log('type of ', typeof this.data)
  
  }

  upload() {
    this.form.append('file', this.data, this.data.name);
    // this.uploadrequest.file = this.form;
    this.uploadrequest.userName = this.loggedInUser.username;
    console.log(this.private)
    this.uploadsvc.uploadFile(this.form, this.loggedInUser.username, this.private).subscribe(
      response => {
        this.success = response;
        console.log("upload response:: " + this.success)
        //when added sussessfully, fetch the user files
        this.userHomeService.getUserFiles(this.loggedInUser.username).subscribe(
          files => {
            this.fileList = files;
          }
        )
      },
      error => {
        this.err = error.error;
      },
      () => console.log("Just verification:: " + this.success)
    )

  }

}
