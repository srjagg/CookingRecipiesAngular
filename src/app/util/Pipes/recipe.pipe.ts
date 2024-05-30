import { Pipe, PipeTransform } from '@angular/core';
import { Recipe, RecipesResponse } from '../models/Recipies';

@Pipe({
  name: 'recipe',
  standalone: true
})
export class RecipePipe implements PipeTransform {

  transform(recipe: Recipe[], prepTime: number): Recipe[] {
    return prepTime == 0 ? recipe 
      : recipe.filter(p => p.prepTimeMinutes == prepTime)
  }

}
