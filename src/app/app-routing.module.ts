import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Comp1Component } from './learning/comp1/comp1.component';
import { Comp2Component } from './learning/comp2/comp2.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'comp1', component: Comp1Component },
  { path: 'comp2', component: Comp2Component },
  { path: 'hero', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
