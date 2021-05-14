import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DessertsComponent } from './desserts/desserts.component';
import { MealsComponent } from './meals/meals.component';
import { MicrofrontendOneComponent } from './microfrontend-one/microfrontend-one.component';
import { RouterTestingModule } from '@angular/router/testing';

const routes: Routes = [
  {
    path: '',
    component: MicrofrontendOneComponent,
    children: [
      {
        path: 'meals',
        component: MealsComponent,
        outlet: 'mfe1'
      },
      {
        path: 'desserts',
        component: DessertsComponent,
        outlet: 'mfe1'
      }
    ]
  }
  // {
  //   path: 'meals',
  //   component: MealsComponent
  // },
  // {
  //   path: 'desserts',
  //   component: DessertsComponent
  // }
];

@NgModule({
  imports: [RouterTestingModule.withRoutes(routes)],
  exports: [RouterTestingModule],
})
export class AppRoutingModule {}
