import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable, of} from 'rxjs'
import {ListResponse} from '../../shared/types/ListResponse'
import {Contract} from '../domain/Contract'

@Injectable({
  providedIn: 'root',
})
export class ContractService {
  private mockData: Contract[] = [
    {
      id: 1,
      startDate: new Date(),
      endDate: new Date(),
      totalServices: 1,
      totalPrice: 100.0,
      status: 'ATIVO',
    },
    {
      id: 2,
      startDate: new Date(),
      endDate: new Date(),
      totalServices: 7,
      totalPrice: 750.0,
      status: 'EXPIRADO',
    },
    {
      id: 3,
      startDate: new Date(),
      endDate: new Date(),
      totalServices: 4,
      totalPrice: 470.0,
      status: 'EXPIRADO',
    },
  ]

  constructor(private http: HttpClient) {}

  getAll(): Observable<ListResponse<Contract>> {
    // return this.http.get<ResponseDataCollection<Contract>>('/contracts', {
    //   params: { client: clientId }
    // });

    return of({data: this.mockData.filter((c) => c.status === 'ATIVO')})
  }

  getByClient(clientId: number): Observable<ListResponse<Contract>> {
    // return this.http.get<ResponseDataCollection<Contract>>('/contracts', {
    //   params: { client: clientId }
    // });

    return of({data: this.mockData})
  }
}
