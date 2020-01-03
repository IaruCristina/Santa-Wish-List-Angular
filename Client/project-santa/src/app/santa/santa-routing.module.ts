import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SantaListComponent } from './santa-list/santa-list.component';
import { SantaPageComponent } from './santa-page/santa-page.component';

const santaRoutes: Routes = [
  { path: 'santa', component: SantaListComponent },
  { path: 'santa/:id', component: SantaPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(santaRoutes)],
  exports: [RouterModule]
})
export class SantaRoutingModule { }
