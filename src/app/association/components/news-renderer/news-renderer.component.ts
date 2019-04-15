import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NewpaperModel} from '../../../cadre-de-vie/models/newpaper.model';
import {PagerService} from '../../../core/shared/pager.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-news-renderer',
  templateUrl: './news-renderer.component.html',
})
export class NewsRendererComponent implements OnInit {

  @Input() news: NewpaperModel[][];
  @Output() dateChange = new EventEmitter<{ 'fromDate': Date, 'toDate': Date }>();

  fromDate: Date;
  toDate: Date;
  monthInput = new FormControl('month');
  yearInput = new FormControl('year');

  private paginatedNews: NewpaperModel[];


  constructor(private pager: PagerService) {
  }

  ngOnInit() {
    this.fromDate = new Date(Date.now());
    this.fromDate.setDate(1);
    this.toDate = new Date(Date.now());
    this.toDate.setMonth(this.toDate.getMonth() + 1);
    this.toDate.setDate(0);

    this.monthInput.setValue(this.fromDate.getMonth());
    this.yearInput.setValue(this.fromDate.getFullYear());

    this.dateChange.emit({fromDate: this.fromDate, toDate: this.toDate});
  }

  onDateChange() {
    const fromDate = new Date(+this.yearInput.value, +this.monthInput.value, 1);
    const toDate = new Date(+this.yearInput.value, +this.monthInput.value + 1, 0);
    this.dateChange.emit({fromDate, toDate});
  }


}
