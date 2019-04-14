import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './pages/home/home.component';
import {BaseModule} from '../ui/base/base.module';
import {AssociationService} from './shared/association.service';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import {MarkdownModule} from 'ngx-markdown';
import {NewsRendererComponent} from './components/news-renderer/news-renderer.component';
import {PagerService} from '../core/shared/pager.service';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {NewpaperService} from '../cadre-de-vie/shared/newpaper.service';
import {CoreModule} from '../core/core.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [HomeComponent, NewsRendererComponent],
  imports: [
    CommonModule,
    ScrollToModule,
    MarkdownModule.forChild(),
    BaseModule,
    NgbDatepickerModule,
    ReactiveFormsModule,
    CoreModule,
    RouterModule
  ],
  providers: [
    AssociationService,
    NewpaperService,
    PagerService,
  ]
})
export class AssociationModule {
}
