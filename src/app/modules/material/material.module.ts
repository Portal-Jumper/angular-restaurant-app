import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

const MATERIAL_MODULES: any = [
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule
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
