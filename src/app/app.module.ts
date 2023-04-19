import {HttpClientModule} from '@angular/common/http'
import {
  CUSTOM_ELEMENTS_SCHEMA,
  DEFAULT_CURRENCY_CODE,
  NgModule,
} from '@angular/core'
import {ReactiveFormsModule} from '@angular/forms'
import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {httpInterceptorProviders} from './shared/http/interceptors'

// Route
import {AppRoutingModule} from './app-routing.module'

// Modules
import {AuthModule} from './auth/auth.module'
import {ClientModule} from './client/client.module'
import {HomeModule} from './home/home.module'
import {LayoutModule} from './layout/layout.module'
import {PrimeNGModule} from './prime-ng.module'
import {ServiceModule} from './service/service.module'

// Pages
import {AppComponent} from './app.component'

// Services
import {MessageService} from 'primeng/api'

// Store
import {StoreModule} from '@ngrx/store'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'

// Effects
import {EffectsModule} from '@ngrx/effects'

// Env
import {environment} from '../environments/environment'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    AppRoutingModule,
    PrimeNGModule,
    AuthModule,
    LayoutModule,
    HomeModule,
    ClientModule,
    ServiceModule,
  ],
  providers: [
    httpInterceptorProviders,
    MessageService,
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'},
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
