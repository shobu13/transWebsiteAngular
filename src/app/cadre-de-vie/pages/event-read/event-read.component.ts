import {Component, OnInit} from '@angular/core';
import {EventService} from '../../shared/event.service';
import {ActivatedRoute} from '@angular/router';
import {EventModel} from '../../models/event.model';

@Component({
  selector: 'app-event-read',
  templateUrl: './event-read.component.html',
  styleUrls: ['./event-read.component.scss']
})
export class EventReadComponent implements OnInit {
  event?: EventModel;

  constructor(private eventService: EventService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.eventService.retrieve(this.route.snapshot.params.id).subscribe(
      (value) => {
        this.event = new EventModel(value);
      },
      error1 => console.log(error1)
    );
  }

}
