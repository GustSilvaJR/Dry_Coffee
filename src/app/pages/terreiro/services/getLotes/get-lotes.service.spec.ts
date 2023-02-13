import { TestBed } from '@angular/core/testing';

import { GetLotesService } from './get-lotes.service';

describe('GetLotesService', () => {
  let service: GetLotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetLotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
