import {createReducer, on} from '@ngrx/store'
import {ClientStateInterface} from '../types/clientState.interface'
import * as ClientActions from './actions'

export const inicialState: ClientStateInterface = {
  clients: [],
  clientCreated: null,
  error: null,
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
  })),

  // createClient
  on(ClientActions.createClientInitial, (state) => ({
    ...state,
    clientCreated: null,
    error: null,
  })),
  on(ClientActions.createClient, (state) => ({
    ...state,
    clientCreated: null,
    error: null,
  })),
  on(ClientActions.createClientSuccess, (state) => ({
    ...state,
    clientCreated: true,
    error: null,
  })),
  on(ClientActions.createClientFailure, (state, action) => ({
    ...state,
    clientCreated: false,
    error: action.error,
  }))
)
