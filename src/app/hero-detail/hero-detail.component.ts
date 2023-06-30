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

  constructor() {
    this.author = 'Salamo';
    // Example usage
    this.roulette = new Roulette(['Red', 'Black']);

    this.selected = this.roulette.spin();

    this.sameColorCounter += 1;
    this.showText = `${this.selected}(${this.sameColorCounter})`;
    //console.log(`Random Output: ${randomOutput}`);
  }
  spin() {
    const newSelected = this.roulette.spin();
    if (this.selected == newSelected) {
      this.sameColorCounter += 1;
    } else {
      this.selected = newSelected;
      this.sameColorCounter = 1;
    }

    this.showText = `${this.selected}(${this.sameColorCounter})`;
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
