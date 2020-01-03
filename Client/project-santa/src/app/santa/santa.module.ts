import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SantaRoutingModule } from './santa-routing.module';
import { SantaListComponent } from './santa-list/santa-list.component';
import { SantaPageComponent } from './santa-page/santa-page.component';
import { SantaGiftDialog } from './santa-list/santa-list.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [SantaListComponent, SantaPageComponent, SantaGiftDialog],
  imports: [
    CommonModule,
    SantaRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  entryComponents: [
    SantaGiftDialog
  ],
})
export class SantaModule { }
