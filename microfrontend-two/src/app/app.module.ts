import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MicrofrontendTwoComponent } from './microfrontend-two/microfrontend-two.component';

@NgModule({
  declarations: [MicrofrontendTwoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [MicrofrontendTwoComponent],
})
export class AppModule {}
