import { RoomTypeDetail } from '@/types/stores/property'

export interface GetRoomTypesRequest {
  property_id: string
}

export interface GetRoomTypesResponse {
  success: boolean
  data?: RoomTypeDetail[]
  message?: string
}
