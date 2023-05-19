import {createReducer, on} from '@ngrx/store'
import {ServiceStateInterface} from '../types/serviceState.interface'
import * as ServiceActions from './actions'

export const initialState: ServiceStateInterface = {
  clientRegisterService: null,
  isServiceRegistered: null,
  error: null,
}

export const reducers = createReducer(
  initialState,

  on(ServiceActions.registerServiceClient, (state) => ({
    ...state,
    isServiceRegistered: null,
    error: null,
  })),
  on(ServiceActions.registerServiceClientInitial, (state, action) => ({
    ...state,
    clientRegisterService: action.clientRegisterService,
    isServiceRegistered: null,
    error: null,
  })),
  on(ServiceActions.registerServiceClientSuccess, (state) => ({
    ...state,
    clientRegisterService: null,
    isServiceRegistered: true,
    error: null,
  })),
  on(ServiceActions.registerServiceClientFailure, (state, action) => ({
    ...state,
    isServiceRegistered: false,
    error: action.error,
  }))
)
