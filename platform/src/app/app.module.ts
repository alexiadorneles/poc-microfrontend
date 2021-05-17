import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { registerEvents } from './events/event.registry';
import { HeaderComponent } from './header/header.component';
import { MicrofrontendContainerComponent } from './microfrontend-container/microfrontend-container.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';

registerEvents();

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    NotFoundComponent,
<<<<<<< HEAD
    MicrofrontendContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
=======
    MicrofrontendContainerComponent,
>>>>>>> feat: add working version with RXJS.
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
