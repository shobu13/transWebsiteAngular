import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RendererComponent} from './renderer/renderer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {MastheadComponent} from './masthead/masthead.component';
import {AssociationService} from '../../association/shared/association.service';
import {EventCalendarComponent} from './event-calendar/event-calendar.component';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [RendererComponent, NavbarComponent, FooterComponent, MastheadComponent, EventCalendarComponent],
  exports: [RendererComponent, NavbarComponent, FooterComponent, MastheadComponent, EventCalendarComponent],
  imports: [
    CommonModule,
    RouterModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
  ],
  providers: [
    AssociationService,
  ]
})
export class BaseModule {

}
