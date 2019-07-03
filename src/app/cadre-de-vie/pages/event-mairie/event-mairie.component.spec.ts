import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventMairieComponent } from './event-mairie.component';

describe('EventMairieComponent', () => {
  let component: EventMairieComponent;
  let fixture: ComponentFixture<EventMairieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventMairieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventMairieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
