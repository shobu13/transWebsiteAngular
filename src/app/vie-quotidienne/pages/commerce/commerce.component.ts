import {Component, OnInit} from '@angular/core';
import {CommerceService} from '../../shared/commerce.service';
import {CommerceModel} from '../../models/commerce.model';

@Component({
  selector: 'app-commerce',
  templateUrl: './commerce.component.html',
  styleUrls: ['./commerce.component.scss']
})
export class CommerceComponent implements OnInit {

  commerceListe: CommerceModel[];

  constructor(private commerceService: CommerceService) {
  }

  ngOnInit() {
    this.commerceService.list().subscribe(
      (data: any[]) => {
        this.commerceListe = [];
        for (const commerce of data) {
          this.commerceListe.push(new CommerceModel(commerce));
        }
      },
      error1 => console.log(error1)
    );
  }

}
