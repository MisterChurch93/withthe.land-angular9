import { Component, OnInit } from '@angular/core';

import Headroom from "headroom.js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: []
})
export class AppComponent implements OnInit {
  title = 'withtheland';
  private previousPath: string = ''

  ngOnInit (): void {
    const header = document.querySelector("header");
    const headroom = new Headroom(header);
    headroom.init();
  }

}
