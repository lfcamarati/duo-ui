import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {MessageService} from 'primeng/api'
import {tap} from 'rxjs'
import * as MessageActions from './actions'

@Injectable()
export class MessagesEffects {
  addMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MessageActions.addMessage),
      tap((action) =>
        this.messageService.add({
          detail: action.message.detail,
          severity: action.message.severity,
        })
      )
    )
  )

  clearMessages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MessageActions.clearMessages),
      tap(() => this.messageService.clear())
    )
  )

  constructor(
    private actions$: Actions,
    private messageService: MessageService
  ) {}
}
