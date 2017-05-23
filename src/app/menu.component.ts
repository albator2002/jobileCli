/**
 * Created by Alain on 5/29/2016.
 */

// menu.component.ts
import {Component} from '@angular/core';
import { Router} from '@angular/router';
import {MdDialog, MdDialogRef} from '@angular/material';
import { JobDetailsComponent} from "./jobs/jobDetails.component";


@Component({
    selector: 'menu',
    template: `
   <div>
    <div >
        <md-list>
            <md-list-item id="editProfile" (click)="editProfile()" >Edit Profile</md-list-item>
            <md-list-item>Search</md-list-item>
            <md-list-item>My Jobines</md-list-item>
            <md-list-item>My Messages</md-list-item>
            <md-list-item>My bookmark</md-list-item>
            <md-list-item (click)="newJob()">New Jobine</md-list-item>
            <md-list-item>About</md-list-item>
        </md-list>
      </div>
   </div>
  `
})

export class MenuComponent {

    constructor(private _router:Router,public dialog: MdDialog ) {
    }

    editProfile(){
         this._router.navigate([{outlets: {popupOutlet: 'profile'}}]);

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
}