import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MicrofrontendTwoComponent } from './microfrontend-two/microfrontend-two.component';

@NgModule({
  declarations: [MicrofrontendTwoComponent],
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
    }
  }

  ngDoBootstrap(): void {}
}
