import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule  }  from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';

import {AuthenticationService} from './services/authentication.service';
import {ProfileService} from "./services/profile.service";
import {LoginComponent} from "./login.component";
import {MenuComponent} from "./menu.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
	BrowserAnimationsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [ProfileService,AuthenticationService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
