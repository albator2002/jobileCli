import { Component } from '@angular/core';
import { Router} from '@angular/router';
import {MdDialog, MdDialogRef} from '@angular/material';
import {  NgIf} from '@angular/common';
import {isLoggedin} from "./utils/is-loggedin";
import {ProfileDialog} from "./profile.dialog.component";
import {LoginDialogComponent} from "./login.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jobine';
  isDarkTheme: boolean = true;
  // google maps zoom level
  zoom: number = 8;

  // initial center position for the map
  lat: number = 45.5602804;
  lng: number = -73.8516124;

  constructor(private _router:Router,public dialog: MdDialog ) {
  }

  isLoggedin() {
    return !!localStorage.getItem('token');
  }

  userLogin(){
    //this._router.navigate([{outlets: {leftoutlet: 'login'}}]);
    this.openLoginDialog();
  }
  userLogout(){
    localStorage.removeItem('token');
  }
  newAccount(){
    //this._router.navigate([{outlets: {popupOutlet: 'profile'}}]);
    this.openProfileDialog();
  }

  openProfileDialog() {
    let dialogRef = this.dialog.open(ProfileDialog);
    dialogRef.afterClosed().subscribe(result => {
      //this.selectedOption = result;
    });
  }
  openLoginDialog() {
    let dialogRef = this.dialog.open(LoginDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      //this.selectedOption = result;
    });
  }
}
