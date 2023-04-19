import {Component, OnInit} from '@angular/core'
import {delay, Observable} from 'rxjs'
import {OverlayService} from './shared/http/overlay.service'
import {Store, select} from '@ngrx/store'
import {isLoggedSelector} from './auth/store/selectors'
import {AppStateInterface} from './types/appState.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isLogged$: Observable<boolean>
  loading: boolean = false

  constructor(
    private store: Store<AppStateInterface>,
    private overlayService: OverlayService
  ) {
    this.isLogged$ = this.store.pipe(select(isLoggedSelector))
  }

  ngOnInit() {
    this.listenToLoading()
  }

  listenToLoading(): void {
    this.overlayService
      .watch()
      .pipe(delay(0))
      .subscribe((loading) => (this.loading = loading))
  }
}
