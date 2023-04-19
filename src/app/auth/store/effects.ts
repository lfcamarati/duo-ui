import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, exhaustMap, map, of} from 'rxjs'
import * as AuthActions from './actions'
import {TokenJwt} from '../types/tokenJwt.interface'
import {AuthService} from '../services/auth.service'

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthActions.login),
      exhaustMap((state) =>
        this.authService.login(state.userLogin).pipe(
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

  constructor(private action$: Actions, private authService: AuthService) {}
}
