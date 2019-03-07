import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AssociationModule} from './association.module';

const ASSOCIATION_ROUTES: Routes = [];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(ASSOCIATION_ROUTES),

    AssociationModule,
  ]
})
export class AssociationRoutingModule {
}
