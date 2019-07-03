import {Component, OnInit} from '@angular/core';
import {DistinctionService} from '../../shared/distinction.service';
import {DistinctionModel} from '../../models/distinction.model';

@Component({
  selector: 'app-distinctions',
  templateUrl: './distinctions.component.html',
  styleUrls: ['./distinctions.component.scss']
})
export class DistinctionsComponent implements OnInit {
  distinctionsList?: DistinctionModel[];

  constructor(private distinctionService: DistinctionService) {
    this.distinctionsList = [];
  }

  ngOnInit() {
    this.distinctionService.list().subscribe(
      (data: []) => {
        for (const distinction of data) {
          this.distinctionsList.push(new DistinctionModel(distinction));
        }
      },
      error1 => console.log(error1)
    );
  }

}
