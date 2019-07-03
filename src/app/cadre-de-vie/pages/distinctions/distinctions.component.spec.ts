import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistinctionsComponent } from './distinctions.component';

describe('DistinctionsComponent', () => {
  let component: DistinctionsComponent;
  let fixture: ComponentFixture<DistinctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistinctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistinctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
