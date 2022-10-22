import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientPf } from '../domain/ClientPf';
import { ClientPj } from '../domain/ClientPj';
import { CreateClient } from '../domain/CreateClient';
import { Message } from '../domain/Message';
import { ResponseDataCollection } from '../infra/ResponseDataCollection';

@Injectable({
  providedIn: 'root'
})
export class ClientPjService {

  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<ResponseDataCollection<ClientPj>> {
    return this.http.get<ResponseDataCollection<ClientPj>>('http://localhost:8080/clients-pj');
  }

  salvar(createClient: CreateClient): Observable<Message> {
    return this.http.post<Message>('http://localhost:8080/clients-pj', createClient);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/clients-pj/${id}`);
  }
}
