import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSocksComponent } from './show-socks.component';
import { SockBase } from '../sock-base';
import { SockService } from '../sock.service';
import { DebugElement } from '@angular/core';


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

  it('should render a no socks message if the sock list is empty', () => {
    const testData: SockBase[] = [];
    fixture = TestBed.createComponent(ShowSocksComponent);
    service = fixture.debugElement.injector.get(SockService);
    spyOn(service, 'getSocks').and.returnValue(testData);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const h1 = compiled.querySelector('h1');
    expect(h1.textContent).toContain('no socks');
  });

  it('should render sock list', () => {
    const testData: SockBase[] = [ { name: 'test' }, { name: 'data' } ];
    fixture = TestBed.createComponent(ShowSocksComponent);
    service = fixture.debugElement.injector.get(SockService);
    spyOn(service, 'getSocks').and.returnValue(testData);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const renderedList = compiled.querySelectorAll('li');
    expect(renderedList[0].innerText).toBe('test');
    expect(renderedList[1].innerText).toBe('data');
  });

});
// Arrange, Act, Assert
// growing OO sofware with tests GOOST
// Exceptional Javascript, yellow cover
// website: let's do test driven js, james shore
