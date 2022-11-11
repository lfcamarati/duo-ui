import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { Observable, tap } from "rxjs";
import { AuthService } from "src/app/services/auth.service";

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private messageService: MessageService,
    private authService: AuthService,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap({
        error: (error) => {
          if (this.router.url === '/') {
            this.authService.logout();
          } else if (error.status === 401 && this.router.url !== '/login') {
            this.messageService.add({severity: 'error', detail: "Acesso negado!"});
            this.authService.logout();
          } else if (error.status === 0) {
            this.messageService.add({severity: 'error', detail: "Ocorreu um erro inesperado!"})
          } else {
            this.messageService.add({severity: 'error', detail: error.error.message})
          }
        }
      })
    );
  }
}