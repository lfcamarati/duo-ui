import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { TokenJwt } from 'src/app/domain/TokenJwt';

const LOCAL_STORAGE_TOKEN_KEY: string = 'token';

export interface AuthState {
  token: Readonly<TokenJwt | null>
}

export const initialState: AuthState = {
  token: { token: localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)! }
}

export const authReducer = createReducer(
  initialState,
  
  // Login
  on(AuthActions.loginSuccess, (state, { token }) => {
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token.token);
    return ({ ...state, token })
  }),

  // Logout
  on(AuthActions.logoutSuccess, state => {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
    return ({ ...state, token: null })
  }),
  
  // Check access
  on(AuthActions.checkAccessSuccess, state => ({ ...state })),
);