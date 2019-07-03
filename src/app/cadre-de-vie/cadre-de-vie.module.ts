import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewReadComponent} from './pages/new-read/new-read.component';
import {NewpaperService} from './shared/newpaper.service';
import {MarkdownModule} from 'ngx-markdown';
import {RouterModule} from '@angular/router';
import {DistinctionsComponent} from './pages/distinctions/distinctions.component';
import {DistinctionService} from './shared/distinction.service';
import {TravauxComponent} from './pages/travaux/travaux.component';
import {TravauxService} from './shared/travaux.service';
import {PatrimoineListComponent} from './pages/patrimoine-list/patrimoine-list.component';
import {PatrimoineReadComponent} from './pages/patrimoine-read/patrimoine-read.component';
import {PatrimoineService} from './shared/patrimoine.service';
import {BaseModule} from '../ui/base/base.module';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import {EventReadComponent} from './pages/event-read/event-read.component';
import {EventService} from './shared/event.service';
import { EventMairieComponent } from './pages/event-mairie/event-mairie.component';

@NgModule({
  declarations: [NewReadComponent, DistinctionsComponent, TravauxComponent, PatrimoineListComponent, PatrimoineReadComponent, EventReadComponent, EventMairieComponent],
  imports: [
    CommonModule,
    MarkdownModule,
    RouterModule,
    BaseModule,
    ScrollToModule
  ],
  providers: [
    NewpaperService,
    DistinctionService,
    TravauxService,
    PatrimoineService,
    EventService
  ]
})
export class CadreDeVieModule {
}
