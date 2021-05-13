import { NgModule, Injector, DoBootstrap } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AppRoutingModule } from './app-routing.module';
import { MicrofrontendOneComponent } from './microfrontend-one/microfrontend-one.component';

@NgModule({
  declarations: [MicrofrontendOneComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
})
export class AppModule implements DoBootstrap {
  constructor(injector: Injector) {
    const element = createCustomElement(MicrofrontendOneComponent, {
      injector,
    });
    if (!customElements.get('app-microfrontend-one')) {
      customElements.define('app-microfrontend-one', element);
    }
  }

  ngDoBootstrap(): void {}
}
