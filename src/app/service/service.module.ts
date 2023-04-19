import {CommonModule} from '@angular/common'
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {AppRoutingModule} from 'src/app/app-routing.module'
import {PrimeNGModule} from 'src/app/prime-ng.module'
import {ServiceCreateComponent} from './components/service-create/service-create.component'
import {ServiceListComponent} from './components/service-list/service-list.component'
import {SocialMediaManagementCreateComponent} from './components/social-media-management-create/social-media-management-create.component'

@NgModule({
  declarations: [
    ServiceListComponent,
    ServiceCreateComponent,
    SocialMediaManagementCreateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    PrimeNGModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ServiceModule {}
