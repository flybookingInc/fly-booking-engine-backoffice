export interface GetAvailableCreditCardsRequest {
  pageIndex: number
  pageSize: number
}

export interface GetAvailableCreditCardsResponse {
  success: boolean
  data?: string[] // for example: ['visa', 'master', 'jbc', 'amex', 'diners', 'discover', 'unionpay', 'maestro', 'elo', 'hipercard', 'aura', 'credz', 'alelo', 'vr]
  message?: string
}
