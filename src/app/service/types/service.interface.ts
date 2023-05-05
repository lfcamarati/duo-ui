export interface Service {
  id?: number | null
  name: string
  type: ServiceType
  description: string
  price: number
}

export enum ServiceType {
  NORMAL = 'NORMAL',
  SOCIAL_MEDIA_MANAGEMENT = 'SOCIAL_MEDIA_MANAGEMENT',
}
