import {NgModule} from '@angular/core';
import {VieMunicipaleModule} from './vie-municipale.module';
import {RouterModule, Routes} from '@angular/router';
import {BulletinsComponent} from './pages/bulletins/bulletins.component';
import {CommissionHomeComponent} from './pages/commission-home/commission-home.component';
import {CommissionReadComponent} from './pages/commission-read/commission-read.component';
import {ConseilHomeComponent} from './pages/conseil-home/conseil-home.component';
import {ConseilReadComponent} from './pages/conseil-read/conseil-read.component';
import {ElusComponent} from './pages/elus/elus.component';

const VIE_MUNICIPALE_ROUTES: Routes = [
  {path: 'bulletins', component: BulletinsComponent},
  {path: 'commission', component: CommissionHomeComponent},
  {path: 'commission/:id', component: CommissionReadComponent},
  {path: 'conseil', component: ConseilHomeComponent},
  {path: 'conseil/:id', component: ConseilReadComponent},
  {path: 'elus', component: ElusComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(VIE_MUNICIPALE_ROUTES),

    VieMunicipaleModule
  ]
})
export class VieMunicipaleRoutingModule {
}
