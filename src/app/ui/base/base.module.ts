import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RendererComponent} from './renderer/renderer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  declarations: [RendererComponent, NavbarComponent, FooterComponent],
  exports: [RendererComponent],
  imports: [
    CommonModule
  ]
})
export class BaseModule {
}
