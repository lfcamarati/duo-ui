import {createAction} from '@ngrx/store'
import {Client} from 'src/app/client/types/client.interface'
import {ServiceClient} from '../types/serviceClient.interface'
import {ServiceActions} from './actionsTypes'

export const registerServiceClient = createAction(
  ServiceActions.RegisterServiceClient,
  (serviceClient: ServiceClient) => ({serviceClient})
)
export const registerServiceClientInitial = createAction(
  ServiceActions.RegisterServiceClientInitial,
  (clientRegisterService: Client) => ({clientRegisterService})
)
export const registerServiceClientSuccess = createAction(
  ServiceActions.RegisterServiceClientSuccess
)
export const registerServiceClientFailure = createAction(
  ServiceActions.RegisterServiceClientFailure,
  (error: string) => ({error})
)
