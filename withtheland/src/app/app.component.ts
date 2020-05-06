import { Component, OnInit } from '@angular/core';

import Headroom from "headroom.js";
import { jarallax } from 'jarallax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'withtheland';

  ngOnInit (): void {
    const header = document.querySelector("header");
    const headroom = new Headroom(header);
    headroom.init();

    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.6
    });
  }
}
