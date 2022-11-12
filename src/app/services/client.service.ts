import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../domain/Client';
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
}
