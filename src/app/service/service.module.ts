import {CommonModule} from '@angular/common'
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {PrimeNGModule} from 'src/app/prime-ng.module'
import {ServiceCreateComponent} from './components/service-create/service-create.component'
import {ServiceListComponent} from './components/service-list/service-list.component'
import {ServiceRegisterComponent} from './components/service-register/service-register.component'
import {ServiceRoutingModule} from './service-routing.module'
import {ServiceComponent} from './service.component'
import {ServiceService} from './services/service.service'
import {ServiceEffects} from './store/effects'
import {reducers} from './store/reducers'

@NgModule({
  declarations: [
    ServiceComponent,
    ServiceListComponent,
    ServiceCreateComponent,
    ServiceRegisterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceRoutingModule,
    PrimeNGModule,
    StoreModule.forFeature('service', reducers),
    EffectsModule.forFeature([ServiceEffects]),
  ],
  providers: [ServiceService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ServiceModule {}
