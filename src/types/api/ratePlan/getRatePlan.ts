import { RatePlanDetail } from '@/types/stores/property'

export interface GetRatePlanRequest {
  property_id: string
  rate_plan_id: string
}

export interface GetRatePlanResponse {
  success: boolean
  data?: RatePlanDetail
  message?: string
}
