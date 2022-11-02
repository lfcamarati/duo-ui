import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BackendUrlInterceptor } from './BackendUrlInterceptor';
import { ErrorHandlerInterceptor } from './ErrorHandlerInterceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: BackendUrlInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true },
];