import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AssociationModule} from './association.module';

const ASSOCIATION_ROUTES: Routes = [
  {path: '', component: HomeComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(ASSOCIATION_ROUTES),

    AssociationModule,
  ]
})
export class AssociationRoutingModule {
}
