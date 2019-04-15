import {Component, OnInit} from '@angular/core';
import {NewpaperService} from '../../shared/newpaper.service';
import {ActivatedRoute} from '@angular/router';
import {NewpaperModel} from '../../models/newpaper.model';

@Component({
  selector: 'app-new-read',
  templateUrl: './new-read.component.html',
  styleUrls: ['./new-read.component.scss']
})
export class NewReadComponent implements OnInit {

  newpaper?: NewpaperModel;

  constructor(private newpaperService: NewpaperService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const newId = +this.route.snapshot.params.id;

    this.newpaperService.retrieve(newId).subscribe(
      (data: NewpaperModel) => {
        this.newpaper = new NewpaperModel(data);
        const body = document.getElementById('newpaperContent');
        body.style.background = `url(${data.owner.cover}) no-repeat center`;
        body.style.backgroundSize = 'cover';
      },
      error1 => {
        console.log(error1);
      }
    );
  }

}
