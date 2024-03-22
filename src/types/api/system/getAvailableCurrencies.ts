interface Currency {
  code: string
  symbol: string
}

export interface GetAvailableCurrenciesRequest {
  pageIndex: number
  pageSize: number
}

export interface GetAvailableCurrenciesResponse {
  success: boolean
  data?: Currency[] // for example: ['NTD', 'USD', 'JPY', 'CNY', 'EUR']
  message?: string
}
