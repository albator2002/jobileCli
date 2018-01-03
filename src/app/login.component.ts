/**
 * Created by Alain on 5/10/2016.
 */
// login.component.ts
import {Component} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {  NgIf} from '@angular/common';
import {Router} from '@angular/router';
import {AuthenticationService} from './services/authentication.service';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'loginDialog',


    template: `
        <h1 mat-dialog-title>Login</h1>
        <div mat-dialog-content>
        <form  #loginForm="ngForm">
        
          <div *ngIf="error">Check your user name or password</div>
          <mat-input-container>
          <div>
           <input matInput type="text" id="username" placeholder="Username" floatPlaceholder [(ngModel)]="username" name="username" required="true" #usr="ngModel" error-message="Invalide"/>
          </div>
          <div>
            <input matInput id="password" placeholder="Password" floatPlaceholder [(ngModel)]="password" name="password" required="true" #pwd="ngModel" type="password"/>
          </div>
          </mat-input-container>
        </form>
        </div>
        <div mat-dialog-actions>
            <button  mat-button   (click)="login()">submit</button>
        </div>
  `
})
export class LoginDialogComponent {

    error: boolean = false;
    username:string = "";
    password:string = "";

    constructor(public dialogRef: MatDialogRef<LoginDialogComponent>,private auth: AuthenticationService, private router:Router ) {

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