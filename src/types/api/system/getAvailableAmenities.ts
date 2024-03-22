export interface GetAvailableAmenitiesRequest {
  pageIndex: number
  pageSize: number
}

export interface GetAvailableAmenitiesResponse {
  success: boolean
  data?: string[] // for example: ['is_accessibility_parking', 'is_bar', 'is_elevator']
  message?: string
}
