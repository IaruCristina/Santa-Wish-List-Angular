import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AppComponent } from './app.component';

import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/santa', pathMatch: 'full' }, // component: AppComponent
  { path: 'main-page', component: MainPageComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
    {
      preloadingStrategy: SelectivePreloadingStrategyService
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }