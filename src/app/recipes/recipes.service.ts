import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [
      new Ingredient('cheese', 1),
      new Ingredient('bread', 2)
    ]),
    new Recipe('A Test Recipe 2', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [
      new Ingredient('butter', 1),
      new Ingredient('sugar', 3)
    ])
  ];


  constructor() { }

  getRecipes() {
    return [...this.recipes];
  }

  selectRecipe(index: number) {
    return this.recipes[index];
  }


}
