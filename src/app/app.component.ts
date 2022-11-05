import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLogged?: Observable<boolean>;

  constructor(
    private authService: AuthService
  ) {
    this.isLogged = this.authService.logged();
  }
}
