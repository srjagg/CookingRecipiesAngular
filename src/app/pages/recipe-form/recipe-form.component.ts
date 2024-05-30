import { Component, OnInit, inject } from '@angular/core';
import { RecipeService } from '../../Core/Services/recipe.service';

@Component({
  selector: 'app-recipe-form',
  standalone: true,
  imports: [],
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.css'
})
export class RecipeFormComponent implements OnInit{
  private recipieService = inject(RecipeService)

  ngOnInit(): void {
    this.onInit()
  }

  onInit() : void {
  } 
}
