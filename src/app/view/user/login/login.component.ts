import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserLogin } from 'src/app/domain/UserLogin';
import { login } from 'src/app/store/auth/auth.actions';
import { AuthState } from 'src/app/store/auth/auth.reducer';
import { selectIsLogged, selectLogoutSuccess } from 'src/app/store/auth/auth.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged$: Observable<boolean> = this.store.pipe(select(selectIsLogged));

  loginForm = new FormGroup({
    username: new FormControl<string|null>(null),
    password: new FormControl<string|null>(null)
  })

  constructor(
    private router: Router,
    private store: Store<{ auth: AuthState }>,
  ) {}
  
  ngOnInit(): void {
    this.isLogged$.subscribe((isLogged) => {
      isLogged
      ? this.router.navigateByUrl('/home')
      : this.router.navigateByUrl('/login')
    });
  }

  login() {
    const userLogin: UserLogin = this.loginForm.value;
    this.store.dispatch(login(userLogin));
  }
}
