import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElusComponent } from './elus.component';

describe('ElusComponent', () => {
  let component: ElusComponent;
  let fixture: ComponentFixture<ElusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
