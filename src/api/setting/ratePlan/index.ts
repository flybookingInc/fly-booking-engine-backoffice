import request from '@/axios'
import type { AxiosResponse } from 'axios'
import { GetRatePlanRequest, GetRatePlanResponse } from '@/types/api/ratePlan/getRatePlan'
import { PostRatePlanRequest, PostRatePlanResponse } from '@/types/api/ratePlan/postRatePlan'
import { PutRatePlanRequest, PutRatePlanResponse } from '@/types/api/ratePlan/putRatePlan'
import { DeleteRatePlanRequest, DeleteRatePlanResponse } from '@/types/api/ratePlan/deleteRatePlan'
import { GetRatePlansRequest, GetRatePlansResponse } from '@/types/api/ratePlan/getRatePlans'
import {
  GetPmsRatePlansRequest,
  GetPmsRatePlansResponse
} from '@/types/api/ratePlan/getPmsRatePlans'
import { PutRatePlansRequest, PutRatePlansResponse } from '@/types/api/ratePlan/putRatePlans'

export const getRatePlansApi = (
  data: GetRatePlansRequest
): Promise<AxiosResponse<GetRatePlansResponse>> => {
  return request.get({ url: '/mock/ratePlan/getRatePlans', params: data })
}

export const getPmsRatePlansApi = (
  data: GetPmsRatePlansRequest
): Promise<AxiosResponse<GetPmsRatePlansResponse>> => {
  return request.get({ url: '/mock/ratePlan/getPmsRatePlans', params: data })
}

export const getRatePlanApi = (
  data: GetRatePlanRequest
): Promise<AxiosResponse<GetRatePlanResponse>> => {
  return request.get({ url: '/mock/ratePlan/getRatePlan', params: data })
}

export const postRatePlanApi = (
  data: PostRatePlanRequest
): Promise<AxiosResponse<PostRatePlanResponse>> => {
  return request.post({ url: '/mock/ratePlan/postRatePlan', data })
}

export const putRatePlanApi = (
  data: PutRatePlanRequest
): Promise<AxiosResponse<PutRatePlanResponse>> => {
  return request.put({ url: '/mock/ratePlan/putRatePlan', data })
}

export const putRatePlansApi = (
  data: PutRatePlansRequest
): Promise<AxiosResponse<PutRatePlansResponse>> => {
  return request.put({ url: '/mock/ratePlan/putRatePlans', data })
}

export const deleteRatePlanApi = (
  data: DeleteRatePlanRequest
): Promise<AxiosResponse<DeleteRatePlanResponse>> => {
  return request.delete({ url: `/mock/ratePlan/deleteRatePlan`, data })
}
