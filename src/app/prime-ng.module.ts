import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    TableModule,
  ],
})
export class PrimeNGModule { }
