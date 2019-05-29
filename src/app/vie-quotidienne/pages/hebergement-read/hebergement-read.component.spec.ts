import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HebergementReadComponent } from './hebergement-read.component';

describe('HebergementReadComponent', () => {
  let component: HebergementReadComponent;
  let fixture: ComponentFixture<HebergementReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HebergementReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HebergementReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
