import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlideComponent } from './components/slide/slide.component';
import { Grid } from './components/grid/grid.component';
import { FilterComponent } from './components/filter/filter.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path: 'home',component: SlideComponent},
  {path: 'products', component:Grid},
  {path:'enterprise',component:FilterComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
