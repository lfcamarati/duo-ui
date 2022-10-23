import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientPj } from '../domain/ClientPj';
import { Message } from '../domain/Message';
import { ResponseDataCollection } from '../infra/ResponseDataCollection';

@Injectable({
  providedIn: 'root'
})
export class ClientPjService {

  constructor(
    private http: HttpClient
  ) {}

  getById(id: number): Observable<ClientPj> {
    return this.http.get<ClientPj>(`http://localhost:8080/clients-pj/${id}`);
  }

  getAll(): Observable<ResponseDataCollection<ClientPj>> {
    return this.http.get<ResponseDataCollection<ClientPj>>('http://localhost:8080/clients-pj');
  }

  salvar(clientPj: ClientPj): Observable<Message> {
    return this.http.post<Message>('http://localhost:8080/clients-pj', clientPj);
  }

  update(clientPj: ClientPj): Observable<void> {
    return this.http.put<void>(`http://localhost:8080/clients-pj/${clientPj.id}`, clientPj);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/clients-pj/${id}`);
  }
}
