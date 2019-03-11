import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RendererComponent} from './renderer/renderer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {MastheadComponent} from './masthead/masthead.component';
import {AssociationService} from '../../association/shared/association.service';

@NgModule({
  declarations: [RendererComponent, NavbarComponent, FooterComponent, MastheadComponent],
  exports: [RendererComponent, NavbarComponent, FooterComponent, MastheadComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [AssociationService]
})
export class BaseModule {
}
