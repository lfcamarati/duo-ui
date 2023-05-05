import {CommonModule} from '@angular/common'
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {PrimeNGModule} from 'src/app/prime-ng.module'
import {ServiceCreateComponent} from './components/service-create/service-create.component'
import {ServiceListComponent} from './components/service-list/service-list.component'
import {ServiceRegisterComponent} from './components/service-register/service-register.component'
import {SocialMediaManagementCreateComponent} from './components/social-media-management-create/social-media-management-create.component'
import {ServiceRoutingModule} from './service-routing.module'
import {ServiceComponent} from './service.component'
import {ServiceService} from './services/service.service'

@NgModule({
  declarations: [
    ServiceComponent,
    ServiceListComponent,
    ServiceCreateComponent,
    SocialMediaManagementCreateComponent,
    ServiceRegisterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceRoutingModule,
    PrimeNGModule,
  ],
  providers: [ServiceService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ServiceModule {}
