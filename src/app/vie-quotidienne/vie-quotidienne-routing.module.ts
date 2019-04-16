import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VieQuotidienneModule} from './vie-quotidienne.module';
import {SalleDeFeteComponent} from './pages/salle-de-fete/salle-de-fete.component';
import {MarcheComponent} from './pages/marche/marche.component';

const VIE_QUOTIDIENNE_ROUTES: Routes = [
  {path: 'salle-de-fete', component: SalleDeFeteComponent},
  {path: 'marche', component: MarcheComponent},
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
