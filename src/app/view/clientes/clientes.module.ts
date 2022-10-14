import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { PrimeNGModule } from 'src/app/prime-ng.module';
import { ClientesCreateComponent } from './clientes-create/clientes-create.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    ClientesListComponent,
    ClientesCreateComponent
  ],
  imports: [
    CommonModule,
    PrimeNGModule,
  ]
})
export class ClientesModule { }
