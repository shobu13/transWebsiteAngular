import {Component, OnInit} from '@angular/core';
import {CommissionService} from '../../shared/commission.service';
import {ActivatedRoute} from '@angular/router';
import {CommissionModel} from '../../models/commission.model';

@Component({
  selector: 'app-commission-read',
  templateUrl: './commission-read.component.html',
  styleUrls: ['./commission-read.component.scss']
})
export class CommissionReadComponent implements OnInit {

  commission?: CommissionModel;

  constructor(private commissionService: CommissionService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.commissionService.retrieve(this.route.snapshot.params.id).subscribe(
      value => this.commission = new CommissionModel(value),
      error1 => console.log(error1)
    );
  }

}
