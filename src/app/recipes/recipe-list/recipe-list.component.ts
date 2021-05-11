import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeItemSelected=new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','https://live.staticflickr.com/8719/28332021793_883a1c6c0a_b.jpg'),
    new Recipe('Another Recipe','This is simply a test','https://live.staticflickr.com/8719/28332021793_883a1c6c0a_b.jpg')
  ];

  

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeItemSelected(item:Recipe){
        this.recipeItemSelected.emit(item);
  }

}
