/**
 * Created by Alain on 2016-09-30.
 */
export class Profile {
    public id: string;
    public data: {
        firstname: string,
        lastname: string,
        email: string,
        password: string,
        created: string
    };
    constructor(private _id:string,private _firstName:string,private _lastName:string,private _email:string,private _password:string){
        this.id = _id;
        this.data =  {
            "firstname":_firstName,
            "lastname":_lastName,
            "email":_email,
            "password":_password,
            "created":new Date().toDateString()
        };


    }
}