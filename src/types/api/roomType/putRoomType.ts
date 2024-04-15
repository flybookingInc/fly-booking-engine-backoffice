// 更新單一個房型資料
import { RoomTypeDetail } from '@/types/stores/property'

export interface PutRoomTypeRequest {
  property_id: string
  room_type_id: string
  data: RoomTypeDetail
}

export interface PutRoomTypeResponse {
  success: boolean
  data?: RoomTypeDetail
  message?: string
}
