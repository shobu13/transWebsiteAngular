import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ConseilModel} from '../../models/conseil.model';
import {ConseilService} from '../../shared/conseil.service';

@Component({
  selector: 'app-conseil-home',
  templateUrl: './conseil-home.component.html',
  styleUrls: ['./conseil-home.component.scss']
})
export class ConseilHomeComponent implements OnInit {
  private fromDate: Date;
  private toDate: Date;

  monthInput = new FormControl('month');
  yearInput = new FormControl('year');
  conseilListe: ConseilModel[];

  constructor(private conseilService: ConseilService) {
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

    this.conseilListe = [];
    this.conseilService.list(fromDate, toDate).subscribe(
      (data: []) => {
        for (const commission of data) {
          this.conseilListe.push(new ConseilModel(commission));
        }
      },
      error1 => console.log(error1)
    );
  }

}
