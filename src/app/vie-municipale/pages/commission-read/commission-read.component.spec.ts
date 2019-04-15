import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommissionReadComponent } from './commission-read.component';

describe('CommissionReadComponent', () => {
  let component: CommissionReadComponent;
  let fixture: ComponentFixture<CommissionReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommissionReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommissionReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
