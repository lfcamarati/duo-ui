import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AuthActions from 'src/app/auth/store/actions';
import { isLoggedSelector } from 'src/app/auth/store/selectors';
import { AppStateInterface } from 'src/app/types/appState.interface';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  isLogged$ = this.store.pipe(select(isLoggedSelector));
  // logoutSuccess$: Observable<boolean> = this.store.pipe(select(selectLogoutSuccess));

  constructor(
    private router: Router,
    private store: Store<AppStateInterface>,
  ) {}

  ngOnInit(): void {
    this.isLogged$.subscribe((isLogged) => {
      if (!isLogged) {
        this.router.navigate(['/login']);
      }
    })
  }

  logout() {
    this.store.dispatch(AuthActions.logout());
  }
}
