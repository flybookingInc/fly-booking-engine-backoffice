import { RatePlanDetail } from '@/types/stores/property'

export interface GetRatePlansRequest {
  property_id: string
}

export interface GetRatePlansResponse {
  success: boolean
  data?: RatePlanDetail[]
  message?: string
}
