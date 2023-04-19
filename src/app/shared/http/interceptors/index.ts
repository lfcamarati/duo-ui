import {HTTP_INTERCEPTORS} from '@angular/common/http'
import {AuthInterceptor} from './AuthInterceptor'
import {BackendUrlInterceptor} from './BackendUrlInterceptor'
import {ErrorHandlerInterceptor} from './ErrorHandlerInterceptor'
import {OverlayInterceptor} from './OverlayInterceptor'

export const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: OverlayInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: BackendUrlInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true},
]
