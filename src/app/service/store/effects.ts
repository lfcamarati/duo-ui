import {HttpErrorResponse} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, exhaustMap, map, of} from 'rxjs'
import {ServiceService} from '../services/service.service'
import * as ServiceActions from './actions'

@Injectable()
export class ServiceEffects {
  registerServiceClient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ServiceActions.registerServiceClient),
      exhaustMap((action) =>
        this.serviceService.register(action.serviceClient).pipe(
          map(() => ServiceActions.registerServiceClientSuccess()),
          catchError((err: HttpErrorResponse) =>
            of(ServiceActions.registerServiceClientFailure(err.error.message))
          )
        )
      )
    )
  )

  constructor(
    private actions$: Actions,
    private serviceService: ServiceService
  ) {}
}
