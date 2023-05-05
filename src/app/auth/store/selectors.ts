import {createSelector} from '@ngrx/store'
import {AppStateInterface} from 'src/app/shared/types/appState.interface'

export const selectFeature = (state: AppStateInterface) => state.auth

export const tokenSelector = createSelector(
  selectFeature,
  (state) => state.token
)

export const isLoggedSelector = createSelector(
  selectFeature,
  (state) => state.token !== null
)

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
)
