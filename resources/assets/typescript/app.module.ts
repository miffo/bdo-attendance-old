///<reference path="../../../typings/index.d.ts"/>
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MomentModule } from 'angular2-moment';
import { routing } from './app.routing';
import { AppComponent }   from './app.component';
import { EventListComponent }   from './event-list.component';
import { EventDashboardComponent }   from './event-dashboard.component';
@NgModule({
    imports:      [ BrowserModule, routing, MomentModule ],
    declarations: [ AppComponent, EventListComponent, EventDashboardComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule {

}
