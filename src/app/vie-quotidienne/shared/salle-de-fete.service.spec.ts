import { TestBed } from '@angular/core/testing';

import { SalleDeFeteService } from './salle-de-fete.service';

describe('SalleDeFeteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalleDeFeteService = TestBed.get(SalleDeFeteService);
    expect(service).toBeTruthy();
  });
});
