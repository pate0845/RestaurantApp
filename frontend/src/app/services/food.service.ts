import { Injectable } from '@angular/core';
import { sample_foods, sample_Tags } from '../data';
import { Food } from '../shared/models/Food';
import { Tag } from '../shared/models/Tags';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return sample_foods;
  }

  getAllFoodBySearchTerm(searchTerm:string){
    return this.getAll().filter(food=>food.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  }

  getAllTags():Tag[]{
    return sample_Tags;
  }

  getAllFoodByTag(tag:string):Food[]{
    return tag==='All'?this.getAll():this.getAll().filter(food=>food.tags?.includes(tag));
  }

  getFoodById(foodId:string):Food{
    return this.getAll().find(food=>food.id == foodId)??new Food();
  }
}
