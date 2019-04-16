import {Component, OnInit} from '@angular/core';
import {SalleDeFeteModel} from '../../models/salle-de-fete.model';
import {SalleDeFeteService} from '../../shared/salle-de-fete.service';

@Component({
  selector: 'app-salle-de-fete',
  templateUrl: './salle-de-fete.component.html',
  styleUrls: ['./salle-de-fete.component.scss']
})
export class SalleDeFeteComponent implements OnInit {

  salleDeSpectacle?: SalleDeFeteModel;

  constructor(private salleDeFeteService: SalleDeFeteService) {
  }

  ngOnInit() {
    this.salleDeFeteService.list().subscribe(
      (value: any[]) => {
        this.salleDeSpectacle = new SalleDeFeteModel(value[0]);
      }
    );
  }

}
