import {Component, OnInit} from '@angular/core';
import {TravauxService} from '../../shared/travaux.service';
import {TravailModel} from '../../models/travail.model';

@Component({
  selector: 'app-travaux',
  templateUrl: './travaux.component.html',
  styleUrls: ['./travaux.component.scss']
})
export class TravauxComponent implements OnInit {
  travaux?: {};
  types?: string[];

  constructor(private travailService: TravauxService) {
    this.travaux = {};
  }

  ngOnInit() {
    this.travailService.list(new Date()).subscribe(
      (data: []) => {
        for (const item of data) {
          const travail = new TravailModel(item);
          if (this.travaux[travail.type]) {
            this.travaux[travail.type].push(travail);
          } else {
            this.travaux[travail.type] = [travail];
          }
        }
        this.types = Object.keys(this.travaux);
      },
      error1 => console.log(error1)
    );
  }

}
