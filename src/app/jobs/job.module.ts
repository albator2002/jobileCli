import { NgModule,CUSTOM_ELEMENTS_SCHEMA}      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MapComponent} from "./map.component";
import {JobService} from "./services/job.service";

@NgModule({
    imports:      [ CommonModule,FormsModule,HttpModule],
    declarations: [ MapComponent],
    providers: [ JobService],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

})
export class JobModule { }/**
 * Created by Alain on 2016-10-06.
 */
