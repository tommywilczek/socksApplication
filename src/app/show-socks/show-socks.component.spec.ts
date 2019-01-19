import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSocksComponent } from './show-socks.component';

describe('ShowSocksComponent', () => {
  let component: ShowSocksComponent;
  let fixture: ComponentFixture<ShowSocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
