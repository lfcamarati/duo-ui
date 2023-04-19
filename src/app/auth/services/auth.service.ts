import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {TokenJwt} from '../types/tokenJwt.interface'
import {UserLogin} from '../types/userLogin.interface'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login(user: UserLogin): Observable<TokenJwt> {
    return this.http.post<TokenJwt>('/auth', user)
  }

  checkAccess(): Observable<void> {
    return this.http.get<void>('/auth')
  }
}
