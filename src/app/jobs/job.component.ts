/**
 * Created by Alain on 2016-10-06.
 */
// job.component.ts
import {Component, OnInit} from '@angular/core';
import {  NgIf} from '@angular/common';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Job} from "./model/job";
import {isLoggedin} from "../utils/is-loggedin";
import {JobService} from "./services/job.service";
import {ProfileService} from "../services/profile.service";

@Component({

    selector: 'job-component',

    template: `
    
        <md-tab-group>
            <md-tab label="MAP">
               
                <div>
                    <google-map latitude="{{lat}}" longitude="{{long}}" disableDefaultUI >
                        <google-map-marker *ngFor="let marker of jobList" latitude="{{marker.data.location.latitude}}" longitude="{{marker.data.location.longitude}}" title="{{marker.data.name}}"></google-map-marker>
                    </google-map>
                </div>
            </md-tab>
            <md-tab label="LIST" >
               
                <div id="listJob">
                    <md-list>
                        <md-list-item *ngFor="let marker of jobList"  title="{{marker.data.name}}"><p>Name: {{marker.data.name}} description: {{marker.data.description}}</p> </md-list-item>
                    </md-list>
                </div>
            </md-tab>
        </md-tab-group>
                     
             
  `,
    providers: [JobService],
})
export class JobComponent implements OnInit {

    constructor(private _jobService:JobService,private _profileService:ProfileService,private _router:Router ) {
    }
    jobList:Job[];
    lat:string;
    long:string;
    errorMessage:string;

    ngOnInit() {
        this.lat = "45.5602804";  //,-73.8516124
        this.long = "-73.8516124";

        this.getJobs();
    }

    getJobs() {
        this._jobService.getJobsbyProfile(this._profileService.pr.id)
            .subscribe(
                jobs => this.jobList = jobs,
                error => this.errorMessage = <any>error);
    }

}