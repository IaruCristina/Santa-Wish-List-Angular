import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SantaListComponent } from './santa-list/santa-list.component';

const santaRoutes: Routes = [
  { path: 'santa', component: SantaListComponent }
  // { path: 'santa/:id', component: TODO }
];

@NgModule({
  imports: [RouterModule.forChild(santaRoutes)],
  exports: [RouterModule]
})
export class SantaRoutingModule { }
