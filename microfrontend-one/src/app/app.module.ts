import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AuthBarComponent } from './components/auth-bar/auth-bar.component';
import { DessertsComponent } from './components/desserts/desserts.component';
import { MealsComponent } from './components/meals/meals.component';
import { MicrofrontendOneComponent } from './components/microfrontend-one/microfrontend-one.component';
import { SESSION_QUERY_INJECTOR } from './injectors/query.injector';
import { SESSION_STORE_INJECTOR } from './injectors/store.injector';

@NgModule({
  declarations: [
    MicrofrontendOneComponent,
    MealsComponent,
    DessertsComponent,
    AuthBarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: SESSION_STORE_INJECTOR,
      useValue: (window as any).$$stores.session,
    },
    {
      provide: SESSION_QUERY_INJECTOR,
      useValue: (window as any).$$queries.session,
    },
  ],
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
