import {createAction} from '@ngrx/store'
import {Message} from '../types/message.interface'

export const addMessage = createAction(
  '[Messages] Add message',
  (message: Message) => ({message})
)
export const clearMessages = createAction('[Messages] Clear messages')
