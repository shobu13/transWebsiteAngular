import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewReadComponent} from './pages/new-read/new-read.component';
import {NewpaperService} from './shared/newpaper.service';
import {MarkdownModule} from 'ngx-markdown';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [NewReadComponent],
  imports: [
    CommonModule,
    MarkdownModule,
    RouterModule,
  ],
  providers: [
    NewpaperService
  ]
})
export class CadreDeVieModule {
}
