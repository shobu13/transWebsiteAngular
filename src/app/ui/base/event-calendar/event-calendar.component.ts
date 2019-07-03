import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  CalendarDateFormatter,
  CalendarEvent, CalendarMonthViewEventTimesChangedEvent,
  CalendarView,
  DAYS_OF_WEEK
} from 'angular-calendar';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import {CustomDateFormatter} from './custom-date-formatter.provider';
import {EventModel} from '../../../cadre-de-vie/models/event.model';
import {$e} from 'codelyzer/angular/styles/chars';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.scss'],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter
    }
  ]
})
export class EventCalendarComponent implements OnInit {

  view: CalendarView = CalendarView.Month;

  private _viewDate = new Date();

  events: CalendarEvent[] = [];

  locale: string = 'fr';

  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;

  weekendDays: number[] = [DAYS_OF_WEEK.FRIDAY, DAYS_OF_WEEK.SATURDAY];

  CalendarView = CalendarView;

  get viewDate(): Date {
    return this._viewDate;
  }

  set viewDate(value: Date) {
    this._viewDate = value;
    this.timeChange.emit(value);
  }

  @Input('events')
  public set rawEvents(value: EventModel[]) {
    this.events = [];
    for (const event of value) {
      this.events.push(
        {
          id: event.id,
          start: event.debut,
          end: event.fin,
          title: event.nom,
          color: colors.red,
          allDay: true,
        }
      );
    }
  }

  @Output() eventClicked = new EventEmitter<number>();
  @Output() timeChange = new EventEmitter<Date>();

  constructor() {
  }

  ngOnInit() {
  }

  onEventClicked($event: { event: CalendarEvent<any> }) {
    this.eventClicked.emit(+$event.event.id);
  }

  onEventTimesChanged(changement: CalendarMonthViewEventTimesChangedEvent<any, any>) {
    console.log(changement);
  }
}
