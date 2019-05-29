import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommerceReadComponent } from './commerce-read.component';

describe('CommerceReadComponent', () => {
  let component: CommerceReadComponent;
  let fixture: ComponentFixture<CommerceReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommerceReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommerceReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
