import {
  CUSTOM_ELEMENTS_SCHEMA,
  DEFAULT_CURRENCY_CODE,
  NgModule,
} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {HttpClientModule} from '@angular/common/http'

import {AppRoutingModule} from './app-routing.module'
import {PrimeNGModule} from './prime-ng.module'

// Modules
import {ClientModule} from './client/client.module'

// Pages
import {AppComponent} from './app.component'
import {SidebarComponent} from './shared/layout/sidebar/sidebar.component'
import {TopbarComponent} from './shared/layout/topbar/topbar.component'
import {DashboardComponent} from './home/dashboard/dashboard.component'
import {MessageService} from 'primeng/api'
import {ServiceModule} from './service/service.module'
import {httpInterceptorProviders} from './shared/http/interceptors'
import {ReactiveFormsModule} from '@angular/forms'
import {NotFoundComponent} from './shared/layout/pages/not-found/not-found.component'

// Store
import {StoreModule} from '@ngrx/store'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'

// Effects
import {EffectsModule} from '@ngrx/effects'

// Env
import {environment} from '../environments/environment'
import {AuthModule} from './auth/auth.module'

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    DashboardComponent,
    NotFoundComponent,
  ],
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
