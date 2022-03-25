import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//primeNg
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
// import {MenuItem} from 'primeng/api';


@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
  ],
  imports: [
    CommonModule,
  ]
})
export class PrimeNgModule { }
