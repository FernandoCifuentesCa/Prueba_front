import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import articles from 'src/assets/json/JsonTest.json'

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  articless: any = articles;

  constructor(private _config:NgbCarouselConfig) { }

  ngOnInit(): void {
  }

}
