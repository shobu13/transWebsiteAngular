import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {CommissionModel} from '../../models/commission.model';
import {CommissionService} from '../../shared/commission.service';

@Component({
  selector: 'app-commission-home',
  templateUrl: './commission-home.component.html',
  styleUrls: ['./commission-home.component.scss']
})
export class CommissionHomeComponent implements OnInit {
  monthInput = new FormControl('month');
  yearInput = new FormControl('year');
  commissionListe: CommissionModel[];

  private fromDate: Date;
  private toDate: Date;

  constructor(private commissionService: CommissionService) {
  }

  ngOnInit() {
    this.fromDate = new Date(Date.now());
    this.fromDate.setDate(1);
    this.toDate = new Date(Date.now());
    this.toDate.setMonth(this.toDate.getMonth() + 1);
    this.toDate.setDate(0);

    this.monthInput.setValue(this.fromDate.getMonth());
    this.yearInput.setValue(this.fromDate.getFullYear());

    this.onDateChange();
  }

  onDateChange() {
    const fromDate = new Date(+this.yearInput.value, +this.monthInput.value, 1);
    const toDate = new Date(+this.yearInput.value, +this.monthInput.value + 1, 0);

    this.commissionListe = [];
    this.commissionService.list(fromDate, toDate).subscribe(
      (data: []) => {
        for (const commission of data) {
          this.commissionListe.push(new CommissionModel(commission));
        }
      },
      error1 => console.log(error1)
    );
  }

}
