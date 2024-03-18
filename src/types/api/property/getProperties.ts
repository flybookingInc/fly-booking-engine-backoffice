import { HotelDetails } from '@/types/stores/property'

export interface GetPropertiesRequest {
  pageIndex: number
  pageSize: number
}

export interface GetPropertiesResponse {
  success: boolean
  data?: HotelDetails[]
  message?: string
}
