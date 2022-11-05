import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResolveStart, Router } from '@angular/router';
import { BehaviorSubject, catchError, finalize, map, Observable, of, switchMap, take, tap, throwError } from 'rxjs';
import { TokenJwt } from '../domain/TokenJwt';
import { User } from '../domain/User';
import { UserLogin } from '../domain/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _statusLogged = new BehaviorSubject(false)

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  login(user: UserLogin) {
    return this.http.post<TokenJwt>('/auth', user).pipe(
      tap(res => {
        localStorage.setItem('token', res.token);
        this._statusLogged.next(true);
        this.router.navigate(['/dashboard']);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this._statusLogged.next(false);
    this.router.navigate(['/login']);
  }

  checkAccess(): Observable<void> {
    return this.http.get<void>('/auth').pipe(
      map(() => {
        this._statusLogged.next(true);
      }),
      catchError((error) => {
        this._statusLogged.next(false);
        return throwError(() => new Error(error))
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logged(): Observable<boolean> {
    return this._statusLogged.asObservable()
  }
}
