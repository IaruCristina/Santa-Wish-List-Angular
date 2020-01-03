import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'main-page', component: MainPageComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }