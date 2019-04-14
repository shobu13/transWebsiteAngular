import { TestBed } from '@angular/core/testing';

import { MastheadService } from './masthead.service';

describe('MastheadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MastheadService = TestBed.get(MastheadService);
    expect(service).toBeTruthy();
  });
});
