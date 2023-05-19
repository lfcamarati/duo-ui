import {createReducer, on} from '@ngrx/store'
import {MessagesStateInterface} from '../types/messagesState.interface'
import * as MessageActions from './actions'

export const inicialState: MessagesStateInterface = {
  messages: [],
}

export const reducers = createReducer(
  inicialState,

  on(MessageActions.addMessage, (state, action) => ({
    ...state,
    messages: [...state.messages, action.message],
  })),
  on(MessageActions.clearMessages, (state) => ({
    ...state,
    messages: [],
  }))
)
