import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list/client-list.component';
import { PrimeNGModule } from 'src/app/prime-ng.module';
import { ClientCreateComponent } from './client-create/client-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientpfCreateComponent } from './clientpf/clientpf-create/clientpf-create.component';
import { ClientpjCreateComponent } from './clientpj/clientpj-create/clientpj-create.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ClientEditComponent } from './client-edit/client-edit.component';

@NgModule({
  declarations: [
    ClientListComponent,
    ClientCreateComponent,
    ClientpfCreateComponent,
    ClientpjCreateComponent,
    ClientEditComponent
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
