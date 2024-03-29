import { AmenitiesEnum } from '@/types/enums/dataStore'

export interface GetAvailableAmenitiesResponse {
  success: boolean
  data?: AmenitiesEnum[] // for example: ['is_accessibility_parking', 'is_bar', 'is_elevator']
  message?: string
}
