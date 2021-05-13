import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MfeOneComponent } from './mfe-one/mfe-one.component';
import { MfeTwoComponent } from './mfe-two/mfe-two.component';
import { MicrofrontendContainerComponent } from './microfrontend-container/microfrontend-container.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    NotFoundComponent,
    MicrofrontendContainerComponent,
    MfeOneComponent,
    MfeTwoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
