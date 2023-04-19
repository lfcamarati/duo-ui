import {CommonModule} from '@angular/common'
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core'
import {ReactiveFormsModule} from '@angular/forms'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {PrimeNGModule} from '../prime-ng.module'
import {LoginComponent} from './components/login/login.component'
import {AuthService} from './services/auth.service'
import {AuthEffects} from './store/effects'
import {metaReducers, reducers} from './store/reducers'

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimeNGModule,
    StoreModule.forFeature('auth', reducers, {
      metaReducers,
    }),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [AuthService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule {}
