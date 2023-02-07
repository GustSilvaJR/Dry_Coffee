import { TestBed } from '@angular/core/testing';

import { CellsAvailableService } from './cells-available.service';

describe('CellsAvailableService', () => {
  let service: CellsAvailableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CellsAvailableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
