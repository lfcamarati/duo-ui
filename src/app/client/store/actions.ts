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

export const createClient = createAction(
  '[Client] Create client',
  (client: Client) => ({client})
)
export const createClientInitial = createAction(
  '[Client] Create client initial'
)
export const createClientSuccess = createAction(
  '[Client] Create client success'
)
export const createClientFailure = createAction(
  '[Client] Create client failure',
  (error: string) => ({error})
)
