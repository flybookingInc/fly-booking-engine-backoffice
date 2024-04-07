import {
  AmenitiesEnum,
  CreditCardTypeEnum,
  RoomTypeStatusEnum,
  ServicesEnum,
  TvCastingEnum,
  TvContentEnum,
  TvResolutionEnum,
  CurrencyCodeEnum,
  FloorTypeEnum,
  WifiAvailabilityEnum,
  WiFiSpecificationEnum,
  WiredInternetAvailabilityEnum,
  RoomFacilityEnum,
  RoomSafetyFacilityEnum,
  RoomInternetAndOfficeFacilityEnum,
  RoomHeatingAndCoolingFacilityEnum,
  RoomFamilyFacilityEnum,
  RoomEntertainmentFacilityEnum,
  RoomKitchenAndDiningFacilityEnum,
  RoomBathRoomFacilityEnum,
  RoomBedroomAndLaundryFacilityEnum,
  RoomViewCodeEnum,
  PillowTypeEnum,
  PillowFirmnessEnum
} from '@/types/enums/dataStore'
import { LanguageCodeEnum } from '@/types/enums/languageCode'

export interface GetAvailableAmenitiesResponse {
  success: boolean
  data?: AmenitiesEnum[] // for example: ['is_accessibility_parking', 'is_bar', 'is_elevator']
  message?: string
}

export interface GetAvailableCreditCardsResponse {
  success: boolean
  data?: CreditCardTypeEnum[] // for example: ['visa', 'master', 'jbc', 'amex', 'diners', 'discover', 'unionpay', 'maestro', 'elo', 'hipercard', 'aura', 'credz', 'alelo', 'vr]
  message?: string
}

export interface GetAvailableCurrenciesResponse {
  success: boolean
  data?: CurrencyCodeEnum[] // for example: ['NTD', 'USD', 'JPY', 'CNY', 'EUR']
  message?: string
}

export interface GetAvailableLanguagesResponse {
  success: boolean
  data?: LanguageCodeEnum[]
  message?: string
}

export interface GetAvailableRoomTypeStatusesResponse {
  success: boolean
  data?: RoomTypeStatusEnum[]
  message?: string
}

export interface GetAvailableServicesResponse {
  success: boolean
  data?: ServicesEnum[] // for example: ['is_luggage_storage', 'is_room_service', 'is_safety_deposit_box']
  message?: string
}

export interface GetAvailableTvCastingResponse {
  success: boolean
  data?: TvCastingEnum[]
  message?: string
}

export interface GetAvailableTvContentResponse {
  success: boolean
  data?: TvContentEnum[]
  message?: string
}

export interface GetAvailableTvResolutionResponse {
  success: boolean
  data?: TvResolutionEnum[]
  message?: string
}

export interface GetAvailableFloorTypeResponse {
  success: boolean
  data?: FloorTypeEnum[]
  message?: string
}

export interface GetAvailableWifiAvailabilityResponse {
  success: boolean
  data?: WifiAvailabilityEnum[]
  message?: string
}

export interface GetAvailableWifiSpecificationResponse {
  success: boolean
  data?: WiFiSpecificationEnum[]
  message?: string
}

export interface GetAvailableWiredInternetAvailabilityResponse {
  success: boolean
  data?: WiredInternetAvailabilityEnum[]
  message?: string
}

export interface GetAvailableRoomFacilityResponse {
  success: boolean
  data?: RoomFacilityEnum[]
  message?: string
}

export interface GetAvailableRoomSafetyFacilityResponse {
  success: boolean
  data?: RoomSafetyFacilityEnum[]
  message?: string
}

export interface GetAvailableRoomInternetAndOfficeFacilityResponse {
  success: boolean
  data?: RoomInternetAndOfficeFacilityEnum[]
  message?: string
}

export interface GetAvailableRoomHeatingAndCoolingFacilityResponse {
  success: boolean
  data?: RoomHeatingAndCoolingFacilityEnum[]
  message?: string
}

export interface GetAvailableRoomFamilyFacilityResponse {
  success: boolean
  data?: RoomFamilyFacilityEnum[]
  message?: string
}

export interface GetAvailableRoomEntertainmentFacilityResponse {
  success: boolean
  data?: RoomEntertainmentFacilityEnum[]
  message?: string
}

export interface GetAvailableRoomKitchenAndDiningFacilityResponse {
  success: boolean
  data?: RoomKitchenAndDiningFacilityEnum[]
  message?: string
}

export interface GetAvailableRoomBathRoomFacilityResponse {
  success: boolean
  data?: RoomBathRoomFacilityEnum[]
  message?: string
}

export interface GetAvailableRoomBedroomAndLaundryFacilityResponse {
  success: boolean
  data?: RoomBedroomAndLaundryFacilityEnum[]
  message?: string
}

export interface GetAvailableRoomViewResponse {
  success: boolean
  data?: RoomViewCodeEnum[]
  message?: string
}

export interface GetAvailablePillowTypeResponse {
  success: boolean
  data?: PillowTypeEnum[]
  message?: string
}

export interface GetAvailablePillowFirmnessResponse {
  success: boolean
  data?: PillowFirmnessEnum[]
  message?: string
}
