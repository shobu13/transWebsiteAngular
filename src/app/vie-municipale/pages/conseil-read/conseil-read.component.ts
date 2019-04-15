import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ConseilService} from '../../shared/conseil.service';
import {ConseilModel} from '../../models/conseil.model';

@Component({
  selector: 'app-conseil-read',
  templateUrl: './conseil-read.component.html',
  styleUrls: ['./conseil-read.component.scss']
})
export class ConseilReadComponent implements OnInit {

  conseil: ConseilModel;

  constructor(private conseilService: ConseilService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.conseilService.retrieve(this.route.snapshot.params.id).subscribe(
      value => this.conseil = new ConseilModel(value),
      error1 => console.log(error1)
    );
  }

}
