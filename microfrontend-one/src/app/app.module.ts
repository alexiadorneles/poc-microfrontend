import { NgModule, Injector, DoBootstrap } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AppRoutingModule } from './app-routing.module';
import { MicrofrontendOneComponent } from './microfrontend-one/microfrontend-one.component';
import { MealsComponent } from './meals/meals.component';
import { DessertsComponent } from './desserts/desserts.component';

@NgModule({
  declarations: [MicrofrontendOneComponent, MealsComponent, DessertsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
})
export class AppModule implements DoBootstrap {
  constructor(injector: Injector) {
    const element = createCustomElement(MicrofrontendOneComponent, {
      injector,
    });
    if (!customElements.get('app-microfrontend-one')) {
      console.log('app-microfrontend-one defining...');
      customElements.define('app-microfrontend-one', element);
    } else {
      console.log('app-microfrontend-one element already defined');
    }
  }

  ngDoBootstrap(): void {
    console.log('bootstrapping MFE1');
  }
}
