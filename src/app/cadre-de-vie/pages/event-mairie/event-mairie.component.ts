import {Component, OnInit} from '@angular/core';
import {endOfMonth, startOfMonth} from 'date-fns';
import {EventModel} from '../../models/event.model';
import {Router} from '@angular/router';
import {EventService} from '../../shared/event.service';

@Component({
  selector: 'app-event-mairie',
  templateUrl: './event-mairie.component.html',
  styleUrls: ['./event-mairie.component.scss']
})
export class EventMairieComponent implements OnInit {
  events: EventModel[];

  constructor(private router: Router, private eventService: EventService) {
  }

  ngOnInit() {
    this.updateEvent();
  }

  onEventClicked(eventId: number) {
    this.router.navigate(['/cadre-de-vie/event/', eventId]);
  }

  onTimeChange(time: Date) {
    this.updateEvent(startOfMonth(time), endOfMonth(time));
  }

  updateEvent(debut = startOfMonth(Date.now()), fin = endOfMonth(Date.now())) {
    this.eventService.list(true, undefined, debut, fin).subscribe(
      (eventData: []) => {
        this.events = [];
        for (const event of eventData) {
          this.events.push(new EventModel(event));
        }
      },
      error1 => console.log(error1)
    );
  }

}
