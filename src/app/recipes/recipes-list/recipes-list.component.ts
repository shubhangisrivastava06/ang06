import { Component, OnInit } from '@angular/core';
import { recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: recipe[] = [
    new recipe('test','test recipe','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new recipe('test','test recipe','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new recipe('test','test recipe','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
