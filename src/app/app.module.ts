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

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
