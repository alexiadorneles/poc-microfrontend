import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MicrofrontendRootComponent } from './microfrontend-root/microfrontend-root.component';

@NgModule({
  declarations: [MicrofrontendRootComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [MicrofrontendRootComponent],
})
export class AppModule {}
