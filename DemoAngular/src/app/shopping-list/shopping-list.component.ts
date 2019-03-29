import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  inredients: Ingredient[]=[
    new Ingredient('Apples',5,'hihi'),
    new Ingredient('Tomatoes',10,'hoho'),
    new Ingredient('Hehe',15,'haha'),
  ];

  constructor() { }

  ngOnInit() {
    
  }

}
