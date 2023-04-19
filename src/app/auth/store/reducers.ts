import {createReducer, on} from '@ngrx/store'
import {AuthStateInterface} from '../types/authState.interface'
import * as AuthActions from './actions'

export const initialState: AuthStateInterface = {
  token: null,
  error: null,
}

export const reducers = createReducer(
  initialState,
  // login
  on(AuthActions.login, (state) => ({...state})),
  on(AuthActions.loginSuccess, (state, action) => ({
    ...state,
    token: action.token,
  })),
  on(AuthActions.loginFailure, (state, action) => ({
    ...state,
    token: null,
    error: action.error,
  })),

  // logout
  on(AuthActions.logoutSuccess, (state) => ({
    ...state,
    token: null,
    error: null,
  })),

  // check access
  on(AuthActions.checkAccessSuccess, (state) => ({...state}))
)
