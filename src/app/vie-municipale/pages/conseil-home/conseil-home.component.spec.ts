import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseilHomeComponent } from './conseil-home.component';

describe('ConseilHomeComponent', () => {
  let component: ConseilHomeComponent;
  let fixture: ComponentFixture<ConseilHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConseilHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConseilHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
