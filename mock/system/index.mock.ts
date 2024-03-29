import { LanguageCodeEnum } from '@/types/enums/languageCode'

const mockAvailableLanguages: LanguageCodeEnum[] = [
  LanguageCodeEnum.EN,
  LanguageCodeEnum.ZH_TW,
  LanguageCodeEnum.ZH_CN,
  LanguageCodeEnum.JA,
  LanguageCodeEnum.KO,
  LanguageCodeEnum.DE,
  LanguageCodeEnum.FR,
  LanguageCodeEnum.IT,
  LanguageCodeEnum.ES,
  LanguageCodeEnum.RU,
  LanguageCodeEnum.PT,
  LanguageCodeEnum.VI,
  LanguageCodeEnum.TH
]

const mockAvailableAmenities: string[] = [
  'free_parking',
  'accessibility_parking',
  'bar',
  'elevator',
  'free_wifi_in_public_areas',
  'gym',
  'no_smoking_rooms',
  'outdoor_swimming_pool',
  'parking',
  'restaurants',
  'smoking_area',
  'spa'
]

const mockAvailableCurrencies: { code: string; symbol: string }[] = [
  { code: 'USD', symbol: '$' },
  { code: 'CNY', symbol: '¥' },
  { code: 'JPY', symbol: '¥' },
  { code: 'EUR', symbol: '€' },
  { code: 'GBP', symbol: '£' },
  { code: 'NTD', symbol: 'NT$' }
]

const mockAvailableServices: string[] = [
  'luggage_storage',
  'room_service',
  'safety_deposit_box',
  'self_checkin',
  'shuttle_service',
  'taxi_service',
  'tours'
]

const mockAvailableCreditCards: string[] = [
  'visa',
  'master',
  'jcb',
  'amex',
  'diners',
  'discover',
  'unionpay',
  'maestro',
  'elo'
]

export default [
  // 列表接口
  {
    url: '/mock/system/getAvailableLanguages',
    method: 'get',
    response: () => {
      // response: ({ query }) => {
      //   const { pageIndex, pageSize } = query

      return {
        success: true,
        data: mockAvailableLanguages
      }
    }
  },
  {
    url: '/mock/system/getAvailableAmenities',
    method: 'get',
    response: () => {
      // response: ({ query }) => {
      //   const { pageIndex, pageSize } = query

      return {
        success: true,
        data: mockAvailableAmenities
      }
    }
  },
  {
    url: '/mock/system/getAvailableCurrencies',
    method: 'get',
    response: () => {
      // response: ({ query }) => {
      //   const { pageIndex, pageSize } = query

      return {
        success: true,
        data: mockAvailableCurrencies
      }
    }
  },
  {
    url: '/mock/system/getAvailableServices',
    method: 'get',
    response: () => {
      // response: ({ query }) => {
      //   const { pageIndex, pageSize } = query

      return {
        success: true,
        data: mockAvailableServices
      }
    }
  },
  {
    url: '/mock/system/getAvailableCreditCards',
    method: 'get',
    response: () => {
      // response: ({ query }) => {
      //   const { pageIndex, pageSize } = query

      return {
        success: true,
        data: mockAvailableCreditCards
      }
    }
  }
]
