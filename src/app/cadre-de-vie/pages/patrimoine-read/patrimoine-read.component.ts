import {Component, OnInit} from '@angular/core';
import {PatrimoineService} from '../../shared/patrimoine.service';
import {ActivatedRoute} from '@angular/router';
import {PatrimoineModel} from '../../models/patrimoine.model';

@Component({
  selector: 'app-patrimoine-read',
  templateUrl: './patrimoine-read.component.html',
  styleUrls: ['./patrimoine-read.component.scss']
})
export class PatrimoineReadComponent implements OnInit {
  patrimoine?: PatrimoineModel;

  constructor(private patrimoineService: PatrimoineService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.patrimoineService.retrieve(this.route.snapshot.params.id).subscribe(
      (data) => {
        this.patrimoine = new PatrimoineModel(data);
      },
      error1 => console.log(error1)
    );
  }

}
