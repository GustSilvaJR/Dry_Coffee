import { TestBed } from '@angular/core/testing';

import { SaveAnnotationService } from './save-annotation.service';

describe('SaveAnnotationService', () => {
  let service: SaveAnnotationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveAnnotationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
