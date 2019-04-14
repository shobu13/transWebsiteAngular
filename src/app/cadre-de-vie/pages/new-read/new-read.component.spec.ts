import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReadComponent } from './new-read.component';

describe('NewReadComponent', () => {
  let component: NewReadComponent;
  let fixture: ComponentFixture<NewReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
