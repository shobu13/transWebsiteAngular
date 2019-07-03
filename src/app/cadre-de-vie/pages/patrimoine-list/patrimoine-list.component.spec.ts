import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrimoineListComponent } from './patrimoine-list.component';

describe('PatrimoineListComponent', () => {
  let component: PatrimoineListComponent;
  let fixture: ComponentFixture<PatrimoineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatrimoineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatrimoineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
