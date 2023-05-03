import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  recipes = 'recipes';
  shoppingList = 'shoppingList';

  pageDisplayed: string = this.recipes; // default

  constructor() { }

  handleNavEvent(event: string) {
    this.pageDisplayed = event;
  }
}
