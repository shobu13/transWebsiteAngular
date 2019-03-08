import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import {BaseModule} from '../ui/base/base.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    BaseModule
  ],
  providers: []
})
export class AssociationModule { }
