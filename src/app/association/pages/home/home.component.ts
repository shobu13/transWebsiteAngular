import {Component, OnInit} from '@angular/core';
import {AssociationService} from '../../shared/association.service';
import {AssociationModel} from '../../models/association.model';
import {ActivatedRoute, Router} from '@angular/router';
import {NewpaperModel} from '../../../cadre-de-vie/models/newpaper.model';
import {NgbDate} from '@ng-bootstrap/ng-bootstrap';
import {NewpaperService} from '../../../cadre-de-vie/shared/newpaper.service';
import {EventService} from '../../../cadre-de-vie/shared/event.service';
import {EventModel} from '../../../cadre-de-vie/models/event.model';
import {CalendarEvent} from 'angular-calendar';
import {startOfMonth, endOfMonth} from 'date-fns';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public association?: AssociationModel;
  news?: NewpaperModel[][];
  events?: EventModel[];

  constructor(private associationService: AssociationService, private route: ActivatedRoute, private router: Router,
              private newpaperService: NewpaperService, private eventService: EventService) {
    this.route.params.subscribe(
      () => {
        this.updateAssociation(this.route.snapshot.params.id);
      }
    );
  }

  ngOnInit() {
    this.news = [];
  }

  public updateNews(dates: { 'fromDate': Date | NgbDate, 'toDate': Date | NgbDate }) {
    if (dates.toDate instanceof NgbDate) {
      dates.toDate = new Date(dates.toDate.year, dates.toDate.month - 1, dates.toDate.day);
    }
    if (dates.fromDate instanceof NgbDate) {
      dates.fromDate = new Date(dates.fromDate.year, dates.fromDate.month - 1, dates.fromDate.day);
    }
    this.newpaperService.list(dates.fromDate, dates.toDate, false, this.association.id).subscribe(
      (data: []) => {
        const tempsNews = [];
        for (const newpaper of data) {
          tempsNews.push(new NewpaperModel(newpaper));
        }
        this.news = tempsNews.map((e, i) => {
          return i % 3 === 0 ? tempsNews.slice(i, i + 3) : null;
        }).filter((e) => {
          return e;
        });
      },
      error1 => {
        console.log(error1);
      }
    );

  }

  updateAssociation(id: number) {
    this.association = undefined;
    this.associationService.retrieve(id).subscribe(
      (data: AssociationModel) => {
        this.association = new AssociationModel(data);
      },
      error1 => {
        console.log(error1);
      }
    );
    this.updateEvent();
  }

  onEventClicked(eventId: number) {
    this.router.navigate(['/cadre-de-vie/event/', eventId]);
  }

  onTimeChange(time: Date) {
    this.updateEvent(startOfMonth(time), endOfMonth(time));
  }

  updateEvent(debut = startOfMonth(Date.now()), fin = endOfMonth(Date.now())) {
    this.eventService.list(false, this.route.snapshot.params.id, debut, fin).subscribe(
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
