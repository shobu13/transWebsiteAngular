import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BaseModule} from './ui/base/base.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import {MarkdownModule} from 'ngx-markdown';

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
    BaseModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
