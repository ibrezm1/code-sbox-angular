import { Component, OnInit } from '@angular/core';
import { getRandomEmoji } from './myutils';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component {
  sendMessage!: string;
  ngOnInit() {
    this.randomEmoji();
  }
  randomEmoji() {
    this.sendMessage = getRandomEmoji();
  }
}
