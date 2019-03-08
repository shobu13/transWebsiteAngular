import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreRoutingModule} from './core-routing.module';
import {HomeComponent} from './pages/home/home.component';
import {BaseModule} from '../ui/base/base.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    BaseModule
  ]
})
export class CoreModule {
}
