import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SalleDeFeteComponent} from './pages/salle-de-fete/salle-de-fete.component';
import {SalleDeFeteService} from './shared/salle-de-fete.service';
import {MarkdownModule} from 'ngx-markdown';
import {MarcheComponent} from './pages/marche/marche.component';
import {MarcheService} from './shared/marche.service';

@NgModule({
  declarations: [SalleDeFeteComponent, MarcheComponent],
  imports: [
    CommonModule,
    MarkdownModule
  ],
  providers: [
    SalleDeFeteService,
    MarcheService,
  ]
})
export class VieQuotidienneModule {
}
