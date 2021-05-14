import { NgModule, Type } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DessertsComponent } from './components/desserts/desserts.component';
import { MealsComponent } from './components/meals/meals.component';
import {
  AvailableRoutes,
  INTERNAL_ROUTES,
  ROUTER_OUTLET,
} from './routes/routes';

const ROUTE_TO_COMPONENT_MAP: { [key in AvailableRoutes]: Type<any> } = {
  meals: MealsComponent,
  desserts: DessertsComponent,
};

const routes: Routes = INTERNAL_ROUTES.map((route) => {
  return {
    path: route.id,
    outlet: ROUTER_OUTLET,
    component: ROUTE_TO_COMPONENT_MAP[route.id],
  };
});

@NgModule({
  imports: [RouterTestingModule.withRoutes(routes)],
  exports: [RouterTestingModule],
})
export class AppRoutingModule {}
