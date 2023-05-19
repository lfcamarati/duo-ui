export interface ServiceClient {
  id: number | null
  clientId: number
  description: string
  price: number
  periodType: ServicePeriodType
  weekDays: WeekDay[] | null
  specificDate: string | null
}

export enum ServicePeriodType {
  Weekly = 'WEEKLY',
  SpecificDate = 'SPECIFIC_DATE',
}

export interface WeekDay {
  name: string
  description: string
}
