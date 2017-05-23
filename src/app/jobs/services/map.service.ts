/**
 * Created by Alain on 4/26/2016.
 */

import {Injectable} from '@angular/core';
import {Http, Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class MapService {
	
	public currentPos = {lat:45.5602804,lng:-73.8516124};

    private mapBounds  = {
          north: 46.599,
          south: 44.490,
          east: -78.443,
          west: -80.649
        };
	
    constructor (private http: Http) {
        this.http = http;
        
        //this.currentPos = {lat: 45, lng: -78};
    }
    //private api_URL:string = 'http://localhost:4711/api';
	
	getMapBounds()
	{
	
	}
	
	setMapBounds(bounds:any)
	{
		this.mapBounds = bounds;
	}
	
	getCurrentPosition()
	{
	}
	
	setCurrentPosition(lat:number,lng:number){
	this.currentPos.lat = lat;
	this.currentPos.lat = lng;
	}
}