import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.scss']
})

export class MastheadComponent implements OnInit {

  @Input() url: string;

  constructor() {
  }

  ngOnInit() {
  }

}
