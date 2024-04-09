import { RatePlanDetail } from '@/types/stores/property'

export interface PutRatePlanRequest {
  rate_plan_id: string
  data: RatePlanDetail
}

export interface PutRatePlanResponse {
  success: boolean
  data?: RatePlanDetail
  message?: string
}
