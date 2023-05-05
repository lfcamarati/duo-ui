import {Client} from './client.interface'

export interface ClientStateInterface {
  clients: Client[]
  clientCreated: boolean | null
  error: string | null
}
