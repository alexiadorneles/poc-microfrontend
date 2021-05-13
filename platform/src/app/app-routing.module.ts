import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MfeOneComponent } from './mfe-one/mfe-one.component';
import { MfeTwoComponent } from './mfe-two/mfe-two.component';
import { MicrofrontendContainerComponent } from './microfrontend-container/microfrontend-container.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  // {
  //   path: 'mfe/:id',
  //   component: MicrofrontendContainerComponent,
  // },
  {
    path: 'mfe/one',
    component: MfeOneComponent,
  },
  {
    path: 'mfe/two',
    component: MfeTwoComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
