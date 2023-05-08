import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { NgModule } from "@angular/core";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipesEmptyComponent } from "./recipes/recipes-empty/recipes-empty.component";

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: 'recipes' , component: RecipesComponent, children: [
    { path: '', component: RecipesEmptyComponent, pathMatch: 'full'},
    { path: ':id', component: RecipeDetailComponent}
  ]},
  { path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
