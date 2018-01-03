/**
 * Created by Alain on 5/10/2016.
 */
// profile.component.ts
import {Component} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {  NgIf} from '@angular/common';
import {ActivatedRoute,Router } from '@angular/router';
import 'rxjs/add/operator/map';
import {ProfileService} from './services/profile.service';
import {NgForm} from '@angular/forms';
import {Profile} from "./model/profile";

@Component({
    selector: 'profile-dialog',
    template: ` <h1 mat-dialog-title>Dialog</h1>
    <div mat-dialog-content>
        <form  #profileForm="ngForm">
            <div *ngIf="error">Check your user name or password</div>
            <div>
                
                <p><input matInput id="firstname" placeholder="First Name" [(ngModel)]="profileSvr.pr.data.firstname" name="firstname" required="true"
                       #firstname="ngModel" error-message="Invalide" label="First Name"/>
                </p>
            </div>
            
            <div>
                <p><input matInput id="lastname"  placeholder="Last Name" [(ngModel)]="profileSvr.pr.data.lastname" name="lastname" required="true"
                       #lastname="ngModel" error-message="Invalide" label="Last name"/>
                </p>
            </div>

            <mat-select id="lbType"  [(ngModel)]="profileSvr.pr.data.worktypes" placeholder="Work Type" name="type" required="true"
                       #type="ngModel" error-message="Invalide" label="Type">
                <mat-option  value="BABY">Gardienne</mat-option>
                <mat-option  value="CLEANING">Femme de ménage</mat-option>
                <mat-option  value="LAWN">Coupe gazon</mat-option>
                <mat-option  value="SNOW">Déneigement</mat-option>
            </mat-select>
            <div>
                <p><input  matInput id="email" placeholder="Email" [(ngModel)]="profileSvr.pr.data.email" name="email" required="true"
                       #email="ngModel" error-message="Invalide" label="Email"/>
                </p>
                
            </div>
        
            <div>
                <input matInput id="pwd" placeholder="Password" [(ngModel)]="profileSvr.pr.data.password" name="password" required="true" 
                       #pwd="ngModel" type="password" label="Password"/>
            </div>
            <br>
            
        </form>
    
    </div>
    <div mat-dialog-actions>
        <button mat-button (click)="saveProfile();">Submit</button>
       
    </div>
    ` ,
})
export class ProfileDialog {
    error: boolean = false;

    constructor(public dialogRef: MatDialogRef<ProfileDialog>,private profileSvr: ProfileService, private route:ActivatedRoute, private router:Router) {

    }

    saveProfile(){
        //if profile.id do update
        if (this.profileSvr.pr.id)
        {
            this.profileSvr.updateProfile()
                .subscribe(
                    (token: any) => {

                        //this.router.navigate([{outlets: {leftoutlet: 'menu'}}]);
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

                        //this.router.navigate([{outlets: {leftoutlet: 'menu'}}]);
                        this.dialogRef.close();

                    },
                    () => {
                        this.error = true;
                    }
                );
        }
    }
}