import { TestBed } from '@angular/core/testing';

import { SockService } from './sock.service';

describe('SockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SockService = TestBed.get(SockService);
    expect(service).toBeTruthy();
  });
});
