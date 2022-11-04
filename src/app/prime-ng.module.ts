import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputMaskModule } from 'primeng/inputmask';
import { ToastModule } from 'primeng/toast';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TabViewModule } from 'primeng/tabview';

const modules = [
  CommonModule,
  ButtonModule,
  CardModule,
  TableModule,
  InputTextModule,
  DividerModule,
  SelectButtonModule,
  InputMaskModule,
  ToastModule,
  InputNumberModule,
  InputTextareaModule,
  TabViewModule
]

@NgModule({
  imports: modules,
  exports: modules
})
export class PrimeNGModule { }
