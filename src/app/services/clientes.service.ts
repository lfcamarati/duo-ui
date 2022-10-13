import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  salvar(texto: string): Observable<string> {
    return new Observable((observer) => {
      if (texto === '') {
        observer.error(new Error("Texto não pode ser vazio!"))
      } else {
        observer.next("Sucesso!");
      }
    });
  }
}
