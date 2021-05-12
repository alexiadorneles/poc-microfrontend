import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MicrofrontendOneComponent } from './microfrontend-one/microfrontend-one.component';

@NgModule({
  declarations: [MicrofrontendOneComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [MicrofrontendOneComponent],
})
export class AppModule {}
