export interface deletePropertyRequest {
  property_id: string
}

export interface deletePropertyResponse {
  success: boolean
  data?: string // deleted property id
  message?: string
}
