import { CurrencyCodeEnum } from '@/types/enums/dataStore'
import { CurrencySymbol } from '@/types/enums/dataStore'

export interface AvailableCurrency {
  code: CurrencyCodeEnum
  symbol: ValueOf<typeof CurrencySymbol>
}

export interface GetAvailableCurrenciesResponse {
  success: boolean
  data?: AvailableCurrency[] // for example: ['NTD', 'USD', 'JPY', 'CNY', 'EUR']
  message?: string
}
