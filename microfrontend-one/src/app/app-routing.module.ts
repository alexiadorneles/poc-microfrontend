import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DessertsComponent } from './components/desserts/desserts.component';
import { MealsComponent } from './components/meals/meals.component';

const routes: Routes = [
  {
    path: 'meals',
    component: MealsComponent,
    outlet: 'mfe1',
  },
  {
    path: 'desserts',
    component: DessertsComponent,
    outlet: 'mfe1',
  },
];

@NgModule({
  imports: [RouterTestingModule.withRoutes(routes)],
  exports: [RouterTestingModule],
})
export class AppRoutingModule {}
