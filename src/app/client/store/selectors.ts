import {createSelector} from '@ngrx/store'
import {AppStateInterface} from 'src/app/types/appState.interface'

export const selectFeature = (state: AppStateInterface) => state.client

export const clientsSelector = createSelector(
  selectFeature,
  (state) => state.clients
)
