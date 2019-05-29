import {Component, OnInit} from '@angular/core';
import {CimetiereService} from '../../shared/cimetiere.service';
import {CimetiereModel} from '../../models/cimetiere.model';

@Component({
  selector: 'app-cimetiere',
  templateUrl: './cimetiere.component.html',
  styleUrls: ['./cimetiere.component.scss']
})
export class CimetiereComponent implements OnInit {

  cimetiere?: CimetiereModel;

  constructor(private cimetiereService: CimetiereService) {
  }

  ngOnInit() {
    this.cimetiereService.list().subscribe(
      (value: any[]) => this.cimetiereService.retrieve(value[0].id).subscribe(
        value1 => this.cimetiere = new CimetiereModel(value1),
        error1 => console.log(error1)
      ),
      error1 => console.log(error1)
    );
  }

}
