import { CreditCardTypeEnum } from '@/types/enums/dataStore'

export interface GetAvailableCreditCardsResponse {
  success: boolean
  data?: CreditCardTypeEnum[] // for example: ['visa', 'master', 'jbc', 'amex', 'diners', 'discover', 'unionpay', 'maestro', 'elo', 'hipercard', 'aura', 'credz', 'alelo', 'vr]
  message?: string
}
