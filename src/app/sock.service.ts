import { Injectable } from '@angular/core';
import { SockBase } from './sock-base';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SockService {

  constructor() { }

  getSocks() {
    const socks: SockBase[] = [
      { name: 'my first sock' }
    ];
    return socks;
  }
}
