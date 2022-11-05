import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/domain/UserLogin';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm = new FormGroup({
    username: new FormControl<string|null>(null),
    password: new FormControl<string|null>(null)
  })

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    if (this.authService.getToken() != null) {
      this.router.navigate(['home']);
    }
  }

  login() {
    const userLogin: UserLogin = this.loginForm.value;

    this.authService.login(userLogin).subscribe({
      next: () => {
        this.router.navigateByUrl('/home')
      }
    })
  }
}
