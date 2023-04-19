import {ActionReducer, MetaReducer, createReducer, on} from '@ngrx/store'
import {AuthStateInterface} from '../types/authState.interface'
import * as AuthActions from './actions'

export const initialState: AuthStateInterface = {
  token: localStorage.getItem('token') || null,
  error: null,
}

export const reducers = createReducer(
  initialState,
  // login
  on(AuthActions.login, (state) => ({...state, error: null})),
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

export function tokenStorageMetaReducer(
  reducer: ActionReducer<AuthStateInterface>
) {
  return function (state: AuthStateInterface, action: any): any {
    const nextState = reducer(state, action)

    // TODO Solução temporária para tratar o token no localStorage\
    if (action.type === AuthActions.loginSuccess.type) {
      if (nextState.token) {
        localStorage.setItem('token', nextState.token)
      }
    }

    if (action.type === AuthActions.logoutSuccess.type) {
      localStorage.removeItem('token')
    }

    return nextState
  }
}

export const metaReducers: MetaReducer<any>[] = [tokenStorageMetaReducer]
