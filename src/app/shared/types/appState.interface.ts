import {ServiceStateInterface} from 'src/app/service/types/serviceState.interface'
import {MessagesStateInterface} from 'src/app/shared/messages/types/messagesState.interface'
import {AuthStateInterface} from '../../auth/types/authState.interface'
import {ClientStateInterface} from '../../client/types/clientState.interface'

export interface AppStateInterface {
  auth: AuthStateInterface
  client: ClientStateInterface
  service: ServiceStateInterface
  messages: MessagesStateInterface
}
