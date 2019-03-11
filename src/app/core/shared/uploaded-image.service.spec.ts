import { TestBed } from '@angular/core/testing';

import { UploadedImageService } from './uploaded-image.service';

describe('UploadedImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadedImageService = TestBed.get(UploadedImageService);
    expect(service).toBeTruthy();
  });
});
