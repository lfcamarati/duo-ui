import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, exhaustMap, map, of} from 'rxjs'
import {AuthService} from '../services/auth.service'
import {TokenJwt} from '../types/tokenJwt.interface'
import * as AuthActions from './actions'

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.login),
      exhaustMap((action) =>
        this.authService.login(action.userLogin).pipe(
          map((tokenJwt: TokenJwt) => AuthActions.loginSuccess(tokenJwt.token)),
          catchError((error) =>
            of(AuthActions.loginFailure(error.error.message))
          )
        )
      )
    )
  )

  logout$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.logout),
      exhaustMap(() => of(AuthActions.logoutSuccess()))
    )
  )

  checkAccess$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.checkAccess),
      exhaustMap(() =>
        this.authService.checkAccess().pipe(
          map(() => AuthActions.checkAccessSuccess()),
          catchError(() => of(AuthActions.checkAccessFailure()))
        )
      )
    )
  )

  constructor(private action$: Actions, private authService: AuthService) {}
}
