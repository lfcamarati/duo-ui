import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientPf } from '../domain/ClientPf';
import { Message } from '../domain/Message';
import { ResponseDataCollection } from '../infra/ResponseDataCollection';

@Injectable({
  providedIn: 'root'
})
export class ClientPfService {

  constructor(
    private http: HttpClient
  ) {}

  getById(id: number): Observable<ClientPf> {
    return this.http.get<ClientPf>(`http://localhost:8080/clients-pf/${id}`);
  }

  getAll(): Observable<ResponseDataCollection<ClientPf>> {
    return this.http.get<ResponseDataCollection<ClientPf>>('http://localhost:8080/clients-pf');
  }

  salvar(clientPf: ClientPf): Observable<Message> {
    return this.http.post<Message>('http://localhost:8080/clients-pf', clientPf);
  }

  update(clientPf: ClientPf): Observable<void> {
    return this.http.put<void>(`http://localhost:8080/clients-pf/${clientPf.id}`, clientPf);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/clients-pf/${id}`);
  }
}
