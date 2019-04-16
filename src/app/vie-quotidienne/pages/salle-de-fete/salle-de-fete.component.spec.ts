import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleDeFeteComponent } from './salle-de-fete.component';

describe('SalleDeFeteComponent', () => {
  let component: SalleDeFeteComponent;
  let fixture: ComponentFixture<SalleDeFeteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalleDeFeteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalleDeFeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
