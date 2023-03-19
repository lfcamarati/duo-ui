import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNGModule } from 'src/app/prime-ng.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { ClientListComponent } from './client-list/client-list.component';
import { ClientCreateComponent } from './client-create/client-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { CnpjPipe } from 'src/app/infra/pipe/cnpj.pipe';
import { CpfPipe } from 'src/app/infra/pipe/cpf.pipe';
import { PhonePipe } from 'src/app/infra/pipe/phone.pipe';
import { CpfCnpjPipe } from 'src/app/infra/pipe/cpfCnpj.pipe';

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
