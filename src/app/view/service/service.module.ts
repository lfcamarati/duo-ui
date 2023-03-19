import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceListComponent } from './service-list/service-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNGModule } from 'src/app/prime-ng.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ServiceCreateComponent } from './service-create/service-create.component';
import { SocialMediaManagementCreateComponent } from './social-media-management-create/social-media-management-create.component';

@NgModule({
  declarations: [
    ServiceListComponent,
    ServiceCreateComponent,
    SocialMediaManagementCreateComponent
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
  ]
})
export class ServiceModule { }
