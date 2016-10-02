import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';
import { Event } from './event'

@Component({
    selector: 'event-list',
    providers: [EventService],
    template: `
<h2>Events</h2>
<ul class="events">
    <li *ngFor="let event of events">
        <span>{{event.event_type }}</span>{{event.event_datetime}} - {{event.description}}
    </li>
</ul>
`
})
export class EventListComponent implements OnInit {
    constructor(private eventService: EventService) { }
    ngOnInit(): void {
        this.eventService.getEvents().then(events => this.events = events);
    }
    events: Event[];
}