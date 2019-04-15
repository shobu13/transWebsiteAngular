import {Component, OnInit} from '@angular/core';
import {UserModel} from '../../../core/models/user.model';
import {UserService} from '../../../core/shared/user.service';

@Component({
  selector: 'app-elus',
  templateUrl: './elus.component.html',
  styleUrls: ['./elus.component.scss']
})
export class ElusComponent implements OnInit {

  maire?: UserModel;
  adjoint1?: UserModel;
  adjoint2?: UserModel;
  adjoint3?: UserModel;
  conseillersListe?: UserModel[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.listElus().subscribe(
      (data: any) => {
        this.maire = new UserModel(data.maire);
        this.adjoint1 = new UserModel(data.adjoint1);
        this.adjoint2 = new UserModel(data.adjoint2);
        this.adjoint3 = new UserModel(data.adjoint3);
        this.conseillersListe = [];
        for (const elu of data.conseillers) {
          this.conseillersListe.push(new UserModel(elu));
        }
      },
      error1 => console.log(error1)
    );
  }

}
