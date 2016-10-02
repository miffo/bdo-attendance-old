///<reference path="../../../typings/index.d.ts"/>
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { AppComponent }   from './app.component';
import { EventListComponent }   from './event-list.component';
import { EventDashboardComponent }   from './event-dashboard.component';
@NgModule({
    imports:      [ BrowserModule, routing ],
    declarations: [ AppComponent, EventListComponent, EventDashboardComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule {

}
