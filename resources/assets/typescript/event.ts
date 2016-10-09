export class Event {
    id: number;
    event_type_id: number;
    event_type: string;
    description: string;
    event_datetime: string;
    //created_at: Date;
    //updated_at: Date;
    static compare(eventA: Event, eventB: Event): number {
        if (eventA.event_datetime < eventB.event_datetime)
            return -1;
        if (eventA.event_datetime > eventB.event_datetime)
            return 1;
        return 0;
    }
}