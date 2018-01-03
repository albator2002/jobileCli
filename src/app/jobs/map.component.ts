/**
 * Created by Alain on 2016-10-06.
 */
// job.component.ts
import {Component, OnInit} from '@angular/core';
import {  NgIf} from '@angular/common';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

import {Job} from "./model/job";
import {Profile} from "../model/profile";
import {isLoggedin} from "../utils/is-loggedin";
import {JobService} from "./services/job.service";
import {MapService} from "./services/map.service";
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
    providers: [JobService,ProfileService,MapService],
})
export class MapComponent implements OnInit {
// google maps zoom level
    zoom: number = 8;

    // initial center position for the map
    lat: number = 45.5602804;
    lng: number = -73.8516124;

    constructor(private _jobService: JobService, private _profileService: ProfileService,private _mapService: MapService, private _router: Router) {
    }

    jobList: Job[];
	profileList: Profile[];
    errorMessage: string;

    ngOnInit() {
        this.lat = 45.5602804;
        this.lng = -73.8516124;
		let map = new google.maps.Map(document.getElementById('map'), {
                    zoom: this.zoom,
                    center: {lat: this.lat, lng: this.lng}					
                });
        addMarkers(this._profileService);     
           
               

        function addMarkers(profileSrv:any)
        {
            profileSrv.getProfilesForMapBounds([""])
            //this._jobService.getJobsbyProfile(this._profileService.pr.id)
                .subscribe((res : any) => {
                let profileList = res;

                for (let profile of profileList) {
                    let marker = new google.maps.Marker({
                        position: {lat: profile.data.location.lat, lng: profile.data.location.lng},
                        map: map,
                        title: profile.data.worktypes.toLowerCase(),
                        icon: "/images/"+ profile.data.worktypes.toLowerCase() +".png"   //ic_child_care_black_24dp_1x.png"                            
                    });
                    attachSecretMessage(marker,profile.data.lastname+","+profile.data.firstname)
                    //marker.setMap(map);
                }
            });
        }  

        function attachSecretMessage(marker:any, secretMessage:string) {
            let infowindow = new google.maps.InfoWindow({
                content: secretMessage
            });
    
            marker.addListener('click', function() {
                infowindow.open(marker.get('map'), marker);
            });
        }
        

        /*map.addListener('center_changed', function() {
            // 3 seconds after the center of the map has changed, pan back to the
            // marker.
            window.setTimeout(function() {
            //initMarker(map,this._profileService);
            addMarkers(this._profileService);
            }, 1000);
        });*/
        
		let infoWindow = new google.maps.InfoWindow;

		// Try HTML5 geolocation.
		if (navigator.geolocation) {
		  navigator.geolocation.getCurrentPosition(function(position) {
			let pos = {
			  lat: position.coords.latitude,
			  lng: position.coords.longitude
			};
						
			infoWindow.setPosition(pos);
			infoWindow.setContent('Location found.');
			infoWindow.open(map);
			map.setCenter(pos);
		  }, function() {
			handleLocationError(true, infoWindow, map.getCenter());
		  });
		  
		  
		  //todo
		//let mapBounds = map.getBounds();
		} else {
		  // Browser doesn't support Geolocation
		  handleLocationError(false, infoWindow, map.getCenter());
		}
		
		
		function handleLocationError(browserHasGeolocation:any, infoWindow:any, pos:any) {
			infoWindow.setPosition(pos);
			infoWindow.setContent(browserHasGeolocation ?
								  'Error: The Geolocation service failed.' :
								  'Error: Your browser doesn\'t support geolocation.');
			infoWindow.open(map);
		}

        this._mapService.setCurrentPosition(map.getCenter().lat(),map.getCenter().lng());
    }







}


