export interface GetAvailableServicesRequest {
  pageIndex: number
  pageSize: number
}

export interface GetAvailableServicesResponse {
  success: boolean
  data?: string[] // for example: ['is_luggage_storage', 'is_room_service', 'is_safety_deposit_box']
  message?: string
}
