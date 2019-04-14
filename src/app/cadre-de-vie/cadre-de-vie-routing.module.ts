import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewReadComponent} from './pages/new-read/new-read.component';
import {CadreDeVieModule} from './cadre-de-vie.module';

const CADRE_DE_VIE_ROUTES: Routes = [
  {path: 'new/:id', pathMatch: 'full', component: NewReadComponent}
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
