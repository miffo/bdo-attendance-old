import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';
import { Event } from './event';
import * as moment from 'moment';

import forEach = require("core-js/library/fn/array/for-each");

@Component({
    selector: 'event-dashboard',
    providers: [EventService],
    template: `
<h3>Upcomming events</h3>
<div class="grid grid-pad">
  <div *ngFor="let event of events" class="col-1-4">
    <div class="module hero">
      <h4>{{event.event_type}} - {{ event.event_datetime }}</h4>
    </div>
  </div>
</div>
`
})
export class EventDashboardComponent implements OnInit {
    constructor(private eventService: EventService) { }
    events: Event[];

    ngOnInit(): void {
        this.eventService.getEvents().then(events => {
            this.events = events.slice();
            this.events.sort(Event.compare);
            for (let i = 0; i < this.events.length; i ++) {
                if (this.events[i].event_datetime < Date.now()) {
                    this.events.splice(i, 1);
                }
            }
        });
    }
}