import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSocksComponent } from './show-socks.component';
import { SockBase } from '../sock-base';
import { SockService } from '../sock.service';


describe('ShowSocksComponent', () => {
  let service: SockService;
  let component: ShowSocksComponent;
  let fixture: ComponentFixture<ShowSocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = new SockService();
    fixture = TestBed.createComponent(ShowSocksComponent);
    // component = fixture.componentInstance;
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

  it('should recieve the sock list from the service', () => {
    const testData: SockBase[] = [ { name: 'test' }, { name: 'data' } ];
    spyOn(service, 'getSocks').and.returnValue(testData);
    expect(component.getSocks()).toBe(testData);
  });

  it('noSocks returns true if the socks list is empty', () => {
    spyOn(service, 'getSocks').and.returnValue([]);
    expect(component.noSocks()).toBe(true);
  });

});
