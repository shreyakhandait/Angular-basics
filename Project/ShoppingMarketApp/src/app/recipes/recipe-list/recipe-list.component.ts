import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe',
     'This is simply a test',
     'https://hebbarskitchen.com/wp-content/uploads/2017/08/gol-gappe-recipe-puri-for-pani-puri-recipe-gol-gappay-puri-recipe-1-769x1024.jpeg'),
    
   new Recipe('A Fried Rice Recipe',
     'Fried Rice Reipe',
     'https://easychickenrecipes.com/wp-content/uploads/2019/05/homemade-chicken-fried-rice-recipe-6-of-7-1023x1200.jpg')
 
    
  
    ];
  constructor() { }

  ngOnInit(): void {
  }
  

}
