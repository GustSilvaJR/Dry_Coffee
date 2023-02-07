import { TestBed } from '@angular/core/testing';

import { SendEntryService } from './send-entry.service';

describe('SendEntryService', () => {
  let service: SendEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
