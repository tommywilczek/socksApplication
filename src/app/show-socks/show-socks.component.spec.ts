import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSocksComponent } from './show-socks.component';
import { SockBase } from '../sock-base';

class MockedSockService {
  testSockArray: SockBase[]

  getSocks() {
    return this.testSockArray;
  }
}

describe('ShowSocksComponent', () => {
  let service: MockedSockService;
  let component: ShowSocksComponent;
  let fixture: ComponentFixture<ShowSocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = new MockedSockService();
    fixture = TestBed.createComponent(ShowSocksComponent);
    //component = fixture.componentInstance;
    component = new ShowSocksComponent(service);
    fixture.detectChanges();
  });

  afterEach(() => {
    service = null;
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get an object from the sock service', () => {
    expect(component.getSocks).toBeTruthy();
  });

  it('noSocks returns true if the socks list is empty', () => {
    service.testSockArray = []
    expect(component.noSocks()).toBe(true);
  });
});
