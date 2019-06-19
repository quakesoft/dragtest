import { Component, OnInit } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drago',
  templateUrl: './drago.component.html',
  styleUrls: ['./drago.component.css']
})
export class DragoComponent implements OnInit {

  items = [];
  active = -1;

  constructor() { }

  ngOnInit() {
    const h = 20;
    const v = 10;
    const len = 35;
    for (let i = 0; i < h; i++) {
      for (let j = 0; j < v; j++) {
        this.items.push({ x: i * len, y: j * len + 360 })
      }
    }
  }

}
