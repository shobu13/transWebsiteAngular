import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VieQuotidienneModule} from './vie-quotidienne.module';
import {SalleDeFeteComponent} from './pages/salle-de-fete/salle-de-fete.component';
import {MarcheComponent} from './pages/marche/marche.component';
import {CommerceComponent} from './pages/commerce/commerce.component';
import {CommerceReadComponent} from './pages/commerce-read/commerce-read.component';
import {CimetiereComponent} from './pages/cimetiere/cimetiere.component';
import {HebergementComponent} from './pages/hebergement/hebergement.component';
import {HebergementReadComponent} from './pages/hebergement-read/hebergement-read.component';

const VIE_QUOTIDIENNE_ROUTES: Routes = [
  {path: 'salle-de-fete', component: SalleDeFeteComponent},
  {path: 'marche', component: MarcheComponent},
  {path: 'commerce', component: CommerceComponent},
  {path: 'commerce/:id', component: CommerceReadComponent},
  {path: 'cimetiere', component: CimetiereComponent},
  {path: 'hebergement', component: HebergementComponent},
  {path: 'hebergement/:id', component: HebergementReadComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(VIE_QUOTIDIENNE_ROUTES),

    VieQuotidienneModule
  ]
})
export class VieQuotidienneRoutingModule {
}
