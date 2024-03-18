import { HotelDetails } from '@/types/stores/property'

export interface PutPropertyRequest {
  data: HotelDetails
}

export interface PutPropertyResponse {
  success: boolean
  data?: HotelDetails
  message?: string
}
