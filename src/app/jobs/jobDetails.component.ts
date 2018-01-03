/**
 * Created by Alain on 5/10/2016.
 */
// jobDetails.component.ts
import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ActivatedRoute,Router } from '@angular/router';
import {JobService} from './services/job.service';
import {NgForm} from '@angular/forms';
import {ProfileService} from "../services/profile.service";
@Component({
    selector: 'jobDetails',

    template: `   
	<h1 md-dialog-title>New Job</h1>

	<div md-dialog-content>
	 <form  #jobForm="ngForm">
	  
	   <div>
	   <input id="name" mdInput type="text" placeholder="Job Name" floatPlaceholder  [(ngModel)]="jobSvr.job.data.name" name="name" required="true"
			   #name="ngModel" error-message="Invalide" label="Name"/>
	  </div>
	  <md-select id="lbType"  [(ngModel)]="jobSvr.job.data.type" name="type" required="true"
			   #type="ngModel" error-message="Invalide" label="Type">
		<md-option  value="Reno">Reno</md-option>
		<md-option  value="Exterieur">Exterieur</md-option>
	  </md-select>
	  <div>
	   <input id="description" mdInput type="text" placeholder="Job Description" floatPlaceholder  [(ngModel)]="jobSvr.job.data.description" name="description" required="true"
			   #description="ngModel" error-message="Invalide" label="Description"/>
	  </div>
	 
	 
	 </form>
	</div>
	<div md-dialog-actions>
		<button md-button (click)="saveJob()"   >submit</button>
	</div>
  `
})
export class JobDetailsComponent implements OnInit{
    error: boolean = false;

    constructor(public dialogRef: MatDialogRef<JobDetailsComponent>,private jobSvr: JobService,private profileSvr:ProfileService, private route:ActivatedRoute, private router:Router) {


    }
    ngOnInit() {
       // this.initDialog();
    }

    /*initDialog(){
        let pdjob = <HTMLElement>document.querySelector('#pdJob');
        pdjob.open();

    }*/




    saveJob(){
        let lbType = <HTMLElement>document.querySelector('#lbType');
        this.jobSvr.job.data.profileId = this.profileSvr.pr.id;
		this.jobSvr.job.data.location.lat = this.profileSvr.pr.data.location.lat;
		this.jobSvr.job.data.location.lng = this.profileSvr.pr.data.location.lng;
		
        //this.jobSvr.job.data.type = lbType.value;
        if (this.jobSvr.job.id)
        {
            this.jobSvr.updateJob()
                .subscribe(

                    (job: any) => {

                        this.dialogRef.close();
                        //this.router.navigate([{outlets: {leftoutlet: 'menu',popupOutlet:'blank'}}]);

                    },
                    () => {
                        this.error = true;
                    }


                );
        }else {
            this.jobSvr.createJob()
                .subscribe(

                    (job: any) => {

                        this.dialogRef.close();
                        //this.router.navigate([{outlets: {leftoutlet: 'menu',popupOutlet:'blank'}}]);

                    },
                    () => {
                        this.error = true;
                    }

                );
        }
    }


}