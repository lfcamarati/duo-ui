import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable, exhaustMap, map, take } from "rxjs";
import { TokenJwt } from "src/app/domain/TokenJwt";
import { AuthService } from "src/app/services/auth.service";
import { AuthState } from "src/app/store/auth/auth.reducer";
import { tokenSelector } from "src/app/store/auth/auth.selectors";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private store: Store<AuthState>,
    // private authService: AuthService,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.pipe(select(tokenSelector)).pipe(
      take(1),
      exhaustMap((token) => {
        return this.process(req, next, token);
      })
    );
  }

  private process(req: HttpRequest<any>, next: HttpHandler, token?: string): Observable<HttpEvent<any>> {
    if (!token) {
      return next.handle(req);
    }

    const newReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });

    return next.handle(newReq);
  }
}