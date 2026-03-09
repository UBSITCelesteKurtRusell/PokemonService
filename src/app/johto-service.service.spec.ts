import { TestBed } from '@angular/core/testing';

import { JohtoServiceService } from './johto-service.service';

describe('JohtoServiceService', () => {
  let service: JohtoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JohtoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
