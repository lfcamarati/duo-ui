import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";
import { Observable, tap } from "rxjs";

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(
    private messageService: MessageService,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap({
        error: (error) => {
          if (error.status === 0) {
            return this.messageService.add({severity: 'error', detail: "Ocorreu um erro inesperado!"})
          } else {
            return this.messageService.add({severity: 'error', detail: error.error.message})
          }
        }
      })
    );
  }
}