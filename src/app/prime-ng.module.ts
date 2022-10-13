import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

const modules = [
  CommonModule,
  ButtonModule,
  CardModule,
  TableModule,
]

@NgModule({
  imports: modules,
  exports: modules
})
export class PrimeNGModule { }
