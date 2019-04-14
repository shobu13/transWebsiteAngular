import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreRoutingModule} from './core-routing.module';
import {HomeComponent} from './pages/home/home.component';
import {BaseModule} from '../ui/base/base.module';
import { CutPipe } from './shared/pipes/cut.pipe';

@NgModule({
  declarations: [HomeComponent, CutPipe],
  exports: [
    CutPipe
  ],
  imports: [
    CommonModule,
    BaseModule
  ]
})
export class CoreModule {
}
