import { Language } from '@/types/stores/property'

export interface GetAvailableLanguagesRequest {
  pageIndex: number
  pageSize: number
}

export interface GetAvailableLanguagesResponse {
  success: boolean
  data?: Language[]
  message?: string
}
