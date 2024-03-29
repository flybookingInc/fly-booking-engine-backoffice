import { LanguageCodeEnum } from '@/types/enums/languageCode'

export interface GetAvailableLanguagesResponse {
  success: boolean
  data?: LanguageCodeEnum[]
  message?: string
}
