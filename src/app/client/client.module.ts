import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNGModule } from 'src/app/prime-ng.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { ClientListComponent } from './client-list/client-list.component';
import { ClientCreateComponent } from './client-create/client-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { CnpjPipe } from 'src/app/shared/pipe/cnpj.pipe';
import { CpfPipe } from 'src/app/shared/pipe/cpf.pipe';
import { PhonePipe } from 'src/app/shared/pipe/phone.pipe';
import { CpfCnpjPipe } from 'src/app/shared/pipe/cpfCnpj.pipe';

@NgModule({
  declarations: [
    CnpjPipe,
    CpfPipe,
    CpfCnpjPipe,
    PhonePipe,
    ClientListComponent,
    ClientCreateComponent,
    ClientDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    PrimeNGModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ClientModule { }
