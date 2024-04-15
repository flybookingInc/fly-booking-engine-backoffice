import { RoomTypeDetail } from '@/types/stores/property'

export interface GetPmsRoomTypesRequest {
  pms_property_id: string
}

export interface GetPmsRoomTypesResponse {
  success: boolean
  data?: RoomTypeDetail[]
  message?: string
}
