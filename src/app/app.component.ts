import { Component, OnInit } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { OverlayService } from './infra/http/overlay.service';
import { AuthService } from './services/auth.service';
import { Store, select } from '@ngrx/store';
import { selectIsLogged } from './store/auth/auth.selectors';
import { AuthState } from './store/auth/auth.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLogged$: Observable<boolean> = this.store.pipe(select(selectIsLogged));
  loading: boolean = false

  constructor(
    private store: Store<AuthState>,
    private overlayService: OverlayService,
  ) {}

  ngOnInit() {
    this.listenToLoading();
  }

  listenToLoading(): void {
    this.overlayService.watch()
      .pipe(delay(0))
      .subscribe((loading) => this.loading = loading);
  }
}
