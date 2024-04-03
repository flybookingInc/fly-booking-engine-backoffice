import { RoomTypeDetail } from '@/types/stores/property'

export interface PostRoomTypeRequest {
  data: RoomTypeDetail
}

export interface PostRoomTypeResponse {
  success: boolean
  data?: RoomTypeDetail
  message?: string
}
