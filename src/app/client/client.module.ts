import {CommonModule} from '@angular/common'
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core'
import {AppRoutingModule} from 'src/app/app-routing.module'
import {PrimeNGModule} from 'src/app/prime-ng.module'

import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {SharedModule} from '../shared/shared.module'
import {ClientCreateComponent} from './components/client-create/client-create.component'
import {ClientDetailsComponent} from './components/client-details/client-details.component'
import {ClientListComponent} from './components/client-list/client-list.component'
import {ClientService} from './services/client.service'
import {ClientEffects} from './store/effects'
import {reducers} from './store/reducers'

@NgModule({
  declarations: [
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
    SharedModule,
    StoreModule.forFeature('client', reducers),
    EffectsModule.forFeature([ClientEffects]),
  ],
  providers: [ClientService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ClientModule {}
