// data store interface.

import type { LanguageCodeEnum } from '../enums/languageCode'
import {
  TvContentEnum,
  TvResolutionEnum,
  TvCastingEnum,
  FloorTypeEnum,
  PriceUnitEnum,
  ValueOrPercentEnum,
  BeforeAfterEnum,
  CurrencyCodeEnum,
  CreditCardTypeEnum,
  BedCodeEnum,
  RoomViewCodeEnum,
  PillowTypeEnum,
  TimeIntervalEnum,
  HourEnum,
  PetPolicyEnum,
  AmenitiesEnum,
  ServicesEnum,
  RoomTypeStatusEnum,
  WiFiSpecificationEnum,
  WifiAvailabilityEnum,
  RoomBathRoomFacilityEnum,
  RoomBedroomAndLaundryFacilityEnum,
  RoomFacilityEnum,
  RoomFamilyFacilityEnum,
  RoomHeatingAndCoolingFacilityEnum,
  RoomInternetAndOfficeFacilityEnum,
  RoomKitchenAndDiningFacilityEnum,
  RoomSafetyFacilityEnum,
  RoomEntertainmentFacilityEnum,
  WiredInternetAvailabilityEnum,
  PillowFirmnessEnum,
  RatePlanStatusEnum,
  RatePlanAllowedEnum,
  RatePlanIncludedEnum
} from '@/types/enums/dataStore'

export interface BasePhoto {
  image: string // URL
}

export interface PropertyImage extends BasePhoto {
  thumb: string // URL
}

export interface PropertyCurrency {
  currency_code: CurrencyCodeEnum
  currency_position: BeforeAfterEnum
}

export interface PropertyAdditionalPhotos extends BasePhoto {
  thumb: string // URL
}

export interface PropertyAddress {
  address1: string
  address2: string
  city: string
  state: string
  zip: string
  country: string
  latitude: string
  longitude: string
}

export interface CancellationPolicy {
  days_before_checkin?: number // the rule is include this date.
  penalty_type: ValueOrPercentEnum
  penalty_value: number
  specific_date?: string // YYYY-MM-DD
}

export interface CheckInOutPolicy {
  age_restrictions_notes: string[] // ex: 若同行中無人年滿 18 歲，須提供家長同意書。
  check_in_start_time: HourEnum
  check_in_end_time: HourEnum
  check_in_out_notes: string
  check_out_time: HourEnum
  early_check_in_allowed: boolean
  early_check_in_type?: ValueOrPercentEnum
  early_check_in_value?: number
  early_check_in_value_unit?: TimeIntervalEnum
  late_check_out_allowed: boolean
  late_check_out_type?: ValueOrPercentEnum
  late_check_out_value?: number
  late_check_out_value_unit?: TimeIntervalEnum
  minimum_checkin_age: number
}

export interface BookingPolicy {
  allow_same_day_reservations: boolean
  same_day_reservations_deadline: HourEnum
  allow_previous_day_reservations: boolean
  previous_day_reservations_deadline: HourEnum
}

export interface PropertyPolicy {
  infant_amenities_policy: string[]
  check_in_out_policy: CheckInOutPolicy
  children_age_limit: number
  default_cancellation_policy: CancellationPolicy[]
  default_cancellation_policy_notes: string[]
  booking_policy: BookingPolicy
  minimum_age_limit_for_children_accommodation: number // 最低可入住兒童年齡限制
  infants_age_limit: number
  parking_policy: string[]
  pets_policy: PetPolicyEnum
  pets_policy_notes: string[]
  terms_and_conditions: string[]
}

export interface PropertyPaymentMethodsCardType {
  available_card: CreditCardTypeEnum[]
  payment_type_id: string
  enabled: boolean
}

export interface PropertypaymentMethodBankTransfer {
  bank_code: string
  bank_name: string
  branch_name: string
  account_name: string
  account_number: string
  routing_number: string
  swift_code: string
  iban: string
  payment_type_id: string
  enabled: boolean
}

export interface PropertypaymentMethodCash {
  payment_type_id: string
  enabled: boolean
}

export interface PropertypaymentMethod {
  credit_card?: PropertyPaymentMethodsCardType
  bank_transfer?: PropertypaymentMethodBankTransfer
  cash?: PropertypaymentMethodCash
}

export interface PropertyPayment {
  methods: PropertypaymentMethod
}

export interface RoomBed {
  code: BedCodeEnum // double bed, twin bed, single bed, bunk bed, sofa bed, futon, murphy bed, rollaway bed, crib, trundle bed, water bed, air mattress
  quantity: number
}

interface PackageDetailImage extends BasePhoto {
  thumb: string // URL
}

export interface RoomTypePhoto extends BasePhoto {
  thumb: string // URL
}

