import { ServicesEnum } from '@/types/enums/dataStore'

export interface GetAvailableServicesResponse {
  success: boolean
  data?: ServicesEnum[] // for example: ['is_luggage_storage', 'is_room_service', 'is_safety_deposit_box']
  message?: string
}
