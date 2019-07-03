import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BulletinsComponent} from './pages/bulletins/bulletins.component';
import {BulletinService} from './shared/bulletin.service';
import {ReactiveFormsModule} from '@angular/forms';
import {CommissionHomeComponent} from './pages/commission-home/commission-home.component';
import {CommissionReadComponent} from './pages/commission-read/commission-read.component';
import {ConseilHomeComponent} from './pages/conseil-home/conseil-home.component';
import {ConseilReadComponent} from './pages/conseil-read/conseil-read.component';
import {CommissionService} from './shared/commission.service';
import {ConseilService} from './shared/conseil.service';
import {RouterModule} from '@angular/router';
import {MarkdownModule} from 'ngx-markdown';
import {ElusComponent} from './pages/elus/elus.component';

@NgModule({
  declarations: [BulletinsComponent, CommissionHomeComponent, CommissionReadComponent, ConseilHomeComponent, ConseilReadComponent, ElusComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MarkdownModule,

  ],
  providers: [
    BulletinService,
    CommissionService,
    ConseilService
  ]
})
export class VieMunicipaleModule {
}
