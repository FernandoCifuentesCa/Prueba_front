import { Component, OnInit } from '@angular/core';
import articles from 'src/assets/json/JsonTest.json'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {


  constructor() { }
  articless: any = articles;
  filterPost ='';

  ngOnInit(): void {
  }

}

