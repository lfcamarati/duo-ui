import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Store, select} from '@ngrx/store'
import {Observable, exhaustMap, take} from 'rxjs'
import {tokenSelector} from 'src/app/auth/store/selectors'
import {AppStateInterface} from 'src/app/types/appState.interface'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  token$: Observable<string | null>

  constructor(private store: Store<AppStateInterface>) {
    this.token$ = this.store.pipe(select(tokenSelector))
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.token$.pipe(
      take(1),
      exhaustMap((token) => {
        if (!token) {
          return next.handle(req)
        }

        const newReq = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${token}`),
        })

        return next.handle(newReq)
      })
    )
  }
}
