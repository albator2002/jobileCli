/**
 * Created by Alain on 5/29/2016.
 */

// menu.component.ts
import {Component} from '@angular/core';
import { Router} from '@angular/router';
import {  NgIf} from '@angular/common';
import {MatDialog, MatDialogRef} from '@angular/material';
import { JobDetailsComponent} from "./jobs/jobDetails.component";
import {ProfileDialog} from "./profile.dialog.component";
import {AuthenticationService} from './services/authentication.service';


@Component({
    selector: 'menu',
    template: `
   <div>
    <div >
        <mat-list>
            <mat-list-item *ngIf="authSrv.authenticated" id="editProfile" (click)="editProfile()" >Edit Profile</mat-list-item>
            <mat-list-item>Search</mat-list-item>
            <mat-list-item>My Jobines</mat-list-item>
            <mat-list-item>My Messages</mat-list-item>
            <mat-list-item>My bookmark</mat-list-item>
            <mat-list-item (click)="newJob()">New Jobine</mat-list-item>
            <mat-list-item>About</mat-list-item>
        </mat-list>
      </div>
   </div>
  `
})

export class MenuComponent {
    
    constructor(private _router:Router,public dialog: MatDialog, private authSrv: AuthenticationService ) {
        
    }

    editProfile(){
         //this._router.navigate([{outlets: {popupOutlet: 'profile'}}]);
        this.openProfileDialog();
    }

    newJob(){
        //this._router.navigate([{outlets: {popupOutlet: 'job'}}]);
		this.openJobDetailsDialog();
    }

    myJob(){
        this._router.navigate([{outlets: {popupOutlet: 'job'}}]);
    }
	
	 openJobDetailsDialog() {
    let dialogRef = this.dialog.open(JobDetailsComponent);
    dialogRef.afterClosed().subscribe(result => {
      //this.selectedOption = result;
    });
  }

    openProfileDialog() {
        let dialogRef = this.dialog.open(ProfileDialog);
        dialogRef.afterClosed().subscribe(result => {
            //this.selectedOption = result;
        });
    }
}