import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Profile} from "../model/profile";
import { MapService} from "../jobs/services/map.service"


@Injectable()
export class ProfileService {
    token: string;
    pr:Profile;
	mapService:MapService;

	
    constructor(private http: Http,mapService:MapService) {
        this.token = localStorage.getItem('token');
        this.http = http;
		this.mapService = mapService;
        this.pr = new Profile("","","","","",0,0);
		
    }
    private api_URL :string = 'http://localhost:4711/api';

    //getProfile
    getProfile(id:string) {
        return this.http.get(this.api_URL+'/profiles/'+ id)
            .map((res : any) => {
                let profile = res.json();

                this.pr = new Profile(id, profile.data.firstname,profile.data.lastname,profile.data.email,profile.data.password,profile.data.location.lat,profile.data.location.lng);
                localStorage.setItem('token', this.token);
				if(this.mapService.currentPos)
				{
					profile.data.location.lng = this.mapService.currentPos.lng;
					profile.data.location.lat = this.mapService.currentPos.lat;
				}
            });
    }
	
	//TODO
	getProfilesForMapBounds(filters:[string]): Observable<Profile[]>{
	 return this.http.get(this.api_URL+'/profiles/')
         .map(this.extractData)
         .catch(this.handleError);
	}

    // createProfile
    createProfile(){
         let profile = this.pr;
		 if(this.mapService.currentPos)
		{
			profile.data.location.lng = this.mapService.currentPos.lng;
			profile.data.location.lat = this.mapService.currentPos.lat;
		}
         return this.http.post(this.api_URL+'/profiles', profile, {
             headers: new Headers({
             'Content-Type': 'application/json'
            })
         })
         .map((res : any) => {
             let profile = res.json();
             this.token = profile.data.token;
             localStorage.setItem('token', this.token);
         });
    }

    updateProfile() {
        let profile = this.pr;
		
		this.mapService.currentPos.lng
        return this.http.put(this.api_URL+'/profiles/'+ profile.id , profile, {
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .map((res : any) => {
            let data = res.json();
        });
    }    /**/

    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        return body || { };
    }
    private handleError (error: any) {
        // In a real world app, we might send the error to remote logging infrastructure
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}/**
 * Created by Alain on 5/10/2016.
 */
