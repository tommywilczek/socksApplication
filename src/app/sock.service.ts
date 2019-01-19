import { Injectable } from '@angular/core';
import { SockBase } from './sock-base';

@Injectable({
  providedIn: 'root'
})
export class SockService {

  constructor() { }

  getSocks() {
    let socks : SockBase[] = []
    console.log(typeof socks)
    return socks;
  }
}
