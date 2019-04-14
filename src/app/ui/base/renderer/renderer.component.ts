import {Component, OnDestroy, OnInit} from '@angular/core';
import {routerTransition} from '../../../core/animations/routerTransition';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.scss'],
  animations: [routerTransition()]
})
export class RendererComponent implements OnInit {

  backgroundUrl: string;


  constructor() {
  }

  ngOnInit() {
  }


}
