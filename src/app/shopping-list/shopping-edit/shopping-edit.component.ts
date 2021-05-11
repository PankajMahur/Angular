import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/Ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('ingredientName') ingredient:ElementRef;
 @ViewChild('ingredientAmount') amount:ElementRef;
 @Output() addIngredient = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdd(){
    const name = this.ingredient.nativeElement.value;
    const amount = this.amount.nativeElement.value;
    const ingredient = new Ingredient(name, amount);
    this.addIngredient.emit(ingredient);
  } 

}
