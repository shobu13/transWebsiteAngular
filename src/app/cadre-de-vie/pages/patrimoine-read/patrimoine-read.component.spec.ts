import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrimoineReadComponent } from './patrimoine-read.component';

describe('PatrimoineReadComponent', () => {
  let component: PatrimoineReadComponent;
  let fixture: ComponentFixture<PatrimoineReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatrimoineReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatrimoineReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
