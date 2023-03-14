import { TestBed } from '@angular/core/testing';

import { GetUserByEmailService } from './get-user-by-email.service';

describe('GetUserByEmailService', () => {
  let service: GetUserByEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUserByEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
