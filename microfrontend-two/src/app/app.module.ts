import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MicrofrontendTwoComponent } from './components/microfrontend-two/microfrontend-two.component';
import { AddressComponent } from './components/address/address.component';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

@NgModule({
  declarations: [
    MicrofrontendTwoComponent,
    AddressComponent,
    PaymentMethodComponent,
    ConfirmationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
})
export class AppModule implements DoBootstrap {
  constructor(injector: Injector) {
    const element = createCustomElement(MicrofrontendTwoComponent, {
      injector,
    });
    if (!customElements.get('app-microfrontend-two')) {
      customElements.define('app-microfrontend-two', element);
    } else {
      console.log('app-microfrontend-two element already defined');
    }
  }

  ngDoBootstrap(): void {}
}
