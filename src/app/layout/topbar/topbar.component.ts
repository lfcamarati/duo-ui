import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { logout } from 'src/app/store/auth/auth.actions';
import { AuthState } from 'src/app/store/auth/auth.reducer';
import { selectIsLogged, selectLogoutSuccess } from 'src/app/store/auth/auth.selectors';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  isLogged$ = this.store.pipe(select(selectIsLogged));
  logoutSuccess$: Observable<boolean> = this.store.pipe(select(selectLogoutSuccess));

  constructor(
    // private authService: AuthService,
    private router: Router,
    private store: Store<AuthState>,
  ) {}

  ngOnInit(): void {
    this.isLogged$.subscribe((isLogged) => {
      if (!isLogged) {
        this.router.navigate(['/login']);
      }
    })
  }

  logout() {
    this.store.dispatch(logout());
    // this.authService.logout();
  }
}
