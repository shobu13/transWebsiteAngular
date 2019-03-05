import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {CoreModule} from './core.module';

const CORE_ROUTES: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(CORE_ROUTES),
    CoreModule
  ]
})
export class CoreRoutingModule {
}
