import {createReducer, on} from '@ngrx/store'
import {ClientStateInterface} from '../types/clientState.interface'
import * as ClientActions from './actions'

export const inicialState: ClientStateInterface = {
  clients: [],
}

export const reducers = createReducer(
  inicialState,
  // getClients
  on(ClientActions.getClients, (state) => ({...state})),
  on(ClientActions.getClientsSuccess, (state, action) => ({
    ...state,
    clients: action.clients,
  })),

  // deleteClient
  on(ClientActions.deleteClient, (state) => ({...state})),
  on(ClientActions.deleteClientSuccess, (state, action) => ({
    ...state,
    clients: state.clients.filter((client) => client.id !== action.clientId),
  }))
)
