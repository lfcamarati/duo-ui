import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

const modules = [
  CommonModule,
  ButtonModule,
  CardModule,
  TableModule,
  InputTextModule,
]

@NgModule({
  imports: modules,
  exports: modules
})
export class PrimeNGModule { }
