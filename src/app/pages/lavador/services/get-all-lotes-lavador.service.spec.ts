import { TestBed } from '@angular/core/testing';

import { GetAllLotesLavadorService } from './get-all-lotes-lavador.service';

describe('GetAllLotesLavadorService', () => {
  let service: GetAllLotesLavadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllLotesLavadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
