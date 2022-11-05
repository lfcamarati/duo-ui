import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  isLogged?: Observable<boolean>;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.isLogged = this.authService.logged();
  }

  logout() {
    this.authService.logout();
  }
}
