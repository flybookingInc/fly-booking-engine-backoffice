import request from '@/axios'
import {
  GetAvailableLanguagesRequest,
  GetAvailableLanguagesResponse
} from '@/types/api/system/getAvailablelanguages'
import {
  GetAvailableAmenitiesRequest,
  GetAvailableAmenitiesResponse
} from '@/types/api/system/getAvailableAmenities'
import {
  GetAvailableCurrenciesRequest,
  GetAvailableCurrenciesResponse
} from '@/types/api/system/getAvailableCurrencies'
import {
  GetAvailableServicesRequest,
  GetAvailableServicesResponse
} from '@/types/api/system/getAvailableServices'
import type { AxiosResponse } from 'axios'

export const getAvailableLanguagesApi = (
  data: GetAvailableLanguagesRequest
): Promise<AxiosResponse<GetAvailableLanguagesResponse>> => {
  return request.get({ url: '/mock/system/getAvailableLanguages', params: data })
}

export const getAvailableAmenitiesApi = (
  data: GetAvailableAmenitiesRequest
): Promise<AxiosResponse<GetAvailableAmenitiesResponse>> => {
  return request.get({ url: '/mock/system/getAvailableAmenities', params: data })
}

export const getAvailableCurrenciesApi = (
  data: GetAvailableCurrenciesRequest
): Promise<AxiosResponse<GetAvailableCurrenciesResponse>> => {
  return request.get({ url: '/mock/system/getAvailableCurrencies', params: data })
}

export const getAvailableServicesApi = (
  data: GetAvailableServicesRequest
): Promise<AxiosResponse<GetAvailableServicesResponse>> => {
  return request.get({ url: '/mock/system/getAvailableServices', params: data })
}
