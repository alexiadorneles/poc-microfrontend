import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MicrofrontendContainerComponent } from './components/microfrontend-container/microfrontend-container.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'mfe/:id',
    component: MicrofrontendContainerComponent,
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
