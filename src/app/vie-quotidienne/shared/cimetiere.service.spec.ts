import { TestBed } from '@angular/core/testing';

import { CimetiereService } from './cimetiere.service';

describe('CimetiereService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CimetiereService = TestBed.get(CimetiereService);
    expect(service).toBeTruthy();
  });
});
