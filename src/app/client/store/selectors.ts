import {createSelector} from '@ngrx/store'
import {AppStateInterface} from 'src/app/shared/types/appState.interface'

export const selectFeature = (state: AppStateInterface) => state.client

export const clientsSelector = createSelector(
  selectFeature,
  (state) => state.clients
)

export const isClientCreated = createSelector(
  selectFeature,
  (state) => state.clientCreated
)

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
)
