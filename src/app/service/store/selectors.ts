import {createSelector} from '@ngrx/store'
import {AppStateInterface} from 'src/app/shared/types/appState.interface'

export const selectFeature = (state: AppStateInterface) => state.service

export const clientRegisterServiceSelector = createSelector(
  selectFeature,
  (state) => state.clientRegisterService
)

export const isServiceRegistered = createSelector(
  selectFeature,
  (state) => state.isServiceRegistered
)

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
)
