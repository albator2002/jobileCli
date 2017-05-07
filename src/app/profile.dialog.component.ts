/**
 * Created by Alain on 5/10/2016.
 */
// profile.component.ts
import {Component} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {  NgIf} from '@angular/common';
import {ActivatedRoute,Router } from '@angular/router';
import 'rxjs/add/operator/map';
import {ProfileService} from './services/profile.service';
import {NgForm} from '@angular/forms';
import {Profile} from "./model/profile";

@Component({
    selector: 'profile-dialog',
    template: ` <h1 md-dialog-title>Dialog</h1>
    <div md-dialog-content>
        <form  #profileForm="ngForm">
            <div *ngIf="error">Check your user name or password</div>
            <div>
                <input mdInput id="firstname" floatPlaceholder [(ngModel)]="profileSvr.pr.data.firstname" name="firstname" required="true"
                       #firstname="ngModel" error-message="Invalide" label="First Name"/>
            </div>
            <div>
                <input mdInput id="lastname" floatPlaceholder [(ngModel)]="profileSvr.pr.data.lastname" name="lastname" required="true"
                       #lastname="ngModel" error-message="Invalide" label="Last name"/>
            </div>
            <div>
                <input  mdInput id="email" floatPlaceholder [(ngModel)]="profileSvr.pr.data.email" name="email" required="true"
                       #email="ngModel" error-message="Invalide" label="Email"/>
            </div>
            <div>
                <input mdInput id="pwd" floatPlaceholder [(ngModel)]="profileSvr.pr.data.password" name="password" required="true"
                       #pwd="ngModel" type="password" label="Password"/>
            </div>
            
        </form>
    
    </div>
    <div md-dialog-actions>
        <button md-button (click)="saveProfile();">Submit</button>
       
    </div>
    ` ,
})
export class ProfileDialog {
    error: boolean = false;

    constructor(public dialogRef: MdDialogRef<ProfileDialog>,private profileSvr: ProfileService, private route:ActivatedRoute, private router:Router) {}

    saveProfile(){
        //if profile.id do update
        if (this.profileSvr.pr.id)
        {
            this.profileSvr.updateProfile()
                .subscribe(
                    (token: any) => {

                        this.router.navigate([{outlets: {leftoutlet: 'menu'}}]);
                        this.dialogRef.close();
                    },
                    () => {
                        this.error = true;
                    }
                );
        }else {
            this.profileSvr.createProfile()
                .subscribe(
                    (token: any) => {

                        this.router.navigate([{outlets: {leftoutlet: 'menu'}}]);
                        this.dialogRef.close();

                    },
                    () => {
                        this.error = true;
                    }
                );
        }
    }
}