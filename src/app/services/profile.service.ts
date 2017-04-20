import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Profile} from "../model/profile";


@Injectable()
export class ProfileService {
    token: string;
    pr:Profile;

    constructor(private http: Http) {
        this.token = localStorage.getItem('token');
        this.http = http;
        this.pr = new Profile("","","","","");
    }
    private api_URL :string = 'http://localhost:4711/api';

    //getProfile
    getProfile(id:string) {
        return this.http.get(this.api_URL+'/profiles/'+ id)
            .map((res : any) => {
                let profile = res.json();

                this.pr = new Profile(id, profile.data.firstname,profile.data.lastname,profile.data.email,profile.data.password);
                localStorage.setItem('token', this.token);
            });
    }

    // createProfile
    createProfile(){
         let profile = this.pr;
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
        return this.http.put(this.api_URL+'/profiles/'+ profile.id , profile, {
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .map((res : any) => {
            let data = res.json();
        });
    }    /**/
}/**
 * Created by Alain on 5/10/2016.
 */
