import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientPf } from '../domain/ClientPf';
import { CreateClient } from '../domain/CreateClient';
import { Message } from '../domain/Message';
import { ResponseDataCollection } from '../infra/ResponseDataCollection';

@Injectable({
  providedIn: 'root'
})
export class ClientPfService {

  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<ResponseDataCollection<ClientPf>> {
    return this.http.get<ResponseDataCollection<ClientPf>>('http://localhost:8080/clients-pf');
  }

  salvar(createClient: CreateClient): Observable<Message> {
    return this.http.post<Message>('http://localhost:8080/clients-pf', createClient);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/clients-pf/${id}`);
  }
}
