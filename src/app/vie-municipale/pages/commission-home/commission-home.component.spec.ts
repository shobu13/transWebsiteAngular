import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionHomeComponent } from './commission-home.component';

describe('CommissionHomeComponent', () => {
  let component: CommissionHomeComponent;
  let fixture: ComponentFixture<CommissionHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommissionHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
