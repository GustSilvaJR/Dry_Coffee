import { TestBed } from '@angular/core/testing';

import { ListEntrysService } from './list-entrys.service';

describe('ListEntrysService', () => {
  let service: ListEntrysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListEntrysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
