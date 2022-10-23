import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../domain/Message';
import { Service } from '../domain/Service';
import { ResponseDataCollection } from '../infra/ResponseDataCollection';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private http: HttpClient
  ) {}

  getById(id: number): Observable<Service> {
    return this.http.get<Service>(`http://localhost:8080/services/${id}`);
  }

  getAll(): Observable<ResponseDataCollection<Service>> {
    return this.http.get<ResponseDataCollection<Service>>('http://localhost:8080/services');
  }

  save(service: Service): Observable<Message> {
    return this.http.post<Message>('http://localhost:8080/services', service);
  }

  update(service: Service): Observable<void> {
    return this.http.put<void>(`http://localhost:8080/services/${service.id}`, service);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/services/${id}`);
  }
}