import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {Message} from '../../core/domain/Message'
import {ListResponseInterface} from '../../shared/types/listResponse.interface'
import {Service} from '../types/service.interface'
import {ServiceClient} from '../types/serviceClient.interface'

@Injectable()
export class ServiceService {
  constructor(private http: HttpClient) {}

  getById(id: number): Observable<Service> {
    return this.http.get<Service>(`/services/${id}`)
  }

  getAll(): Observable<ListResponseInterface<Service>> {
    return this.http.get<ListResponseInterface<Service>>('/services')
  }

  save(service: Service): Observable<Message> {
    return this.http.post<Message>('/services', service)
  }

  update(service: Service): Observable<void> {
    return this.http.put<void>(`/services/${service.id}`, service)
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`/services/${id}`)
  }

  register(serviceClient: ServiceClient): Observable<void> {
    return this.http.post<void>('/services-client', serviceClient)
  }
}
