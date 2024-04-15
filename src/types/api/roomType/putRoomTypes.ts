// 更新全部房型資料
import { RoomTypeDetail } from '@/types/stores/property'

export interface PutRoomTypesRequest {
  property_id: string
  data: RoomTypeDetail[]
}

export interface PutRoomTypesResponse {
  success: boolean
  data?: RoomTypeDetail[]
  message?: string
}
