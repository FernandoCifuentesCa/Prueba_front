import { Component } from '@angular/core'
import articles from 'src/assets/json/JsonTest.json'

@Component(
    {
        selector: 'articles',
        templateUrl: './grid.component.html'
    }
)

export class Grid{
  articless: any = articles;
    constructor(){
        console.log("componente grid");
        
    }
}