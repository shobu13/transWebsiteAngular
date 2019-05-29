import {Component, OnInit} from '@angular/core';
import {HebergementService} from '../../shared/hebergement.service';
import {HebergementModel} from '../../models/hebergement.model';

@Component({
  selector: 'app-hebergement',
  templateUrl: './hebergement.component.html',
  styleUrls: ['./hebergement.component.scss']
})
export class HebergementComponent implements OnInit {

  hebergements: { [typeName: string]: HebergementModel[] } = {};
  types: string[] = [];

  constructor(private hebergementService: HebergementService) {
  }

  ngOnInit() {
    this.hebergementService.list().subscribe(
      (value: any[]) => {
        for (const hebergement of value) {
          if (hebergement.type.libelle in this.hebergements) {
            this.hebergements[hebergement.type.libelle].push(new HebergementModel(hebergement));
          } else {
            this.types.push(hebergement.type.libelle);
            this.hebergements[hebergement.type.libelle] = [new HebergementModel(hebergement)];
          }
        }
        console.log(this.hebergements);
      },
      error1 => console.log(error1)
    );
  }

}
