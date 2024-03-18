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
  CardTypeEnum,
  BedCodeEnum,
  RoomViewCodeEnum,
  PillowTypeEnum,
  BabyFacilityEnum,
  TimeIntervalEnum,
  HourEnum,
  PetPolicyEnum
} from '@/types/enums/dataStore'

export interface PropertyImage {
  thumb: string // URL
  image: string // URL
}

export interface PropertyCurrency {
  currency_code: CurrencyCodeEnum
  currency_symbol: string
  currency_position: BeforeAfterEnum
}

export interface PropertyAdditionalPhotos {
  thumb: string // URL
  image: string // URL
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
  infant_amenities_policy: string
  check_in_out_policy: CheckInOutPolicy
  children_age_limit: number
  default_cancellation_policy: CancellationPolicy[]
  default_cancellation_policy_notes: string
  booking_policy: BookingPolicy
  minimum_age_limit_for_children_accommodation: number // 最低可入住兒童年齡限制
  infants_age_limit: number
  parking_policy: string
  pets_policy: PetPolicyEnum
  pets_policy_notes: string[]
  terms_and_conditions: string
}

export interface PropertyPaymentMethodsCardType {
  card_code: CardTypeEnum
  card_name: string
}

interface PropertypaymentMethodBankTransfer {
  bank_code: string
  bank_name: string
  branch_name: string
  account_name: string
  account_number: string
  routing_number: string
  swift_code: string
  iban: string
}

interface PropertypaymentMethod {
  card_types?: PropertyPaymentMethodsCardType[]
  bank_transfer?: PropertypaymentMethodBankTransfer[]
  method:
    | 'credit'
    | 'bank_transfer'
    | 'cash'
    | 'paypal'
    | 'stripe'
    | 'line_pay'
    | 'apple_pay'
    | 'google_pay'
  name: string
}

export interface PropertyPayment {
  methods: PropertypaymentMethod[]
}

export interface RoomBed {
  code: BedCodeEnum // double bed, twin bed, single bed, bunk bed, sofa bed, futon, murphy bed, rollaway bed, crib, trundle bed, water bed, air mattress
  name: string
  quantity: number
}

interface RoomView {
  code: RoomViewCodeEnum
  name: string
}

interface RoomPilow {
  code: PillowTypeEnum
  name: string
}

interface packageDetailImage {
  thumb: string // URL
  image: string // URL
}

interface roomTypePhoto {
  thumb: string // URL
  image: string // URL
}

interface packageDetail {
  code: string
  name: string
  description: string
  price: number
  price_unit: PriceUnitEnum
  quantity: number
  image: packageDetailImage[]
  is_included: boolean
}

