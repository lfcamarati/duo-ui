import {HttpClientModule} from '@angular/common/http'
import {
  CUSTOM_ELEMENTS_SCHEMA,
  DEFAULT_CURRENCY_CODE,
  NgModule,
} from '@angular/core'
import {ReactiveFormsModule} from '@angular/forms'
import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {environment} from '../environments/environment'
import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {AuthModule} from './auth/auth.module'
import {ClientModule} from './client/client.module'
import {HomeModule} from './home/home.module'
import {LayoutModule} from './layout/layout.module'
import {PrimeNGModule} from './prime-ng.module'
import {ServiceModule} from './service/service.module'
import {httpInterceptorProviders} from './shared/http/interceptors'

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
    }),
    PrimeNGModule,
    AppRoutingModule,
    LayoutModule,
    HomeModule,
    AuthModule,
    ClientModule,
    ServiceModule,
  ],
  providers: [
    httpInterceptorProviders,
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'},
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
