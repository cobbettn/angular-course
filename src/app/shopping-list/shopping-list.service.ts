import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsAdded = new Subject<Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() { }

  addIngredient(ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsAdded.next(this.ingredients);
  }

  addIngredients(toAdd: Ingredient[]) {
    this.ingredients.push(...toAdd);
    this.ingredientsAdded.next(this.ingredients);
  }

  getIngredients() {
    return [...this.ingredients];
  }
}
