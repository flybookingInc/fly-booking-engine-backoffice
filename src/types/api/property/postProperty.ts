import { HotelDetails } from '@/types/stores/property'

export interface PostPropertyRequest {
  data: HotelDetails
}

export interface PostPropertyResponse {
  success: boolean
  data?: HotelDetails
  message?: string
}
