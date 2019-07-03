import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewReadComponent} from './pages/new-read/new-read.component';
import {CadreDeVieModule} from './cadre-de-vie.module';
import {DistinctionsComponent} from './pages/distinctions/distinctions.component';
import {TravauxComponent} from './pages/travaux/travaux.component';
import {PatrimoineListComponent} from './pages/patrimoine-list/patrimoine-list.component';
import {PatrimoineReadComponent} from './pages/patrimoine-read/patrimoine-read.component';
import {EventReadComponent} from './pages/event-read/event-read.component';
import {EventMairieComponent} from './pages/event-mairie/event-mairie.component';

const CADRE_DE_VIE_ROUTES: Routes = [
  {path: 'new/:id', pathMatch: 'full', component: NewReadComponent},
  {path: 'distinctions', pathMatch: 'full', component: DistinctionsComponent},
  {path: 'travaux', pathMatch: 'full', component: TravauxComponent},
  {path: 'patrimoine', pathMatch: 'full', component: PatrimoineListComponent},
  {path: 'patrimoine/:id', pathMatch: 'full', component: PatrimoineReadComponent},
  {path: 'event/mairie', pathMatch: 'full', component: EventMairieComponent},
  {path: 'event/:id', pathMatch: 'full', component: EventReadComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(CADRE_DE_VIE_ROUTES),

    CadreDeVieModule
  ]
})
export class CadreDeVieRoutingModule {
}
