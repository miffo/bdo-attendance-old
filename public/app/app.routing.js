System.register(['@angular/router', './event-list.component', './event-dashboard.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, event_list_component_1, event_dashboard_component_1;
    var appRoutes, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (event_list_component_1_1) {
                event_list_component_1 = event_list_component_1_1;
            },
            function (event_dashboard_component_1_1) {
                event_dashboard_component_1 = event_dashboard_component_1_1;
            }],
        execute: function() {
            appRoutes = [
                {
                    path: '',
                    redirectTo: '/event-dashboard',
                    pathMatch: 'full'
                },
                {
                    path: 'events',
                    component: event_list_component_1.EventListComponent
                },
                {
                    path: 'event-dashboard',
                    component: event_dashboard_component_1.EventDashboardComponent
                }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});

//# sourceMappingURL=app.routing.js.map
