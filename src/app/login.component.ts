/**
 * Created by Alain on 5/10/2016.
 */
// login.component.ts
import {Component} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {  NgIf} from '@angular/common';
import {Router} from '@angular/router';
import {AuthenticationService} from './services/authentication.service';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'loginDialog',


    template: `
        <h1 md-dialog-title>Login</h1>
        <div md-dialog-content>
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
        </form>
        </div>
        <div md-dialog-actions>
            <button  md-button   (click)="login()">submit</button>
        </div>
  `
})
export class LoginDialogComponent {

    error: boolean = false;
    username:string = "";
    password:string = "";

    constructor(public dialogRef: MdDialogRef<LoginDialogComponent>,private auth: AuthenticationService, private router:Router ) {

    }

    login() {
        this.auth.login( this.username,  this.password)
            .subscribe(
                (token: any) => {
                    this.dialogRef.close();
                    //this.router.navigate([{outlets: {leftoutlet: 'menu'}}])
                },
                        () => { this.error = true; }

            );
    }
}