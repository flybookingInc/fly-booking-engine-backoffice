import { RoomTypeDetail } from '@/types/stores/property'

export interface PutRoomTypeRequest {
  room_type_id: string
  data: RoomTypeDetail
}

export interface PutRoomTypeResponse {
  success: boolean
  data?: RoomTypeDetail
  message?: string
}
