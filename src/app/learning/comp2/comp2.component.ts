import { Component } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
})
export class Comp2Component {
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  typeValue: string = 'This is what i type';
  inputValue: string = '';

  onInputChange(event: any) {
    this.inputValue = event.target.value;
  }
  getColor(index: number): string {
    // Define your color logic based on the index
    if (index % 2 === 0) {
      return 'red';
    } else {
      return 'blue';
    }
  }
}