export interface RoomTypeDetail {
  baby_facilities: BabyFacilityEnum[]
  bath_set_brand: string
  beds_included: RoomBed[]
  floor_type: FloorTypeEnum[] // 地板類型 地毯、塑膠地磚、木質地板、石材地板、大理石地板、瓷磚地板、水泥地板、SPC、其他
  hairdryer_type: string // 吹風機類型 ex: tescom 2200tw
  is_110v_socket: boolean // 有110v插座
  is_220v_socket: boolean // 有220v插座
  is_air_conditioning: boolean
  is_bath_set: boolean
  is_bathtub: boolean
  is_bathrobes: boolean
  is_both_side_socket_of_bedside: boolean // 床頭兩側都有插座
  is_clothes_rack: boolean
  is_coffie_maker: boolean
  is_crib_available: boolean
  is_electric_kettle: boolean
  is_extra_bed_availale: boolean
  is_glass_bottled_water: boolean
  is_hairdryer: boolean
  is_heating: boolean
  is_hot_tub: boolean
  is_instant_coffee: boolean
  is_japanese_toilet: boolean
  is_kitchenette: boolean
  is_lead_free_faucet: boolean
  is_linens: boolean
  is_low_blue_lights_lamp: boolean
  is_microwave: boolean
  is_minibar: boolean
  is_optional_pilow: boolean // 是否可選擇枕頭類型
  is_private_bathroom: boolean
  is_refrigerator: boolean
  is_safty_locker: boolean
  is_slippers: boolean
  is_soundproof: boolean
  is_tea_bag: boolean
  is_toiletries: boolean
  is_toilet_paper: boolean
  is_tv: boolean
  is_universal_socket: boolean // 有國際插座
  is_wake_up_service: boolean
  is_wifi: boolean
  is_wifi_free: boolean
  is_wired_internet: boolean
  is_wired_internet_free: boolean
  is_towels: boolean
  pilow_type: RoomPilow[]
  photos: roomTypePhoto[]
  room_size: number
  room_size_unit: string
  room_type_id: string
  room_type_name: string
  tv_casting: TvCastingEnum[] // ex: chromecast, airplay, miracast, dlna, roku, fire tv, android tv, apple tv, tizen, webos, viera cast, netcast, viera connect, smartc
  tv_resolution: TvResolutionEnum // ex: 4k, 8k, 1080p, 720p, 480p
  tv_size: number // inches
  tv_content: TvContentEnum[] // ex: flat-screen tv, smart tv, cable tv, satellite tv, pay-per-view channels, streaming service
  view_types: RoomView[]
  wifi_specifications: string // ex: 802.11a, 802.11b, 802.11g, 802.11n, 802.11ac, 802.11ax, 802.11ad, 802.11ay, WiFi 4, WiFi 5, WiFi 6, WiFi 6E
  wifi_description: string // ex: wifi, wifi free, wifi paid, wifi free in all areas, wifi free in some areas, wifi paid in all areas, wifi paid in some areas
  wifi_max_download_speed: number // Mbps
  wifi_max_upload_speed: number // Mbps
}

export interface RatePlanDetail {
  cancellation_policy?: CancellationPolicy[] // 退訂政策，照天數排序，如果沒有退訂政策，則不會回傳此欄位，並使用旅館預設退訂政策
  is_breakfast_included: boolean
  is_children_allowed: boolean
  is_infants_allowed: boolean
  is_pets_allowed: boolean
  is_smoking_allowed: boolean
  max_adults: number
  max_children: number
  max_extra_beds: number
  max_infants: number
  packages: packageDetail[]
  rate_plan_id: string
  rate_plan_name: string
  room_type_id: string
}

// use object.keys() and .filter("is_").filter(=true) to get all the amentities key array.
export interface PropertyAmenities {
  is_accessibility_parking: boolean
  is_bar: boolean
  is_elevator: boolean
  is_free_wifi_in_public_areas: boolean
  is_gym: boolean
  is_no_smoking_rooms: boolean
  is_spa: boolean
  is_outdoor_swimming_pool: boolean
  is_parking: boolean
  free_parking: boolean
  is_restaurants: boolean
  is_smoking_area: boolean
}

// use object.keys() and .filter("is_").filter(=true) to get all the active service key array.
export interface PropertyServices {
  is_24hr_front_desk: boolean
  is_airport_transfer: boolean
  is_babysitting: boolean
  is_concierge: boolean
  is_currency_exchange: boolean
  is_daily_housekeeping: boolean
  is_dry_cleaning: boolean
  is_laundry_service: boolean
  is_luggage_storage: boolean
  is_room_service: boolean
  is_safety_deposit_box: boolean
  is_self_checkin: boolean
  is_shuttle_service: boolean
  is_taxi_service: boolean
  is_tours: boolean
}

export interface Language {
  code: LanguageCodeEnum
  name: string
}

// thie interface should be same as api response
export interface HotelDetails {
  hotel_id: string
  property_id: string
  name: string
  image: PropertyImage[]
  description: string
  currency: PropertyCurrency
  available_languages: Language[]
  payment: PropertyPayment
  additional_photos: PropertyAdditionalPhotos[]
  phone: string
  email: string
  address: PropertyAddress
  policy: PropertyPolicy
  amenities: PropertyAmenities
  services: PropertyServices
  good_to_know: string[]
  the_fine_print: string[]
  rate_plan_details: { [roomTypeRatePlanId: string]: RatePlanDetail }
  room_type_details: { [roomTypeId: string]: RoomTypeDetail }
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
