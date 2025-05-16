import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RouterModule } from '@angular/router';
import { IngredientModule } from '../ingredient/ingredient.module';

@NgModule({
  declarations: [
    RecipeListComponent, 
    RecipeDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IngredientModule,
    RecipeListComponent
  ],
  exports: [
    RecipeListComponent,
    RecipeDetailComponent
  ]
})
export class RecipeModule { }
