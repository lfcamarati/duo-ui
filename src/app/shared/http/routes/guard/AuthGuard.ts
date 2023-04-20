import {Injectable} from '@angular/core'
import {CanActivate, Router} from '@angular/router'
import {Store, select} from '@ngrx/store'
import {Observable, map} from 'rxjs'
import {isLoggedSelector} from 'src/app/auth/store/selectors'
import {AppStateInterface} from 'src/app/types/appState.interface'

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  isLogged$: Observable<boolean>

  constructor(private store: Store<AppStateInterface>, private router: Router) {
    this.isLogged$ = this.store.pipe(select(isLoggedSelector))
  }

  canActivate(): Observable<boolean> {
    return this.isLogged$.pipe(
      map((isLogged) => {
        if (isLogged) {
          return true
        }

        this.router.navigate(['login'])
        return false
      })
    )
  }
}
