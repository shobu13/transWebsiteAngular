import {Component, OnInit} from '@angular/core';
import {BulletinService} from '../../shared/bulletin.service';
import {BulletinModel} from '../../models/bulletin.model';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-bulletins',
  templateUrl: './bulletins.component.html',
  styleUrls: ['./bulletins.component.scss']
})
export class BulletinsComponent implements OnInit {

  bulletinListe?: BulletinModel[];
  monthInput = new FormControl('month');
  yearInput = new FormControl('year');
  private fromDate: Date;
  private toDate: Date;

  constructor(private bulletinService: BulletinService) {
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

    this.bulletinListe = [];
    this.bulletinService.list(fromDate, toDate).subscribe(
      (data: []) => {
        for (const bulletin of data) {
          this.bulletinListe.push(new BulletinModel(bulletin));
        }
      },
      error1 => console.log(error1)
    );
  }
}
