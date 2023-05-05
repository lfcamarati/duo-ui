import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {MessageService} from 'primeng/api'
import {EMPTY, catchError, exhaustMap, map, mergeMap, of, tap} from 'rxjs'
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

  deleteClient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClientActions.deleteClient),
      exhaustMap((action) =>
        this.clientService
          .delete(action.clientId)
          .pipe(map(() => ClientActions.deleteClientSuccess(action.clientId)))
      )
    )
  )

  deleteClientSuccessNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ClientActions.deleteClientSuccess),
        tap(() => {
          this.messageService.add({
            severity: 'success',
            detail: 'Cliente removido com sucesso!',
          })
        })
      ),
    {dispatch: false}
  )

  createClient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClientActions.createClient),
      exhaustMap((action) =>
        this.clientService.salvar(action.client).pipe(
          map(() => ClientActions.createClientSuccess()),
          catchError((err) =>
            of(ClientActions.createClientFailure(err.error.message))
          )
        )
      )
    )
  )

  constructor(
    private actions$: Actions,
    private clientService: ClientService,
    private messageService: MessageService
  ) {}
}
