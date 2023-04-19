import {createAction} from '@ngrx/store'
import {Client} from '../types/client.interface'

export const getClients = createAction('[Client] Get clients')
export const getClientsSuccess = createAction(
  '[Client] Get clients success',
  (clients: Client[]) => ({clients})
)

export const deleteClient = createAction(
  '[Client] Delete client',
  (clientId: number) => ({clientId})
)
export const deleteClientSuccess = createAction(
  '[Client] Delete client success',
  (clientId: number) => ({clientId})
)
