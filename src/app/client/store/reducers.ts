import {createReducer, on} from '@ngrx/store'
import {ClientStateInterface} from '../types/clientState.interface'
import * as ClientActions from './actions'

export const inicialState: ClientStateInterface = {
  clients: [],
}

export const reducers = createReducer(
  inicialState,
  on(ClientActions.getClients, (state) => ({...state})),
  on(ClientActions.getClientsSuccess, (state, action) => ({
    ...state,
    clients: action.clients,
  }))
)
