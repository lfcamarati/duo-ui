import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contract } from '../domain/Contract';
import { ResponseDataCollection } from '../../shared/util/ResponseDataCollection';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  private mockData: Contract[] = [
    {id: 1, startDate: new Date(), endDate: new Date(), totalServices: 1, totalPrice: 100.00, status: 'ATIVO'},
    {id: 2, startDate: new Date(), endDate: new Date(), totalServices: 7, totalPrice: 750.00, status: 'EXPIRADO'},
    {id: 3, startDate: new Date(), endDate: new Date(), totalServices: 4, totalPrice: 470.00, status: 'EXPIRADO'}
  ]

  constructor(
    private http: HttpClient
  ) {}

  getAll(): Observable<ResponseDataCollection<Contract>> {
    // return this.http.get<ResponseDataCollection<Contract>>('/contracts', {
    //   params: { client: clientId }
    // });

    return of({ data: this.mockData.filter(c => c.status === 'ATIVO')})
  }

  getByClient(clientId: number): Observable<ResponseDataCollection<Contract>> {
    // return this.http.get<ResponseDataCollection<Contract>>('/contracts', {
    //   params: { client: clientId }
    // });

    return of({ data: this.mockData})
  }
}
