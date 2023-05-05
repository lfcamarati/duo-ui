import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {Service} from '../../service/types/service.interface'
import {ListResponse} from '../../shared/types/listResponse.interface'
import {Message} from '../domain/Message'
import {SocialMediaManagement} from '../domain/SocialMediaManagement'

@Injectable({
  providedIn: 'root',
})
export class SocialMediaManagementService {
  constructor(private http: HttpClient) {}

  getById(id: number): Observable<SocialMediaManagement> {
    return this.http.get<Service>(`/social-media-management/${id}`)
  }

  getAll(): Observable<ListResponse<SocialMediaManagement>> {
    return this.http.get<ListResponse<Service>>('/services')
  }

  save(service: Service): Observable<Message> {
    return this.http.post<Message>('/social-media-management', service)
  }

  update(service: SocialMediaManagement): Observable<void> {
    return this.http.put<void>(
      `/social-media-management/${service.id}`,
      service
    )
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`/social-media-management/${id}`)
  }
}
