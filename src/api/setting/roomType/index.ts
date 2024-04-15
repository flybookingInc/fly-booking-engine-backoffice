import request from '@/axios'
import type { AxiosResponse } from 'axios'
import { GetRoomTypeRequest, GetRoomTypeResponse } from '@/types/api/roomType/getRoomType'
import { PostRoomTypeRequest, PostRoomTypeResponse } from '@/types/api/roomType/postRoomType'
import { PutRoomTypeRequest, PutRoomTypeResponse } from '@/types/api/roomType/putRoomType'
import { PutRoomTypesRequest, PutRoomTypesResponse } from '@/types/api/roomType/putRoomTypes'
import { DeleteRoomTypeRequest, DeleteRoomTypeResponse } from '@/types/api/roomType/deleteRoomType'
import { GetRoomTypesRequest, GetRoomTypesResponse } from '@/types/api/roomType/getRoomTypes'
import { PostUploadPhotosRequest, PostUploadPhotosResponse } from '@/types/api/roomType/postPhotos'
import {
  DeleteUploadPhotosRequest,
  DeleteUploadPhotosResponse
} from '@/types/api/roomType/deletePhoto'
import {
  GetPmsRoomTypesRequest,
  GetPmsRoomTypesResponse
} from '@/types/api/roomType/getPmsRoomTypes'

export const getRoomTypesApi = (
  data: GetRoomTypesRequest
): Promise<AxiosResponse<GetRoomTypesResponse>> => {
  return request.get({ url: '/mock/roomType/getRoomTypes', params: data })
}

export const getPmsRoomTypesApi = (
  data: GetPmsRoomTypesRequest
): Promise<AxiosResponse<GetPmsRoomTypesResponse>> => {
  return request.get({ url: '/mock/roomType/getPmsRoomTypes', params: data })
}

export const getRoomTypeApi = (
  data: GetRoomTypeRequest
): Promise<AxiosResponse<GetRoomTypeResponse>> => {
  return request.get({ url: '/mock/roomType/getRoomType', params: data })
}

export const postRoomTypeApi = (
  data: PostRoomTypeRequest
): Promise<AxiosResponse<PostRoomTypeResponse>> => {
  return request.post({ url: '/mock/roomType/postRoomType', data })
}

// 更新一個房型
export const putRoomTypeApi = (
  data: PutRoomTypeRequest
): Promise<AxiosResponse<PutRoomTypeResponse>> => {
  return request.put({ url: '/mock/roomType/putRoomType', data })
}

// 更新全部房型
export const putRoomTypesApi = (
  data: PutRoomTypesRequest
): Promise<AxiosResponse<PutRoomTypesResponse>> => {
  return request.put({ url: '/mock/roomType/putRoomTypes', data })
}

export const deleteRoomTypeApi = (
  data: DeleteRoomTypeRequest
): Promise<AxiosResponse<DeleteRoomTypeResponse>> => {
  return request.delete({ url: `/mock/roomType/deleteRoomType`, data })
}

export const postUploadPhotosApi = (
  data: PostUploadPhotosRequest
): Promise<AxiosResponse<PostUploadPhotosResponse>> => {
  return request.post({ url: '/mock/roomType/uploadPhotos', data })
}

export const deleteUploadPhotosApi = (
  data: DeleteUploadPhotosRequest
): Promise<AxiosResponse<DeleteUploadPhotosResponse>> => {
  return request.delete({ url: '/mock/roomType/deletePhoto', data })
}
