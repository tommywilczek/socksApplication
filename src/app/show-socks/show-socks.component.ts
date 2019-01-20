import { Component, OnInit } from '@angular/core';
import { SockService } from '../sock.service';
import { SockBase } from '../sock-base';

@Component({
  selector: 'app-show-socks',
  templateUrl: './show-socks.component.html',
  styleUrls: ['./show-socks.component.css'],
  providers: [SockService]
})
export class ShowSocksComponent implements OnInit {

  socks: SockBase[];

  constructor(private sockService: SockService) {}

  ngOnInit() {
    this.getSocks();
  }

  getSocks() {
    console.log('component recieves:', this.sockService.getSocks());
    return this.sockService.getSocks();
  }

  noSocks(): boolean {
    if (this.getSocks().length === 0) {
      return true;
    } else {
      return false;
    }
  }

}
