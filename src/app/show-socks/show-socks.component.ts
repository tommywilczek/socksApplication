import { Component, OnInit } from '@angular/core';
import { SockService } from '../sock.service';

@Component({
  selector: 'app-show-socks',
  templateUrl: './show-socks.component.html',
  styleUrls: ['./show-socks.component.css'],
  providers: [SockService]
})
export class ShowSocksComponent implements OnInit {

  constructor(private sockService: SockService) {}

  ngOnInit() {
    this.sockService.getSocks()
  }

}
