import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Angular {{ counter }}</p>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter(1)">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `,
})
export class CounterComponent {
  public counter: number = 1;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter(counter: number): void {
    this.counter = 1;
  }
}
