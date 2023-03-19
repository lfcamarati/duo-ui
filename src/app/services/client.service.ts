import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../domain/Client';
import { Message } from '../domain/Message';
import { ResponseDataCollection } from '../infra/ResponseDataCollection';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<ResponseDataCollection<Client>> {
    return this.http.get<ResponseDataCollection<Client>>('/clients');
  }

  getById(id: number): Observable<Client> {
    return this.http.get<Client>(`/clients/${id}`)
  }
  
  salvar(client: Client): Observable<Message> {
    return this.http.post<Message>('/clients', client);
  }

  update(client: Client): Observable<void> {
    return this.http.put<void>(`/clients/${client.id}`, client);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`/clients/${id}`);
  }
}
