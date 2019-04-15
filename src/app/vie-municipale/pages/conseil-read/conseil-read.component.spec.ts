import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseilReadComponent } from './conseil-read.component';

describe('ConseilReadComponent', () => {
  let component: ConseilReadComponent;
  let fixture: ComponentFixture<ConseilReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConseilReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConseilReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
