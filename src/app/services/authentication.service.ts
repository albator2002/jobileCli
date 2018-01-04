//<reference path="../node_modules/rxjs/Observable.d.ts"/>
// authentication.service.ts
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {ProfileService} from './profile.service';
import {Profile} from "../model/profile";
import { MapService} from "../jobs/services/map.service"

@Injectable()
export class AuthenticationService {
  token: string;
  svrProfile:ProfileService;
  mapService:MapService;
  authenticated:boolean;
  
  constructor(private http: Http, svrProfile:ProfileService,mapService:MapService) {
    this.token = localStorage.getItem('token');
    this.http = http;
    this.svrProfile = svrProfile;
    this.mapService = mapService;
  }
  private api_URL :string = 'http://localhost:4711/api';

  login(username: String, password: String){

    return this.http.post(this.api_URL+'/login', JSON.stringify({
        username: username,
        password: password
      }), {
      headers: new Headers({
      'Content-Type': 'application/json'
      })
    })
    .map((res : any) => {
      let profile = res.json();
      this.svrProfile.pr = new Profile(profile._id, profile.data.firstname,profile.data.lastname,profile.data.email,profile.data.available,profile.data.password,this.mapService.currentPos.lat,this.mapService.currentPos.lng,profile.data.worktypes);
      this.token = profile.data.token;
      localStorage.setItem('token', this.token);
      this.authenticated = true;
    });
  }

  logout() {
    let profile = this.svrProfile.pr;
    const body = JSON.stringify(profile);
  
    return this.http.put(this.api_URL+'/logout/'+ profile.id, body, {
      headers: new Headers({
              'Content-Type': 'application/json'
          })
    })
    .map((res : any) => {
      this.token = undefined;
      localStorage.removeItem('token');
      this.authenticated = false;
    })
    .catch(err => {
      throw 'error in source. Details: ' + err;
      })
      .subscribe(
      x => console.log(x),
      err => console.log(err)
      );
    
  }

private handleError(error: any) {
  // In a real world app, we might send the error to remote logging infrastructure
  let errMsg = error.message || 'Server error';
  console.error(errMsg); // log to console instead
  return Observable.throw(errMsg);
}

}/**
 * Created by Alain on 5/10/2016.
 */
