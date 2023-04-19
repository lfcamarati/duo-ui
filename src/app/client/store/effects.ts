import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {EMPTY, catchError, map, mergeMap} from 'rxjs'
import {ClientService} from '../services/client.service'
import * as ClientActions from './actions'

@Injectable()
export class ClientEffects {
  getClients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClientActions.getClients),
      mergeMap(() =>
        this.clientService.getAll().pipe(
          map((response) => ClientActions.getClientsSuccess(response.data)),
          catchError(() => EMPTY)
        )
      )
    )
  )

  constructor(
    private actions$: Actions,
    private clientService: ClientService
  ) {}
}
