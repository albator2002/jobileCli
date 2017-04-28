import { Component } from '@angular/core';
import { Router} from '@angular/router';
import {isLoggedin} from "./utils/is-loggedin";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jobine';
  isDarkTheme: boolean = true;

  constructor(private _router:Router ) {
  }


  userLogin(){
    this._router.navigate([{outlets: {leftoutlet: 'login'}}]);
  }
  newAccount(){
   // this._router.navigate([{outlets: {popupOutlet: 'profile'}}]);
  }
}
