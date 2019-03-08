import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AssociationModule} from './association.module';
import {HomeComponent} from './pages/home/home.component';

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