interface PackageDetail {
  code: string
  name: string
  description: string
  price: number
  price_unit: PriceUnitEnum
  quantity: number
  image: PackageDetailImage[]
  is_included: boolean
}

export interface RoomTypeFacility {
  room_facility: RoomFacilityEnum[]
  room_notes: string[]
  bathroom_facility: RoomBathRoomFacilityEnum[]
  bathroom_notes: string[]
  bedroom_and_laundry_facility: RoomBedroomAndLaundryFacilityEnum[]
  bedroom_and_laundry_notes: string[]
  heating_and_cooling_facility: RoomHeatingAndCoolingFacilityEnum[]
  heating_and_cooling_notes: string[]
  safety_facility: RoomSafetyFacilityEnum[]
  safety_notes: string[]
  internet_and_office_facility: RoomInternetAndOfficeFacilityEnum[]
  internet_and_office_notes: string[]
  kitchen_and_dining_facility: RoomKitchenAndDiningFacilityEnum[]
  kitchen_and_dining_notes: string[]
  family_facility: RoomFamilyFacilityEnum[]
  family_notes: string[]
  entertainment_facility: RoomEntertainmentFacilityEnum[]
  entertainment_notes: string[]
}

export interface RoomTypeDetail {
  facilities: RoomTypeFacility
  bath_set_brand: string
  beds_included: RoomBed[]
  floor_type: FloorTypeEnum[] // 地板類型 地毯、塑膠地磚、木質地板、石材地板、大理石地板、瓷磚地板、水泥地板、SPC、其他
  hairdryer_type: string // 吹風機類型 ex: tescom 2200tw
  pillow_types: PillowTypeEnum[] // 可選枕頭類型
  pillow_firmness: PillowFirmnessEnum[] // 可選枕頭軟硬度
  photos: RoomTypePhoto[]
  pms_room_type_id: string
  room_size: number // square meters
  room_type_id: string
  room_type_name: string
  status: RoomTypeStatusEnum
  tv_casting: TvCastingEnum[] // ex: chromecast, airplay, miracast, dlna, roku, fire tv, android tv, apple tv, tizen, webos, viera cast, netcast, viera connect, smartc
  tv_resolution: TvResolutionEnum // ex: 4k, 8k, 1080p, 720p, 480p
  tv_size: number // inches
  tv_content: TvContentEnum[] // ex: flat-screen tv, smart tv, cable tv, satellite tv, pay-per-view channels, streaming service
  view_types: RoomViewCodeEnum[]
  wifi_specifications: WiFiSpecificationEnum[] // ex: 802.11a, 802.11b, 802.11g, 802.11n, 802.11ac, 802.11ax, 802.11ad, 802.11ay, WiFi 4, WiFi 5, WiFi 6, WiFi 6E
  wifi_availability: WifiAvailabilityEnum[] // ex: wifi, wifi free, wifi paid, wifi free in all areas, wifi free in some areas, wifi paid in all areas, wifi paid in some areas
  wired_internet_availability: WiredInternetAvailabilityEnum[] // ex: wired_internet_free_in_all_areas, wired_internet_free_in_room etc.
  internet_max_download_speed: number // Mbps
  internet_max_upload_speed: number // Mbps
}

export interface RatePlanDetail {
  cancellation_policy?: CancellationPolicy[] // 退訂政策，照天數排序，如果沒有退訂政策，則不會回傳此欄位，並使用旅館預設退訂政策
  allowed: RatePlanAllowedEnum[]
  allowed_notes: string[]
  included: RatePlanIncludedEnum[]
  included_notes: string[]
  max_adults: number
  max_children: number
  max_extra_beds: number
  max_infants: number
  packages: PackageDetail[]
  pms_rate_plan_id: string
  status: RatePlanStatusEnum
  rate_plan_id: string
  rate_plan_name: string
  room_type_id: string
}

// thie interface should be same as api response
export interface HotelDetails {
  hotel_id: string
  property_id: string
  name: string
  image: PropertyImage[]
  description: string
  currency: PropertyCurrency
  available_languages: LanguageCodeEnum[]
  payment: PropertyPayment
  additional_photos: PropertyAdditionalPhotos[]
  phone: string
  email: string
  address: PropertyAddress
  policy: PropertyPolicy
  amenities: AmenitiesEnum[]
  services: ServicesEnum[]
  good_to_know: string[]
  the_fine_print: string[]
  rate_plan_details: RatePlanDetail[]
  room_type_details: RoomTypeDetail[]
}

/**
 * @description: the interface should be same as firestore hotels document env fields
 */
export interface Env {
  api_url: string
  kiosk_mode_redirect_url?: string
  locales: string[]
  has_kiosk_mode: boolean
  pms_property_id: string
  property_id: string // property id of backend system, associate with id of Property table in pg database
}
