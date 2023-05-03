import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsAdded = new EventEmitter<Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() { }

  addIngredient(ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsAdded.emit(this.ingredients);
  }

  addIngredients(toAdd: Ingredient[]) {
    this.ingredients.push(...toAdd);
    this.ingredientsAdded.emit(this.ingredients);
  }

  getIngredients() {
    return [...this.ingredients];
  }
}
