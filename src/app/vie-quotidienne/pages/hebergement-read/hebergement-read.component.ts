import {Component, OnInit, ViewChild} from '@angular/core';
import {HebergementService} from '../../shared/hebergement.service';
import {ActivatedRoute} from '@angular/router';
import {HebergementModel} from '../../models/hebergement.model';


@Component({
  selector: 'app-hebergement-read',
  templateUrl: './hebergement-read.component.html',
  styleUrls: ['./hebergement-read.component.scss']
})
export class HebergementReadComponent implements OnInit {

  hebergement?: HebergementModel;

  constructor(private hebergementService: HebergementService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.hebergementService.retrieve(this.route.snapshot.params.id).subscribe(
      (hebergement: HebergementModel) => {
        this.hebergement = new HebergementModel(hebergement);
        const body = document.getElementById('hebergementContent');
        body.style.background = `url(${hebergement.header}) no-repeat center`;
        body.style.backgroundSize = 'cover';
      }
    );
  }

}
