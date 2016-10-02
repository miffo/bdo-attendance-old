import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
<h1>Bdo-attendence</h1>
   <nav>
     <a routerLink="/event-dashboard">Upcomming events</a>
     <a routerLink="/events">events</a>
   </nav>
<router-outlet></router-outlet>
`
})
export class AppComponent {
    title = 'Coming events';
}