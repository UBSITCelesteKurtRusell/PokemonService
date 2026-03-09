import { TestBed } from '@angular/core/testing';

import { KantoServiceService } from './kanto-service.service';

describe('KantoServiceService', () => {
  let service: KantoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KantoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
