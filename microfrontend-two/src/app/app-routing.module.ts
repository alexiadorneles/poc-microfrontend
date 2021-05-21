import { NgModule, Type } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AddressComponent } from './components/address/address.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';
import {
  AvailableRoutes,
  INTERNAL_ROUTES,
  ROUTER_OUTLET,
} from './routes/routes';

const ROUTE_TO_COMPONENT_MAP: { [key in AvailableRoutes]: Type<any> } = {
  address: AddressComponent,
  confirmation: ConfirmationComponent,
  'payment-method': PaymentMethodComponent,
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
