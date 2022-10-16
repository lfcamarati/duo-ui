export interface ClientGetAllSearch {
  data: ClientSearch[]
}

export interface ClientSearch {
  id: number
  name: string
  type: string
}