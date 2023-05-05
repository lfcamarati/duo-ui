export interface ServiceClient {
  id: number | null
  description: string
  periodType: ServicePeriodType
  periodConfig: string[]
  price: number
}

export enum ServicePeriodType {
  Weekly = 'WEEKLY',
  Monthly = 'MONTHLY',
  SpecificDate = 'SPECIFIC_DATE',
}
