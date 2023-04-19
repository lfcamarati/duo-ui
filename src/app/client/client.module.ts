import {CommonModule} from '@angular/common'
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core'
import {AppRoutingModule} from 'src/app/app-routing.module'
import {PrimeNGModule} from 'src/app/prime-ng.module'

import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {CnpjPipe} from 'src/app/shared/pipe/cnpj.pipe'
import {CpfPipe} from 'src/app/shared/pipe/cpf.pipe'
import {CpfCnpjPipe} from 'src/app/shared/pipe/cpfCnpj.pipe'
import {PhonePipe} from 'src/app/shared/pipe/phone.pipe'
import {ClientCreateComponent} from './components/client-create/client-create.component'
import {ClientDetailsComponent} from './components/client-details/client-details.component'
import {ClientListComponent} from './components/client-list/client-list.component'
import {ClientService} from './services/client.service'
import {ClientEffects} from './store/effects'
import {reducers} from './store/reducers'

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
    PrimeNGModule,
    StoreModule.forFeature('client', reducers),
    EffectsModule.forFeature([ClientEffects]),
  ],
  providers: [ClientService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ClientModule {}
