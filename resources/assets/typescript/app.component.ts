import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `

      
    
<md-sidenav-layout>
    <md-sidenav #start (open)="closeStartButton.focus()">
        Start Sidenav.
       <nav>
         <a routerLink="/event-dashboard">Upcomming events</a>
         <a routerLink="/events">events</a>
       </nav>
        <button md-button #closeStartButton (click)="start.close()">Close</button>
    </md-sidenav>

    <md-toolbar [color]="myColor">
        <button md-button (click)="start.open()"><i _ngcontent-xwb-1="" class="material-icons app-toolbar-menu">menu</i></button>
        <span>Bdo-attendence</span>
    </md-toolbar>
    
    <router-outlet></router-outlet>
</md-sidenav-layout>
`
})
export class AppComponent {
    title = 'Coming events';
}