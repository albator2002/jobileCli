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
import { Action } from '../model/action';
import { Event } from '../model/event';
import { Message } from '../model/message';
import { User } from '../model/user';
import { SocketService } from '../services/socket.service';
@Component({
    selector: 'jobDetails',

    template: `   
	<h1 mat-dialog-title>New Job</h1>

	<div mat-dialog-content>
	 <form  #jobForm="ngForm">
	  
	   <div>
	   <input id="name" matInput type="text" placeholder="Job Name" floatPlaceholder  [(ngModel)]="jobSvr.job.data.name" name="name" required="true"
			   #name="ngModel" error-message="Invalide" label="Name"/>
	  </div>
	  <mat-select id="lbType"  [(ngModel)]="jobSvr.job.data.type" name="type" required="true"
			   #type="ngModel" error-message="Invalide" label="Type">
		<mat-option  value="Reno">Reno</mat-option>
		<mat-option  value="Exterieur">Exterieur</mat-option>
	  </mat-select>
	  <div>
	   <input id="description" matInput type="text" placeholder="Job Description" floatPlaceholder  [(ngModel)]="jobSvr.job.data.description" name="description" required="true"
			   #description="ngModel" error-message="Invalide" label="Description"/>
	  </div>
	 
	 
	 </form>
	</div>
	<div mat-dialog-actions>
		<button mat-button (click)="saveJob()"   >submit</button>
	</div>
  `
})
export class JobDetailsComponent implements OnInit{
    error: boolean = false;
    ioConnection: any;
    action = Action;
    user: User;
    messages: Message[] = [];
    messageContent: string;

    constructor(public dialogRef: MatDialogRef<JobDetailsComponent>,private jobSvr: JobService,private profileSvr:ProfileService,private socketService: SocketService, private route:ActivatedRoute, private router:Router) {


    }
    ngOnInit() {
       // this.initDialog();
    }

    /*initDialog(){
        let pdjob = <HTMLElement>document.querySelector('#pdJob');
        pdjob.open();

    }*/

    private initIoConnection(): void {
        this.socketService.initSocket();
    
        this.ioConnection = this.socketService.onMessage()
          .subscribe((message: Message) => {
            this.messages.push(message);
          });
    
    
        this.socketService.onEvent(Event.CONNECT)
          .subscribe(() => {
            console.log('connected');
          });
    
        this.socketService.onEvent(Event.DISCONNECT)
          .subscribe(() => {
            console.log('disconnected');
          });
    }

    public sendNotification(params: any, action: Action): void {
        let message: Message;
    
        if (action === Action.JOINED) {
          message = {
            from: this.user,
            action: action
          }

        }

        this.socketService.send(message);
    }

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
                        this.user.id = this.profileSvr.pr.id;
                        this.user.name = this.profileSvr.pr.data.lastname;
                        
                        this.initIoConnection();
                        this.sendNotification("", Action.JOINED);
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