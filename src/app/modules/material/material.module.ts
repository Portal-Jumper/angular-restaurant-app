import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

const MATERIAL_MODULES: any = [
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
];

@NgModule({
  exports: [
    MATERIAL_MODULES
  ],
  imports: [
    MATERIAL_MODULES
  ]
})
export class MaterialModule { }
