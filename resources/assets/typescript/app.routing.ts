import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventListComponent }      from './event-list.component';
import { EventDashboardComponent }      from './event-dashboard.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/event-dashboard',
        pathMatch: 'full'
    },
    {
        path: 'events',
        component: EventListComponent
    },
    {
        path: 'event-dashboard',
        component: EventDashboardComponent
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);