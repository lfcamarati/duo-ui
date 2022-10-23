import { CUSTOM_ELEMENTS_SCHEMA, DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceListComponent } from './service-list/service-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNGModule } from 'src/app/prime-ng.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ServiceCreateComponent } from './service-create/service-create.component';

@NgModule({
  declarations: [
    ServiceListComponent,
    ServiceCreateComponent
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
  providers: [
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'}
  ]
})
export class ServiceModule { }
