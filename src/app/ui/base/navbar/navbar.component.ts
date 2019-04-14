import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AssociationService} from '../../../association/shared/association.service';
import {AssociationModel} from '../../../association/models/association.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public associations: AssociationModel[];

  constructor(public router: Router, private associationService: AssociationService) {
    this.associations = [];
  }

  ngOnInit() {
    this.associationService.list().subscribe(
      (data: []) => {
        for (const assoc of data) {
          this.associations.push(new AssociationModel(assoc));
        }
        console.log(this.associations);
      },
      error1 => {
        console.log(error1);
      }
    );
  }

}
