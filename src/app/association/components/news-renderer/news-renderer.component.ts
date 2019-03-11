import {Component, Input, OnInit} from '@angular/core';
import {NewpaperModel} from '../../../cadre-de-vie/models/newpaper.model';
import {PagerService} from '../../../core/shared/pager.service';

@Component({
  selector: 'app-news-renderer',
  templateUrl: './news-renderer.component.html',
  styleUrls: ['./news-renderer.component.scss']
})
export class NewsRendererComponent implements OnInit {

  @Input() private _news: NewpaperModel[];

  private paginatedNews: NewpaperModel[];


  get news(): NewpaperModel[] {
    return this._news;
  }

  set news(value: NewpaperModel[]) {
    this._news = value;
  }

  constructor(private pagerService: PagerService) {
  }

  ngOnInit() {
  }

  private updateNews(date?: Date) {
    console.log('meh');
  }


}
