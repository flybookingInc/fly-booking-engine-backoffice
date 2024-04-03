export interface DeleteRoomTypeRequest {
  property_id: string
  room_type_id: string
}

export interface DeleteRoomTypeDataResponse {
  property_id: string // deleted property id
  room_type_id: string // deleted roomType id
}

export interface DeleteRoomTypeResponse {
  success: boolean
  data?: DeleteRoomTypeDataResponse
  message?: string
}
