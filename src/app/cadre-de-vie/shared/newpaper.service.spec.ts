import { TestBed } from '@angular/core/testing';

import { NewpaperService } from './newpaper.service';

describe('NewpaperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewpaperService = TestBed.get(NewpaperService);
    expect(service).toBeTruthy();
  });
});
