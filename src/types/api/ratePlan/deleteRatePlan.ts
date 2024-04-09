export interface DeleteRatePlanRequest {
  property_id: string
  rate_plan_id: string
}

export interface DeleteRatePlanDataResponse {
  property_id: string // deleted property id
  rate_plan_id: string // deleted roomType id
}

export interface DeleteRatePlanResponse {
  success: boolean
  data?: DeleteRatePlanDataResponse
  message?: string
}
