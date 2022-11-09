import { Component, OnInit } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { OverlayService } from './infra/http/overlay.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLogged?: Observable<boolean>;
  loading: boolean = false

  constructor(
    private authService: AuthService,
    private overlayService: OverlayService
  ) {}

  ngOnInit() {
    this.isLogged = this.authService.logged();
    this.listenToLoading();
  }

  listenToLoading(): void {
    this.overlayService.watch()
      .pipe(delay(0))
      .subscribe((loading) => this.loading = loading);
  }
}
