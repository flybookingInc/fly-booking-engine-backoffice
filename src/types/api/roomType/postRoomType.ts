import { RoomTypeDetail } from '@/types/stores/property'

export interface PostRoomTypeRequest {
  data: Omit<RoomTypeDetail, 'room_type_id'>
}

export interface PostRoomTypeResponse {
  success: boolean
  data?: RoomTypeDetail
  message?: string
}
