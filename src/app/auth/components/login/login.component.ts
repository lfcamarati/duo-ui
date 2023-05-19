import {Component, OnDestroy, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {Router} from '@angular/router'
import {Store, select} from '@ngrx/store'
import {Observable, Subject, takeUntil} from 'rxjs'
import {MessagesService} from 'src/app/shared/messages/services/messages.service'
import {AppStateInterface} from 'src/app/shared/types/appState.interface'
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
  loginError$: Observable<string | null>

  private unsubscribe$ = new Subject<void>()

  constructor(
    private readonly store: Store<AppStateInterface>,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly messagesService: MessagesService
  ) {
    this.isLogged$ = this.store.pipe(select(isLoggedSelector))
    this.loginError$ = this.store.pipe(select(errorSelector))

    this.loginForm = this.formBuilder.nonNullable.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    })
  }

  ngOnInit(): void {
    this.isLogged$.pipe(takeUntil(this.unsubscribe$)).subscribe((isLogged) => {
      isLogged
        ? this.router.navigate(['home'])
        : this.router.navigate(['auth', 'login'])
    })

    this.loginError$.pipe(takeUntil(this.unsubscribe$)).subscribe((error) => {
      if (error) {
        this.messagesService.addError(error)
      }
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }

  login() {
    const userLogin: UserLogin = this.loginForm.value
    this.store.dispatch(AuthActions.login(userLogin))
  }
}
