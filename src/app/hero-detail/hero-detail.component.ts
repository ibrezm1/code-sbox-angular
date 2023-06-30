import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent {
  @Input() author!: string;
  selected!: string;
  showText!: string;
  roulette!: Roulette;
  sameColorCounter: number = 0;
  colorsCounter: { [key: string]: number } = {
    Black: 0,
    Red: 0,
  };
  maxStreak: number = 0;
  freqdist: { [key: number]: number } = {};

  constructor() {
    this.author = 'Salamo';
    // Example usage
    this.roulette = new Roulette(['Red', 'Black']);

    this.spin();
    this.showText = `${this.selected}(${this.sameColorCounter})`;
    //console.log(`Random Output: ${randomOutput}`);
  }
  spin() {
    const newSelected = this.roulette.spin();
    this.colorsCounter[newSelected] += 1;
    if (this.selected == newSelected) {
      this.sameColorCounter += 1;
    } else {
      this.selected = newSelected;
      this.sameColorCounter = 1;
    }
    if (this.sameColorCounter > this.maxStreak) {
      this.maxStreak = this.sameColorCounter;
    }
    this.incrementFrequency(this.sameColorCounter);
    this.showText = `${this.selected}(${this.sameColorCounter})`;
  }
  spin1000() {
    for (let i = 0; i < 1000000; i++) {
      this.spin();
    }
  }
  getDictionaryEntries(): { key: number; value: number }[] {
    return Object.keys(this.freqdist).map((key) => ({
      key: +key,
      value: this.freqdist[+key],
    }));
  }
  incrementFrequency(num: number): void {
    if (!this.freqdist[num]) {
      this.freqdist[num] = 0;
    }
    this.freqdist[num] += 1;
  }
}

class Roulette {
  private colors: string[];
  private selected!: string;

  constructor(colors: string[]) {
    this.colors = colors;
  }

  spin(): string {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    return this.colors[randomIndex];
  }
}
