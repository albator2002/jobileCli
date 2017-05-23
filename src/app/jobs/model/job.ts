/**
 * Created by Alain on 4/26/2016.
 */
export class Job {
    id: string;
    data:{
        profileId:string,
        name:string,
        type:string,
        description:string,
        location:{
            lng:number,
            lat:number,
        },
        created:string

    }

    constructor(private _id:string,_profileId:string,private _name:string,private _type:string,private _description:string,_lng:number,_lat:number) {
        this.id = _id;
        this.data = {
            "profileId": _profileId,
            "name": _name,
            "type": _type,
            "description": _description,
            "location": {
                "lng": _lng,
                "lat": _lat

            },
            "created": new Date().toDateString()
        };
    }
}