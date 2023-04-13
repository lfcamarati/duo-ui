import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.reducer";

export const authState = createFeatureSelector<AuthState>('auth');

export const tokenSelector = createSelector(
  authState,
  (state: AuthState) => state.token?.token,
);

export const selectIsLogged = createSelector(
  authState,
  (state: AuthState) => !!state.token?.token,
);

export const selectLogoutSuccess = createSelector(
  authState,
  (state: AuthState) => state.token == null
);