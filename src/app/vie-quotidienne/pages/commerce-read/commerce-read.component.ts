import {Component, OnInit} from '@angular/core';
import {CommerceService} from '../../shared/commerce.service';
import {ActivatedRoute} from '@angular/router';
import {CommerceModel} from '../../models/commerce.model';

@Component({
  selector: 'app-commerce-read',
  templateUrl: './commerce-read.component.html',
  styleUrls: ['./commerce-read.component.scss']
})
export class CommerceReadComponent implements OnInit {

  commerce?: CommerceModel;

  constructor(private commerceService: CommerceService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.commerceService.retrieve(this.route.snapshot.params.id).subscribe(
      value => this.commerce = new CommerceModel(value),
      error1 => console.log(error1)
    );
  }

}
