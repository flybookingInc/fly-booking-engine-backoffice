import { RatePlanDetail } from '@/types/stores/property'

export interface GetPmsRatePlansRequest {
  pms_property_id: string
}

export interface GetPmsRatePlansResponse {
  success: boolean
  data?: RatePlanDetail[]
  message?: string
}
