import {Component, OnInit} from '@angular/core';
import {AssociationService} from '../../shared/association.service';
import {AssociationModel} from '../../models/association.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private association?: AssociationModel;
  private reset: boolean;

  constructor(private associationService: AssociationService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(
      () => {
        this.reset = false;
        this.updateAssociation(this.route.snapshot.params.id);
      }
    );
  }

  ngOnInit() {
  }

  updateAssociation(id: number) {
    this.associationService.retrieve(id).subscribe(
      (data: AssociationModel) => {
        this.association = new AssociationModel(data);
        console.log(this.association);
        this.reset = true;
      },
      error1 => {
        console.log(error1);
      }
    );
  }

}
