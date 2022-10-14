import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { PrimeNGModule } from 'src/app/prime-ng.module';
import { ClientesNewComponent } from './clientes-new/clientes-new.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ClientesListComponent,
    ClientesNewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimeNGModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ClientesModule { }
