/**
 * Created by Alain on 4/26/2016.
 */

import {Injectable} from '@angular/core';
import {Http, Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable}     from 'rxjs/Observable';
import {Job} from "../model/job";
//import {JOBS} from '../model/mock-jobs';

@Injectable()
export class JobService {

    job:Job;

    constructor (private http: Http) {
        this.http = http;
        this.job = new Job("","","","","",0,0);
    }

    private api_URL:string = 'http://localhost:4711/api';

    getJobs(): Observable<Job[]> {
        return this.http.get(this.api_URL + "/jobs")
            .map(this.extractData)
            .catch(this.handleError);
    }

    getJobsbyProfile(profileId): Observable<Job[]> {
        return this.http.get(this.api_URL + "/jobs?$filter={ profileId: " + profileId + "}")
            .map(this.extractData)
            .catch(this.handleError);
    }

    // createProfile
    createJob(){
        let job = this.job;
        return this.http.post(this.api_URL+'/jobs', job, {
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .map((res : any) => {
                let data = res.json();


            });
    }


    updateJob() {
        let job = this.job;
        return this.http.put(this.api_URL+'/jobs/'+ job.id , job, {
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .map((res : any) => {
                let data = res.json();
            });
    }


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
}