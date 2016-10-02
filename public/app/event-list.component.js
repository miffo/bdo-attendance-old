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
    var EventListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (event_service_1_1) {
                event_service_1 = event_service_1_1;
            }],
        execute: function() {
            EventListComponent = (function () {
                function EventListComponent(eventService) {
                    this.eventService = eventService;
                }
                EventListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.eventService.getEvents().then(function (events) { return _this.events = events; });
                };
                EventListComponent = __decorate([
                    core_1.Component({
                        selector: 'event-list',
                        providers: [event_service_1.EventService],
                        template: "\n<h2>Events</h2>\n<ul class=\"events\">\n    <li *ngFor=\"let event of events\">\n        <span>{{event.event_type }}</span>{{event.event_datetime}} - {{event.description}}\n    </li>\n</ul>\n"
                    }), 
                    __metadata('design:paramtypes', [event_service_1.EventService])
                ], EventListComponent);
                return EventListComponent;
            }());
            exports_1("EventListComponent", EventListComponent);
        }
    }
});

//# sourceMappingURL=event-list.component.js.map
