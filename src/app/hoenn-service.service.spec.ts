import { TestBed } from '@angular/core/testing';

import { HoennServiceService } from './hoenn-service.service';

describe('HoennServiceService', () => {
  let service: HoennServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoennServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
