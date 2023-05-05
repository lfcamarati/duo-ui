import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {User} from '../types/user.interface'

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getCurrent(): Observable<User> {
    return this.http.get<User>('/users/current')
  }
}
