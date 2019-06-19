import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  items = [];
  active = -1;

  constructor() { }

  ngOnInit() {
    const h = 20;
    const v = 10;
    const len = 35;
    for (let i = 0; i < h; i++) {
      for (let j = 0; j < v; j++) {
        this.items.push({ x: i * len, y: j * len })
      }
    }
  }

  down(i) {
    this.active = i;
  }

  move(e) {
    this.items[this.active] = { x: e.clientX, y: e.clientY }
  }
}
