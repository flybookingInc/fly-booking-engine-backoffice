import { RoomTypeDetail } from '@/types/stores/property'

export interface PostRoomTypeRequest {
  property_id: string
  data: Omit<RoomTypeDetail, 'room_type_id'>
}

export interface PostRoomTypeResponse {
  success: boolean
  data?: RoomTypeDetail
  message?: string
}
