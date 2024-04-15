// 更新全部Rate Plans資料
import { RatePlanDetail } from '@/types/stores/property'

export interface PutRatePlansRequest {
  property_id: string
  data: RatePlanDetail[]
}

export interface PutRatePlansResponse {
  success: boolean
  data?: RatePlanDetail[]
  message?: string
}
