import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CimetiereComponent } from './cimetiere.component';

describe('CimetiereComponent', () => {
  let component: CimetiereComponent;
  let fixture: ComponentFixture<CimetiereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CimetiereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CimetiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
