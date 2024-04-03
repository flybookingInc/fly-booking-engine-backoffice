import request from '@/axios'
import type { AxiosResponse } from 'axios'
import { GetRoomTypeRequest, GetRoomTypeResponse } from '@/types/api/roomType/getRoomType'
import { PostRoomTypeRequest, PostRoomTypeResponse } from '@/types/api/roomType/postRoomType'
import { PutRoomTypeRequest, PutRoomTypeResponse } from '@/types/api/roomType/putRoomType'
import { DeleteRoomTypeRequest, DeleteRoomTypeResponse } from '@/types/api/roomType/deleteRoomType'
import { GetRoomTypesRequest, GetRoomTypesResponse } from '@/types/api/roomType/getRoomTypes'

export const getRoomTypesApi = (
  data: GetRoomTypesRequest
): Promise<AxiosResponse<GetRoomTypesResponse>> => {
  return request.get({ url: '/mock/roomType/getRoomTypes', params: data })
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

export const putRoomTypeApi = (
  data: PutRoomTypeRequest
): Promise<AxiosResponse<PutRoomTypeResponse>> => {
  return request.put({ url: '/mock/roomType/putRoomType', data })
}

export const deleteRoomTypeApi = (
  data: DeleteRoomTypeRequest
): Promise<AxiosResponse<DeleteRoomTypeResponse>> => {
  return request.delete({ url: `/mock/roomType/deleteRoomType`, data })
}
