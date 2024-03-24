import { LanguageCodeEnum } from '@/types/enums/languageCode'
import { Language } from '@/types/stores/property'

const mockAvailableLanguages: Language[] = [
  {
    code: LanguageCodeEnum.EN,
    name: 'English'
  },
  {
    code: LanguageCodeEnum.ZH_TW,
    name: '正體中文'
  },
  {
    code: LanguageCodeEnum.ZH_CN,
    name: '简体中文'
  }
]

const mockAvailableAmenities: string[] = [
  'free_parking',
  'is_accessibility_parking',
  'is_bar',
  'is_elevator',
  'is_free_wifi_in_public_areas',
  'is_gym',
  'is_no_smoking_rooms',
  'is_outdoor_swimming_pool',
  'is_parking',
  'is_restaurants',
  'is_smoking_area',
  'is_spa'
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
  'is_luggage_storage',
  'is_room_service',
  'is_safety_deposit_box',
  'is_self_checkin',
  'is_shuttle_service',
  'is_taxi_service',
  'is_tours'
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
