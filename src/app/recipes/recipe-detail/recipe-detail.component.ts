import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipesComponent } from '../recipes.component';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe;
  recipeSub: Subscription;

  constructor(
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private recipeSvc: RecipesService
  ) {  }

  ngOnInit(): void {
    this.recipeSub = this.route.params.subscribe(params => {
      this.selectedRecipe = this.recipeSvc.selectRecipe(params['id']);
    })
  }

  ngOnDestroy(): void {
    this.recipeSub.unsubscribe();
  }

  addIngredientsToList() {
    this.shoppingListService.addIngredients(this.selectedRecipe.ingredients);
  }
}
