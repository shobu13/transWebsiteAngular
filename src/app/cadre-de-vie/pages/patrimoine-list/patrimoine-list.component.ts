import {Component, OnInit} from '@angular/core';
import {PatrimoineService} from '../../shared/patrimoine.service';
import {PatrimoineModel} from '../../models/patrimoine.model';

@Component({
  selector: 'app-patrimoine-list',
  templateUrl: './patrimoine-list.component.html',
  styleUrls: ['./patrimoine-list.component.scss']
})
export class PatrimoineListComponent implements OnInit {

  patrimoineList?: PatrimoineModel[];

  constructor(private patrimoineService: PatrimoineService) {
    this.patrimoineList = [];
  }

  ngOnInit() {
    this.patrimoineService.list().subscribe(
      (data: []) => {
        for (const patrimoine of data) {
          this.patrimoineList.push(new PatrimoineModel(patrimoine));
        }
      },
      error1 => console.log(error1)
    );
  }

}
