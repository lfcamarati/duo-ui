import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {Message} from '../../core/domain/Message'
import {ListResponse} from '../../shared/types/listResponse.interface'
import {Client} from '../types/client.interface'

@Injectable()
export class ClientService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<ListResponse<Client>> {
    return this.http.get<ListResponse<Client>>('/clients')
  }

  getById(id: number): Observable<Client> {
    return this.http.get<Client>(`/clients/${id}`)
  }

  salvar(client: Client): Observable<Message> {
    return this.http.post<Message>('/clients', client)
  }

  update(client: Client): Observable<void> {
    return this.http.put<void>(`/clients/${client.id}`, client)
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`/clients/${id}`)
  }
}
