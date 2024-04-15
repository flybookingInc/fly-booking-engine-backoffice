import {
  RoomTypeStatusEnum,
  TvCastingEnum,
  TvContentEnum,
  TvResolutionEnum,
  FloorTypeEnum,
  WiFiSpecificationEnum,
  WifiAvailabilityEnum,
  WiredInternetAvailabilityEnum,
  RoomFacilityEnum,
  RoomSafetyFacilityEnum,
  RoomBathRoomFacilityEnum,
  RoomBedroomAndLaundryFacilityEnum,
  RoomFamilyFacilityEnum,
  RoomHeatingAndCoolingFacilityEnum,
  RoomInternetAndOfficeFacilityEnum,
  RoomKitchenAndDiningFacilityEnum,
  RoomEntertainmentFacilityEnum,
  RoomViewCodeEnum,
  PillowTypeEnum,
  PillowFirmnessEnum,
  RatePlanStatusEnum,
  RatePlanAllowedEnum,
  RatePlanIncludedEnum,
  CurrencyCodeEnum
} from '@/types/enums/dataStore'
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

// const mockAvailableCurrencies: { code: string; symbol: string }[] = [
//   { code: 'USD', symbol: '$' },
//   { code: 'CNY', symbol: '¥' },
//   { code: 'JPY', symbol: '¥' },
//   { code: 'EUR', symbol: '€' },
//   { code: 'GBP', symbol: '£' },
//   { code: 'NTD', symbol: 'NT$' }
// ]

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

const mockAvailableFloorType: string[] = Object.values(FloorTypeEnum)

const mockAvailableRoomTypeStatuses: string[] = Object.values(RoomTypeStatusEnum)

const mockAvailableTvCasting: string[] = Object.values(TvCastingEnum)

const mockAvailableTvContent: string[] = Object.values(TvContentEnum)

const mockAvailableTvResolution: string[] = Object.values(TvResolutionEnum)

const mockAvailableWiFiSpecification: string[] = Object.values(WiFiSpecificationEnum)

const mockAvailableWifiAvailability: string[] = Object.values(WifiAvailabilityEnum)

export default [
  // 列表接口
  {
    url: '/mock/system/getAvailableLanguages',
    method: 'get',
    response: () => {
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
      return {
        success: true,
        data: [
          CurrencyCodeEnum.NTD,
          CurrencyCodeEnum.USD,
          CurrencyCodeEnum.JPY,
          CurrencyCodeEnum.CNY,
          CurrencyCodeEnum.EUR,
          CurrencyCodeEnum.GBP
        ]
      }
    }
  },
  {
    url: '/mock/system/getAvailableServices',
    method: 'get',
    response: () => {
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
      return {
        success: true,
        data: mockAvailableCreditCards
      }
    }
  },
  {
    url: '/mock/system/getAvailableRoomTypeStatuses',
    method: 'get',
    response: () => {
      return {
        success: true,
        data: mockAvailableRoomTypeStatuses
      }
    }
  },
  {
    url: '/mock/system/getAvailableTvCasting',
    method: 'get',
    response: () => {
      return {
        success: true,
        data: mockAvailableTvCasting
      }
    }
  },
  {
    url: '/mock/system/getAvailableTvContent',
    method: 'get',
    response: () => {
      return {
        success: true,
        data: mockAvailableTvContent
      }
    }
  },
  {
    url: '/mock/system/getAvailableTvResolution',
    method: 'get',
    response: () => {
      return {
        success: true,
        data: mockAvailableTvResolution
      }
    }
  },
  {
    url: '/mock/system/getAvailableFloorType',
    method: 'get',
    response: () => {
      return {
        success: true,
        data: mockAvailableFloorType
      }
    }
  },
  {
    url: '/mock/system/getAvailableWifiSpecification',
    method: 'get',
    response: () => {
      return {
        success: true,
        data: mockAvailableWiFiSpecification
      }
    }
  },
  {
    url: '/mock/system/getAvailableWifiAvailability',
    method: 'get',
    response: () => {
      return {
        success: true,
        data: mockAvailableWifiAvailability
      }
    }
  },
  {
    url: '/mock/system/getAvailableWiredInternetAvailability',
    method: 'get',
    response: () => {
      return {
        success: true,
        data: Object.values(WiredInternetAvailabilityEnum)
      }
    }
  },
  {
    url: '/mock/system/getAvailableRoomFacility',
    method: 'get',
    response: () => {
      return {
        success: true,
        data: Object.values(RoomFacilityEnum)
      }
    }
  },
  {
    url: '/mock/system/getAvailableRoomSafetyFacility',
    method: 'get',
    response: () => {
      return {
        success: true,
        data: Object.values(RoomSafetyFacilityEnum)
      }
    }
  },
  {
    url: '/mock/system/getAvailableRoomBathRoomFacility',
    method: 'get',
    response: () => {
      return {
        success: true,
        data: Object.values(RoomBathRoomFacilityEnum)
      }
    }
  },
  {
    url: '/mock/system/getAvailableRoomBedroomAndLaundryFacility',
    method: 'get',
    response: () => {
      return {
        success: true,
        data: Object.values(RoomBedroomAndLaundryFacilityEnum)
      }
    }
  },
  {
    url: '/mock/system/getAvailableRoomFamilyFacility',
    method: 'get',
    response: () => {
      return {
        success: true,
        data: Object.values(RoomFamilyFacilityEnum)
      }
    }
  },
  {
    url: '/mock/system/getAvailableRoomHeatingAndCoolingFacility',
    method: 'get',
    response: () => {
      return {
        success: true,
        data: Object.values(RoomHeatingAndCoolingFacilityEnum)
      }
    }
  },
  {
    url: '/mock/system/getAvailableRoomInternetAndOfficeFacility',
    method: 'get',
    response: () => {
      return {
        success: true,
        data: Object.values(RoomInternetAndOfficeFacilityEnum)
      }
    }
  },
  {
    url: '/mock/system/getAvailableRoomKitchenAndDiningFacility',
    method: 'get',
    response: () => {
      return {
        success: true,
        data: Object.values(RoomKitchenAndDiningFacilityEnum)
      }
    }
  },
  {
    url: '/mock/system/getAvailableRoomEntertainmentFacility',
    method: 'get',
    response: () => {
      return {
        success: true,
        data: Object.values(RoomEntertainmentFacilityEnum)
      }
    }
  },
  {
    url: '/mock/system/getAvailableRoomView',
    method: 'get',
    response: () => {
      return {
        success: true,
        data: Object.values(RoomViewCodeEnum)
      }
    }
  },
  {
    url: '/mock/system/getAvailablePillowType',
    method: 'get',
    response: () => {
      return {
        success: true,
        data: Object.values(PillowTypeEnum)
      }
    }
  },
  {
    url: '/mock/system/getAvailablePillowFirmness',
    method: 'get',
    response: () => {
      return {
        success: true,
        data: Object.values(PillowFirmnessEnum)
      }
    }
  },
  {
    url: '/mock/system/getAvailableRatePlanStatus',
    method: 'get',
    response: () => {
      return {
        success: true,
        data: Object.values(RatePlanStatusEnum)
      }
    }
  },
  {
    url: '/mock/system/getAvailableRatePlanAllowed',
    method: 'get',
    response: () => {
      return {
        success: true,
        data: Object.values(RatePlanAllowedEnum)
      }
    }
  },
  {
    url: '/mock/system/getAvailableRatePlanIncluded',
    method: 'get',
    response: () => {
      return {
        success: true,
        data: Object.values(RatePlanIncludedEnum)
      }
    }
  }
]
