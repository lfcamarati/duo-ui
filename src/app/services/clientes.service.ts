import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientGetAllSearch } from '../domain/ClientGetAllSearch';
import { CreateClient } from '../domain/CreateClient';
import { Message } from '../domain/Message';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<ClientGetAllSearch> {
    return this.http.get<ClientGetAllSearch>('http://localhost:8080/clients');
  }

  salvar(createClient: CreateClient): Observable<Message> {
    return this.http.post<Message>('http://localhost:8080/clients', createClient);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/clients/${id}`);
  }
}
