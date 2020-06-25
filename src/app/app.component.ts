import { Component } from '@angular/core';
import articles from 'src/assets/json/JsonTest.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articless: any = articles;
}
