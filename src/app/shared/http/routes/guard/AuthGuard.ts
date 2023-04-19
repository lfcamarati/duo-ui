import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { catchError, map, Observable, of } from "rxjs";
import { AuthService } from "src/app/auth/services/auth.service";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
  ) {}

  canActivate(): Observable<boolean> {
    return this.authService.checkAccess().pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }
}