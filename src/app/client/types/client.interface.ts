export interface Client {
  id: number | null
  name: string
  cpfCnpj: string
  address: string | null
  email: string | null
  phone: string | null
  type: ClientType
}

export type ClientType = 'PF' | 'PJ'
