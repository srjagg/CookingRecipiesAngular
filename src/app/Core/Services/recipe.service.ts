import { Injectable, inject } from '@angular/core';
import { RecipesResponse } from '../../util/models/Recipies';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private http = inject(HttpClient)
  //constructor(private http: HttpClient) { }

  private uri = 'https://dummyjson.com/recipes';

  recipesResponse : RecipesResponse [] = []

  getAllRecipes(): Observable<RecipesResponse>{
    return this.http.get<RecipesResponse>(this.uri);
  }

  /*private recipesSubject: BehaviorSubject<RecipesResponse[]> = new BehaviorSubject<RecipesResponse[]>(this.recipesResponse)
  getAllRecipies(): Observable<RecipesResponse[]>{
    return this.recipesSubject.asObservable();
  }*/
}
