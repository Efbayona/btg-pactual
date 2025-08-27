import { TestBed } from '@angular/core/testing';

import { CancellationsService } from './cancellations.service';

describe('CancellationsService', () => {
  let service: CancellationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CancellationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
