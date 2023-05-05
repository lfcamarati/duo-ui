import {AuthStateInterface} from '../../auth/types/authState.interface'
import {ClientStateInterface} from '../../client/types/clientState.interface'

export interface AppStateInterface {
  auth: AuthStateInterface
  client: ClientStateInterface
}
