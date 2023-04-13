import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, catchError, exhaustMap, map, of } from "rxjs";
import { TokenJwt } from "src/app/domain/TokenJwt";
import { AuthService } from "src/app/services/auth.service";
import { login, loginSuccess, logout, logoutSuccess } from "./auth.actions";
import { UserLogin } from "src/app/domain/UserLogin";

@Injectable()
export class AuthEffects {

  constructor(
    private action$: Actions,
    private authService: AuthService,
  ) {}

  login$ = createEffect(() =>
    this.action$.pipe(
      ofType(login),
      exhaustMap((state) => 
        this.authService.login(state.user).pipe(
          map((token: TokenJwt) => loginSuccess(token)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.action$.pipe(
      ofType(logout),
      exhaustMap(() => of(logoutSuccess()))
    )
  );
}
