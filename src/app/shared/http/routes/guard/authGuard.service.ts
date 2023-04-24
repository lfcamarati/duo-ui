import {Injectable} from '@angular/core'
import {CanActivate, Router} from '@angular/router'
import {Store, select} from '@ngrx/store'
import {Observable, mergeMap, of} from 'rxjs'
import * as AuthActions from 'src/app/auth/store/actions'
import {isLoggedSelector} from 'src/app/auth/store/selectors'
import {AppStateInterface} from 'src/app/types/appState.interface'

@Injectable({providedIn: 'root'})
export class AuthGuardService implements CanActivate {
  isLogged$: Observable<boolean>

  constructor(private store: Store<AppStateInterface>, private router: Router) {
    this.isLogged$ = this.store.pipe(select(isLoggedSelector))
  }

  canActivate(): Observable<boolean> {
    this.store.dispatch(AuthActions.checkAccess())

    return this.isLogged$.pipe(
      mergeMap((isLogged) => {
        if (!isLogged) {
          this.router.navigate(['login'])
          return of(false)
        }

        return of(true)
      })
    )
  }
}
