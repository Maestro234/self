import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule,MatTableModule,MatOptionModule,MatButtonModule, MatSelectModule,MatExpansionModule, MatIconModule, MatStepperModule, MatStepperIntl} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login/login.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';
import { UploadComponent } from './upload/upload.component';
import { FileUploadModule } from 'ng2-file-upload';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    NotesComponent,
    CreateNoteComponent,
    RegisterComponent,
    LandingComponent,
    UploadComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatInputModule,MatOptionModule, MatSelectModule, MatIconModule,MatExpansionModule,MatStepperModule,MatButtonModule,
    BrowserAnimationsModule,
    FileUploadModule,
    ReactiveFormsModule,
    MatTableModule, 
    MatRadioModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
