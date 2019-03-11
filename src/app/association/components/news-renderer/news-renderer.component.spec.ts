import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsRendererComponent } from './news-renderer.component';

describe('NewsRendererComponent', () => {
  let component: NewsRendererComponent;
  let fixture: ComponentFixture<NewsRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
