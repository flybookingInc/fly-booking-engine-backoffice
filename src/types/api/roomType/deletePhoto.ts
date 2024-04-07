export interface DeleteUploadPhotosRequest {
  property_id: string
  room_type_id: string
  photo_url: string
}

export interface DeleteUploadPhotosDataResponse {
  property_id: string // deleted property id
  room_type_id: string // deleted roomType id
  photo_url: string // deleted photo url
}

export interface DeleteUploadPhotosResponse {
  success: boolean
  data?: DeleteUploadPhotosDataResponse
  message?: string
}
