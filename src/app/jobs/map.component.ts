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

declare var google: any;

@Component({

    selector: 'map-component',

        styles: [`
            #map {
                height: 100%;
            }
         
        `],
        template: `
            <div id="map"></div>
        `,
    providers: [JobService],
})
export class MapComponent implements OnInit {
// google maps zoom level
    zoom: number = 8;

    // initial center position for the map
    lat: number = 45.5602804;
    lng: number = -73.8516124;

    constructor(private _jobService: JobService, private _profileService: ProfileService, private _router: Router) {
    }

    jobList: Job[];
    errorMessage: string;

    ngOnInit() {
        this.lat = 45.5602804;  //,-73.8516124
        this.lng = -73.8516124;

        this._jobService.getJobsbyProfile(this._profileService.pr.id)
            .subscribe((res : any) => {
                this.jobList = res;
                let map = new google.maps.Map(document.getElementById('map'), {
                    zoom: this.zoom,
                    center: {lat: this.lat, lng: this.lng}
                });

                for (let job of this.jobList) {
                    let marker = new google.maps.Marker({
                        position: {lat: job.data.location.latitude, lng: job.data.location.longitude},
                        map: map,
                        title: job.data.name
                    });
                }
            })


    }




}


