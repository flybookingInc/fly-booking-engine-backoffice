import { RoomTypeDetail } from '@/types/stores/property'

export interface GetRoomTypeRequest {
  property_id: string
  room_type_id: string
}

export interface GetRoomTypeResponse {
  success: boolean
  data?: RoomTypeDetail
  message?: string
}
