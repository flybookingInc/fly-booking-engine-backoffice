import { RatePlanDetail } from '@/types/stores/property'

export interface PostRatePlanRequest {
  data: Omit<RatePlanDetail, 'rate_plan_id'>
}

export interface PostRatePlanResponse {
  success: boolean
  data?: RatePlanDetail
  message?: string
}
