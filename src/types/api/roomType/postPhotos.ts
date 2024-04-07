export interface PostUploadPhotosRequest {
  property_id: string
  room_type_id: string
}

export interface PostUploadPhotosDataResponse {
  photoUrls: string[]
}
export interface PostUploadPhotosResponse {
  success: boolean
  data?: PostUploadPhotosDataResponse
  message?: string
}
