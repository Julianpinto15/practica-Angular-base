import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'Capitan';
  public age: number = 45;

  //Get es un metodo
  public get capitalizeName(): string {
    return 'Hello world'.toUpperCase();
  }

  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'capitan America';
  }

  changeAge(): void {
    this.age = 35;
  }

  resetForm(): void {
    this.name = 'linterna';
    this.age = 67;
  }
}
