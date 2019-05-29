import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SalleDeFeteComponent} from './pages/salle-de-fete/salle-de-fete.component';
import {SalleDeFeteService} from './shared/salle-de-fete.service';
import {MarkdownModule} from 'ngx-markdown';
import {MarcheComponent} from './pages/marche/marche.component';
import {MarcheService} from './shared/marche.service';
import {CommerceComponent} from './pages/commerce/commerce.component';
import {CommerceReadComponent} from './pages/commerce-read/commerce-read.component';
import {CommerceService} from './shared/commerce.service';
import {RouterModule} from '@angular/router';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import {BaseModule} from '../ui/base/base.module';
import {CimetiereComponent} from './pages/cimetiere/cimetiere.component';
import {CimetiereService} from './shared/cimetiere.service';
import {HebergementComponent} from './pages/hebergement/hebergement.component';
import {HebergementReadComponent} from './pages/hebergement-read/hebergement-read.component';
import {HebergementService} from './shared/hebergement.service';

@NgModule({
  declarations: [SalleDeFeteComponent, MarcheComponent, CommerceComponent, CommerceReadComponent, CimetiereComponent, HebergementComponent, HebergementReadComponent],
  imports: [
    CommonModule,
    MarkdownModule,
    RouterModule,
    ScrollToModule,
    BaseModule
  ],
  providers: [
    SalleDeFeteService,
    MarcheService,
    CommerceService,
    CimetiereService,
    HebergementService,
  ]
})
export class VieQuotidienneModule {
}
