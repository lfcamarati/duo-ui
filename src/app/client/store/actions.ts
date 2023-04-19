import {createAction} from '@ngrx/store'
import {Client} from '../types/Client'

export const getClients = createAction('[Client] Get clients')
export const getClientsSuccess = createAction(
  '[Client] Get clients success',
  (clients: Client[]) => ({clients})
)
