import { CUSTOM_ELEMENTS_SCHEMA, DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { PrimeNGModule } from './prime-ng.module';

// Modules
import { ClientModule } from './view/client/client.module';

// Views
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { MessageService } from 'primeng/api';
import { ServiceModule } from './view/service/service.module';
import { httpInterceptorProviders } from './infra/http/interceptors';
import { LoginComponent } from './view/user/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './layout/pages/not-found/not-found.component';

// Store
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Reducers
import { reducers } from './store/reducers';

// Effects
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth/auth.effects';

// Env
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    LoginComponent,
    DashboardComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      AuthEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    AppRoutingModule,
    PrimeNGModule,
    ClientModule,
    ServiceModule
  ],
  providers: [
    httpInterceptorProviders,
    MessageService,
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
