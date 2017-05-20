import { NgModule }              from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {MenuComponent} from "./menu.component";
import {MapComponent} from "./jobs/map.component";
//import {ProfileComponent} from "./profile.component";
//import {ProfileDialog} from "./profile.dialog.component";
//import {JobDetailsComponent} from "./jobs/jobDetails.component";
import {BlankComponent} from "./blank.component";

const appRoutes: Routes = [
    {
        path: '',
        component: MapComponent,

    },

    {
        path: '',
        component: MenuComponent,
        outlet: 'leftoutlet'
    },

    {
        path: 'blank',
        component: BlankComponent,
        outlet: 'popupOutlet'
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