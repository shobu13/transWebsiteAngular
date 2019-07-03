import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BaseModule} from './ui/base/base.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import {MarkdownModule, MarkedOptions, MarkedRenderer} from 'ngx-markdown';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {MastheadService} from './ui/base/shared/masthead.service';
import {SERVER_URL} from '../assets/conf';

registerLocaleData(localeFr, 'fr');

export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();

  // surcharge de la fonction pour générer une image a partir d'un texte markdown
  renderer.image = (text: string) => {
    return `<img src="${SERVER_URL}${text}">`;
  };

  return {
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
  };
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ScrollToModule.forRoot(),
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptionsFactory,
      }
    }),
    NgbModule,
    BaseModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr'},
    MastheadService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
