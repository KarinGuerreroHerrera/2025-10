import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './Recipe';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private baseUrl = 'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2025-10%20Recetas/recipe.json';

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.baseUrl);
  }

  getRecipeById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2025-10%20Recetas/${id}/recipe.json`);
  }
}





