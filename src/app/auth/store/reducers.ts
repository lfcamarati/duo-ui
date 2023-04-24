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
  on(AuthActions.loginSuccess, (state, action) => {
    localStorage.setItem('token', action.token)
    return {
      ...state,
      token: action.token,
    }
  }),
  on(AuthActions.loginFailure, (state, action) => {
    localStorage.removeItem('token')
    return {
      ...state,
      token: null,
      error: action.error,
    }
  }),

  // logout
  on(AuthActions.logoutSuccess, (state) => {
    localStorage.removeItem('token')
    return {
      ...state,
      token: null,
      error: null,
    }
  }),

  // check access
  on(AuthActions.checkAccess, (state) => {
    const tokenLocalStorage = localStorage.getItem('token')
    return {...state, token: tokenLocalStorage}
  }),
  on(AuthActions.checkAccessSuccess, (state) => ({...state})),
  on(AuthActions.checkAccessFailure, (state) => {
    localStorage.removeItem('token')
    return {...state, token: null}
  })
)

export function tokenStorageMetaReducer(
  reducer: ActionReducer<AuthStateInterface>
) {
  return function (state: AuthStateInterface, action: any): any {
    if (action.type === AuthActions.loginSuccess.type) {
    } else if (action.type === AuthActions.loginFailure.type) {
    } else if (action.type === AuthActions.logoutSuccess.type) {
    } else if (action.type === AuthActions.checkAccess.type) {
    } else if (action.type === AuthActions.checkAccessFailure.type) {
    }

    return reducer(state, action)
  }
}

export const metaReducers: MetaReducer<any>[] = [tokenStorageMetaReducer]
