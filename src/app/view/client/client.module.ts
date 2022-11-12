import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNGModule } from 'src/app/prime-ng.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { ClientListComponent } from './client-list/client-list.component';
import { ClientCreateComponent } from './client-create/client-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientpfCreateComponent } from './clientpf/clientpf-create/clientpf-create.component';
import { ClientpjCreateComponent } from './clientpj/clientpj-create/clientpj-create.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientpfDetailsComponent } from './clientpf/clientpf-details/clientpf-details.component';
import { ClientpjDetailsComponent } from './clientpj/clientpj-details/clientpj-details.component';
import { CnpjPipe } from 'src/app/infra/pipe/cnpj.pipe';
import { CpfPipe } from 'src/app/infra/pipe/cpf.pipe';
import { PhonePipe } from 'src/app/infra/pipe/phone.pipe';
import { ClientContractsListComponent } from './client-contracts-list/client-contracts-list.component';

@NgModule({
  declarations: [
    CnpjPipe,
    CpfPipe,
    PhonePipe,
    ClientListComponent,
    ClientCreateComponent,
    ClientpfCreateComponent,
    ClientpjCreateComponent,
    ClientEditComponent,
    ClientDetailsComponent,
    ClientpfDetailsComponent,
    ClientpjDetailsComponent,
    ClientContractsListComponent
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
