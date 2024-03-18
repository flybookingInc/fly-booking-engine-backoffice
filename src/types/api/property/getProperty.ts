import { HotelDetails } from '@/types/stores/property'

export interface GetPropertyRequest {
  property_id: string
}

export interface GetPropertyResponse {
  success: boolean
  data?: HotelDetails
  message?: string
}
