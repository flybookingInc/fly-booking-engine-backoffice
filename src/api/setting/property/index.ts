import request from '@/axios'
import type { AxiosResponse } from 'axios'
import { GetPropertyRequest, GetPropertyResponse } from '@/types/api/property/getProperty'
import { PostPropertyRequest, PostPropertyResponse } from '@/types/api/property/postProperty'
import { PutPropertyRequest, PutPropertyResponse } from '@/types/api/property/putProperty'
import { deletePropertyRequest, deletePropertyResponse } from '@/types/api/property/deleteProperty'
import { GetPropertiesResponse } from '@/types/api/property/getProperties'

export const getPropertiesApi = (): Promise<AxiosResponse<GetPropertiesResponse>> => {
  return request.get({ url: '/mock/property/getProperties' })
}

export const getPropertyApi = (
  data: GetPropertyRequest
): Promise<AxiosResponse<GetPropertyResponse>> => {
  return request.get({ url: '/mock/property/getProperty', params: data })
}

export const postPropertyApi = (
  data: PostPropertyRequest
): Promise<AxiosResponse<PostPropertyResponse>> => {
  return request.post({ url: '/mock/property/postProperty', data })
}

export const putPropertyApi = (
  data: PutPropertyRequest
): Promise<AxiosResponse<PutPropertyResponse>> => {
  return request.put({ url: '/mock/property/putProperty', data })
}

export const deletePropertyApi = (
  data: deletePropertyRequest
): Promise<AxiosResponse<deletePropertyResponse>> => {
  return request.delete({ url: `/mock/property/deleteProperty`, data })
}
