import {Component, OnDestroy, OnInit} from '@angular/core'
import {FormGroup, NonNullableFormBuilder, Validators} from '@angular/forms'
import {Router} from '@angular/router'
import {Store, select} from '@ngrx/store'
import {MessageService} from 'primeng/api'
import {Observable, Subscription} from 'rxjs'
import {AppStateInterface} from 'src/app/types/appState.interface'
import * as AuthActions from '../../store/actions'
import {errorSelector, isLoggedSelector} from '../../store/selectors'
import {UserLogin} from '../../types/userLogin.interface'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup

  isLogged$: Observable<boolean>
  isLoggedSubscription?: Subscription

  loginError$: Observable<string | null>
  loginErrorSubscription?: Subscription

  constructor(
    private readonly store: Store<AppStateInterface>,
    private readonly formBuilder: NonNullableFormBuilder,
    private readonly router: Router,
    private readonly messageService: MessageService
  ) {
    this.isLogged$ = this.store.pipe(select(isLoggedSelector))
    this.loginError$ = this.store.pipe(select(errorSelector))

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    })
  }

  ngOnInit(): void {
    this.isLoggedSubscription = this.isLogged$.subscribe((isLogged) => {
      isLogged
        ? this.router.navigate(['home'])
        : this.router.navigate(['login'])
    })

    this.loginErrorSubscription = this.loginError$.subscribe((error) => {
      if (error) {
        this.messageService.add({severity: 'error', detail: error!})
      }
    })
  }

  ngOnDestroy(): void {
    this.isLoggedSubscription?.unsubscribe()
    this.loginErrorSubscription?.unsubscribe()
  }

  login() {
    const userLogin: UserLogin = this.loginForm.value
    this.store.dispatch(AuthActions.login(userLogin))
  }
}
