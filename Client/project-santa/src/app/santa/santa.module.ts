import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SantaRoutingModule } from './santa-routing.module';
import { SantaListComponent } from './santa-list/santa-list.component';

import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [SantaListComponent],
  imports: [
    CommonModule,
    SantaRoutingModule,
    MatGridListModule
  ],
})
export class SantaModule { }
