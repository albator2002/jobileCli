/**
 * Created by Alain on 5/10/2016.
 */
// login.component.ts
import {Component} from '@angular/core';
import {  NgIf} from '@angular/common';
import {Router} from '@angular/router';
import {AuthenticationService} from './services/authentication.service';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'login',


    template: `
    <md-toolbar >
        <h2 class="sidenav-header">Login</h2>
    </md-toolbar>    
    <form  #loginForm="ngForm">
    
      <div *ngIf="error">Check your user name or password</div>
      <md-input-container>
      <div>
       <input mdInput type="text" id="username" placeholder="Username" floatPlaceholder [(ngModel)]="username" name="username" required="true" #usr="ngModel" error-message="Invalide"/>
      </div>
      <div>
        <input mdInput id="password" placeholder="Password" floatPlaceholder [(ngModel)]="password" name="password" required="true" #pwd="ngModel" type="password"/>
      </div>
      </md-input-container>
      <div >
        <button  md-button   (click)="login()">submit</button>
      </div>
    </form>
  `
})
export class LoginComponent {

    error: boolean = false;
    username:string = "";
    password:string = "";

    constructor(private auth: AuthenticationService, private router:Router ) {

    }

    login() {
        this.auth.login( this.username,  this.password)
            .subscribe(
                (token: any) => {
                    var btnLogin = <HTMLElement>document.querySelector('#btnLogin');
                    var btnNewAccount = <HTMLElement>document.querySelector('#btnNewAccount');
                    btnLogin.hidden = true;
                    btnNewAccount.hidden = true;
                    this.router.navigate([{outlets: {leftoutlet: 'menu'}}])
                },
                        () => { this.error = true; }

            );
    }
}