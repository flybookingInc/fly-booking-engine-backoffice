import request from '@/axios'
import { GetAvailableLanguagesResponse } from '@/types/api/system/getAvailablelanguages'
import { GetAvailableAmenitiesResponse } from '@/types/api/system/getAvailableAmenities'
import { GetAvailableCurrenciesResponse } from '@/types/api/system/getAvailableCurrencies'
import { GetAvailableServicesResponse } from '@/types/api/system/getAvailableServices'
import type { AxiosResponse } from 'axios'
import { GetAvailableCreditCardsResponse } from '@/types/api/system/getAvailableCreditCards'

export const getAvailableLanguagesApi = (): Promise<
  AxiosResponse<GetAvailableLanguagesResponse>
> => {
  return request.get({ url: '/mock/system/getAvailableLanguages' })
}

export const getAvailableAmenitiesApi = (): Promise<
  AxiosResponse<GetAvailableAmenitiesResponse>
> => {
  return request.get({ url: '/mock/system/getAvailableAmenities' })
}

export const getAvailableCurrenciesApi = (): Promise<
  AxiosResponse<GetAvailableCurrenciesResponse>
> => {
  return request.get({ url: '/mock/system/getAvailableCurrencies' })
}

export const getAvailableServicesApi = (): Promise<AxiosResponse<GetAvailableServicesResponse>> => {
  return request.get({ url: '/mock/system/getAvailableServices' })
}

export const getAvailableCreditCardsApi = (): Promise<
  AxiosResponse<GetAvailableCreditCardsResponse>
> => {
  return request.get({ url: '/mock/system/getAvailableCreditCards' })
}
