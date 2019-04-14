import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BaseModule} from './ui/base/base.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import {MarkdownModule} from 'ngx-markdown';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {MastheadService} from './ui/base/shared/masthead.service';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ScrollToModule.forRoot(),
    MarkdownModule.forRoot(),
    NgbModule,
    BaseModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr'},
    MastheadService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
