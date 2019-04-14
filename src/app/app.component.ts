import {Component} from '@angular/core';
import {routerTransition} from './core/animations/routerTransition';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition()]
})
export class AppComponent {
  title = 'transWebsiteAngular';
}
