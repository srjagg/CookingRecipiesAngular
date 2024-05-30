import { Component, OnInit, inject, Pipe, PipeTransform } from '@angular/core';
import { RecipeService } from '../../Core/Services/recipe.service';
import { Recipe, RecipesResponse } from '../../util/models/Recipies';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{

  private recipieService = inject(RecipeService)

  recipes: Recipe[] = [];

  ngOnInit(): void {
    this.onInit()
  }

  onInit() : void {
    this.recipieService.getAllRecipes().subscribe((recipiesResponse: RecipesResponse) =>{
      console.log(recipiesResponse);
      this.recipes = recipiesResponse.recipes;
    })
  } 

}
