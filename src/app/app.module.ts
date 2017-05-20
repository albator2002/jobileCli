import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule  }  from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';
import {JobModule} from "./jobs/job.module";
import {ProfileDialog} from "./profile.dialog.component";

import {AuthenticationService} from './services/authentication.service';
import {ProfileService} from "./services/profile.service";
import {LoginDialogComponent} from "./login.component";
import {MenuComponent} from "./menu.component";
import {BlankComponent} from "./blank.component";



@NgModule({
  declarations: [
    AppComponent,
    LoginDialogComponent,
    MenuComponent,
    ProfileDialog,
    BlankComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
	BrowserAnimationsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule,
    JobModule,

  ],
  entryComponents: [ProfileDialog,LoginDialogComponent],
  providers: [ProfileService,AuthenticationService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
