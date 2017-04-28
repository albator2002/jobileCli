import { NgModule }              from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login.component";
//import {MenuComponent} from "./menu.component";
//import {JobComponent} from "./jobs/job.component";
//import {ProfileComponent} from "./profile.component";
//import {JobDetailsComponent} from "./jobs/jobDetails.component";
//import {BlankComponent} from "./blank.component";

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        outlet:'leftoutlet'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}