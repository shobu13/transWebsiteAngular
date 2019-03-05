import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const APP_ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: './core/core-routing.module#CoreRoutingModule'},
  {path: 'association', loadChildren: './association/association-routing.module#AssociationRoutingModule'},
  {path: 'cadre-de-vie', loadChildren: './cadre-de-vie/cadre-de-vie-routing.module#CadreDeVieRoutingModule'},
  {path: 'vie-municipale', loadChildren: './vie-municipale/vie-municipale-routing.module#VieMunicipaleRoutingModule'},
  {path: 'vie-quotidienne', loadChildren: './vie-quotidienne/vie-quotidienne-routing.module#VieQuotidienneRoutingModule'},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
