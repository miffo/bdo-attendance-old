System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Event;
    return {
        setters:[],
        execute: function() {
            Event = (function () {
                function Event() {
                }
                //created_at: Date;
                //updated_at: Date;
                Event.compare = function (eventA, eventB) {
                    if (eventA.event_datetime < eventB.event_datetime)
                        return -1;
                    if (eventA.event_datetime > eventB.event_datetime)
                        return 1;
                    return 0;
                };
                return Event;
            }());
            exports_1("Event", Event);
        }
    }
});

//# sourceMappingURL=event.js.map
