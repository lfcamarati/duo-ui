import {Client} from 'src/app/client/types/client.interface'

export interface ServiceStateInterface {
  clientRegisterService: Client | null
  isServiceRegistered: boolean | null
  error: string | null
}
