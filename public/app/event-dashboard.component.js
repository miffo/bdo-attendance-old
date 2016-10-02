System.register(['@angular/core', './event.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, event_service_1;
    var EventDashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (event_service_1_1) {
                event_service_1 = event_service_1_1;
            }],
        execute: function() {
            EventDashboardComponent = (function () {
                function EventDashboardComponent(eventService) {
                    this.eventService = eventService;
                }
                EventDashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.eventService.getEvents().then(function (events) {
                        //events.sort(Event.compare);
                        _this.events = events;
                    });
                };
                EventDashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'event-dashboard',
                        providers: [event_service_1.EventService],
                        template: "\n<h3>Upcomming events</h3>\n<div class=\"grid grid-pad\">\n  <div *ngFor=\"let event of events\" class=\"col-1-4\">\n    <div class=\"module hero\">\n      <h4>{{event.event_type}} - {{event.event_datetime}}</h4>\n    </div>\n  </div>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [event_service_1.EventService])
                ], EventDashboardComponent);
                return EventDashboardComponent;
            }());
            exports_1("EventDashboardComponent", EventDashboardComponent);
        }
    }
});

//# sourceMappingURL=event-dashboard.component.js.map
