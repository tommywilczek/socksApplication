import { TestBed } from '@angular/core/testing';

import { SockService } from './sock.service';
import { SockBase } from './sock-base';

describe('SockService', () => {

  let service: SockService;

  beforeEach(() => {
    TestBed.configureTestingModule({}),
    service = new SockService()
  });

  afterEach(() => {
    service = null;
    localStorage.removeItem('token');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a list of socks', () => {
    expect(service.getSocks() instanceof Array).toBe(true);
  });
});
