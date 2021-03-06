import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AddressComponent } from './components/address/address.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';

const routes: Routes = [
  {
    path: 'address',
    component: AddressComponent,
    outlet: 'mfe2',
  },
  {
    path: 'payment-method',
    component: PaymentMethodComponent,
    outlet: 'mfe2',
  },
  {
    path: 'confirmation',
    component: ConfirmationComponent,
    outlet: 'mfe2',
  },
];

@NgModule({
  imports: [RouterTestingModule.withRoutes(routes)],
  exports: [RouterTestingModule],
})
export class AppRoutingModule {}
