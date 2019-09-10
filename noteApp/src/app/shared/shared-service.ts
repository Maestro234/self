import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { DBFile } from './dbfile';
import { UserFiles } from './user-files';


@Injectable({
    providedIn: 'root'
})
export class SharedService {

    private userFiles = new BehaviorSubject<UserFiles[]>(JSON.parse(sessionStorage.getItem("files")));
    updatedWishlist = this.userFiles.asObservable();

    updateUserFile(file: UserFiles[]){
        this.userFiles.next(file);
    }
}
