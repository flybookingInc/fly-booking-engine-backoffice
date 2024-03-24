// import { UserMeta } from '@/api/login/types'
// import { SUCCESS_CODE } from '@/constants'
// import { AppRoleEnum, RoleEnum } from '@/enums/roleEnum'
import {
  BabyFacilityEnum,
  BedCodeEnum,
  BeforeAfterEnum,
  CardTypeEnum,
  CurrencyCodeEnum,
  FloorTypeEnum,
  HourEnum,
  PetPolicyEnum,
  PillowTypeEnum,
  PriceUnitEnum,
  RoomViewCodeEnum,
  TimeIntervalEnum,
  TvCastingEnum,
  TvContentEnum,
  TvResolutionEnum,
  ValueOrPercentEnum
} from '@/types/enums/dataStore'
import { LanguageCodeEnum } from '@/types/enums/languageCode'
import { HotelDetails } from '@/types/stores/property'

// const timeout = 1000

// mock user account's meta, actually data is locate in firebase auth account's cliam.
// const List: UserMeta[] = [
//   {
//     app: [
//       {
//         appId: 'fly-booking-engine-backend',
//         roles: [AppRoleEnum.ADMIN],
//         permissions: ['*:*:*']
//       }
//     ],
//     properties: [
//       {
//         groupId: 'fooyee',
//         propertyId: 'test',
//         roles: [RoleEnum.SUPERADMIN],
//         permissions: ['*:*:*']
//       }
//     ]
//   }
// ]

// mock hotelDetail Data
const MockHotelDetail: HotelDetails = {
  available_languages: [
    { code: LanguageCodeEnum.ZH_TW, name: '正體中文' },
    { code: LanguageCodeEnum.EN, name: 'English' }
  ],
  services: {
    is_24hr_front_desk: true,
    is_airport_transfer: true,
    is_babysitting: true,
    is_concierge: true,
    is_currency_exchange: true,
    is_daily_housekeeping: true,
    is_dry_cleaning: true,
    is_laundry_service: true,
    is_luggage_storage: true,
    is_room_service: true,
    is_safety_deposit_box: true,
    is_self_checkin: true,
    is_shuttle_service: true,
    is_taxi_service: true,
    is_tours: true
  },
  good_to_know: ['現在無需支付任何費用。信用卡資料僅作為訂房擔保，您可到店付款。'],
  address: {
    address1: 'No. 331, Sec. 1, Zhongshan Rd., Yonghe Dist.',
    address2: '',
    city: 'New Taipei City',
    country: 'TW',
    latitude: '25.00627327',
    longitude: '121.50621796',
    state: "T'ai-pei",
    zip: '234017'
  },
  amenities: {
    is_accessibility_parking: true,
    is_bar: true,
    is_elevator: true,
    is_free_wifi_in_public_areas: true,
    is_gym: true,
    is_no_smoking_rooms: true,
    is_spa: true,
    is_outdoor_swimming_pool: true,
    is_parking: true,
    free_parking: true,
    is_restaurants: true,
    is_smoking_area: true
  },
  currency: {
    currency_code: CurrencyCodeEnum.TWD,
    currency_position: BeforeAfterEnum.BEFORE,
    currency_symbol: 'NT$'
  },
  description: '打造一個適合居住的旅館。自在、寧靜為設計目的，低視覺衝擊、日然採光、綠色植栽圍繞。',
  email: 'fooyee.yonghe@gmail.com',
  hotel_id: '217575',
  image: [
    {
      image: 'https://example.com',
      thumb: 'https://example.com'
    }
  ],
  additional_photos: [
    {
      image: 'https://example.com',
      thumb: 'https://example.com'
    },
    {
      image: 'https://example.com',
      thumb: 'https://example.com'
    }
  ],
  name: '永和浮逸飯店',
  payment: {
    methods: {
      credit_card: {
        available_card: [CardTypeEnum.VISA, CardTypeEnum.MASTER],
        payment_type_id: 'credit_card',
        enabled: true
      },
      bank_transfer: {
        account_name: '紅浮股份有限公司',
        account_number: '010101-343434-56789',
        bank_code: 'cathay',
        bank_name: '國泰世華銀行',
        branch_name: '安和分行',
        iban: '',
        routing_number: '',
        swift_code: '',
        payment_type_id: 'bank_transfer',
        enabled: true
      },
      cash: {
        payment_type_id: 'cash',
        enabled: true
      }
    }
  },
  phone: '+886-2-3233-0100',
  policy: {
    infant_amenities_policy: '須事先預約',
    minimum_age_limit_for_children_accommodation: 6,
    pets_policy: PetPolicyEnum.ROOM_TYPE_DEPENDENT,
    pets_policy_notes: ['攜帶寵物每日加收清潔費500元整', '寵物須自行照顧'],
    check_in_out_policy: {
      check_in_start_time: HourEnum._15_OCLOCK,
      check_in_end_time: HourEnum._NOT_SET,
      check_out_time: HourEnum._11_OCLOCK,
      check_in_out_notes: '如超過晚上10點入住，請提前通知飯店。',
      early_check_in_allowed: true,
      early_check_in_type: ValueOrPercentEnum.VALUE,
      early_check_in_value: 200,
      early_check_in_value_unit: TimeIntervalEnum.PER_HOUR,
      late_check_out_allowed: true,
      late_check_out_type: ValueOrPercentEnum.VALUE,
      late_check_out_value: 200,
      late_check_out_value_unit: TimeIntervalEnum.PER_HOUR,
      minimum_checkin_age: 18,
      age_restrictions_notes: ['未滿18歲入住需監護人同意書', '入住須攜帶有相片之身分證件']
    },
    children_age_limit: 12,
    default_cancellation_policy: [
      {
        days_before_checkin: 3,
        penalty_type: ValueOrPercentEnum.PERCENT,
        penalty_value: 0
      },
      {
        days_before_checkin: 1,
        penalty_type: ValueOrPercentEnum.PERCENT,
        penalty_value: 50
      },
      {
        days_before_checkin: 0,
        penalty_type: ValueOrPercentEnum.PERCENT,
        penalty_value: 100
      },
      {
        penalty_type: ValueOrPercentEnum.PERCENT,
        penalty_value: 100,
        specific_date: '2024-12-31'
      }
    ],
    default_cancellation_policy_notes: '',
    booking_policy: {
      allow_same_day_reservations: true,
      same_day_reservations_deadline: HourEnum._NOT_SET,
      allow_previous_day_reservations: true,
      previous_day_reservations_deadline: HourEnum._06_OCLOCK
    },
    infants_age_limit: 2,
    parking_policy: '須事先預約',
    terms_and_conditions: ['入住須攜帶有相片之身分證件']
  },
  property_id: 'test',
  rate_plan_details: {
    '1274032': {
      is_children_allowed: true,
      is_infants_allowed: true,
      is_pets_allowed: false,
      is_smoking_allowed: false,
      is_breakfast_included: true,
      max_adults: 2,
      max_children: 1,
      max_extra_beds: 0,
      max_infants: 1,
      packages: [
        {
          code: 'breakfast',
          description: '早餐',
          image: [
            {
              image: 'https://via.placeholder.com/150',
              thumb: 'https://via.placeholder.com/150'
            }
          ],
          is_included: true,
          name: '早餐',
          price: 0,
          price_unit: PriceUnitEnum.PER_STAY,
          quantity: 1
        }
      ],
      rate_plan_id: '1274032',
      rate_plan_name: 'default',
      room_type_id: '431074'
    },
    '1274306': {
      is_children_allowed: true,
      is_infants_allowed: true,
      is_pets_allowed: false,
      is_smoking_allowed: false,
      is_breakfast_included: true,
      max_adults: 2,
      max_children: 1,
      max_extra_beds: 0,
      max_infants: 1,
      packages: [
        {
          code: 'breakfast',
          description: '早餐',
          image: [
            {
              image: 'https://via.placeholder.com/150',
              thumb: 'https://via.placeholder.com/150'
            }
          ],
          is_included: true,
          name: '早餐',
          price: 0,
          price_unit: PriceUnitEnum.PER_STAY,
          quantity: 1
        }
      ],
      rate_plan_id: '1274306',
      rate_plan_name: 'default',
      room_type_id: '431129'
    },
    '1380586': {
      is_children_allowed: true,
      is_infants_allowed: true,
      is_pets_allowed: false,
      is_smoking_allowed: false,
      is_breakfast_included: true,
      max_adults: 1,
      max_children: 0,
      max_extra_beds: 0,
      max_infants: 1,
      packages: [
        {
          code: 'breakfast',
          description: '早餐',
          image: [
            {
              image: 'https://via.placeholder.com/150',
              thumb: 'https://via.placeholder.com/150'
            }
          ],
          is_included: true,
          name: '早餐',
          price: 0,
          price_unit: PriceUnitEnum.PER_STAY,
          quantity: 1
        }
      ],
      rate_plan_id: '1380586',
      rate_plan_name: 'default',
      room_type_id: '464349'
    },
    '1380589': {
      is_children_allowed: true,
      is_infants_allowed: true,
      is_pets_allowed: false,
      is_smoking_allowed: false,
      is_breakfast_included: true,
      max_adults: 4,
      max_children: 0,
      max_extra_beds: 0,
      max_infants: 1,
      packages: [
        {
          code: 'breakfast',
          description: '早餐',
          image: [
            {
              image: 'https://via.placeholder.com/150',
              thumb: 'https://via.placeholder.com/150'
            }
          ],
          is_included: true,
          name: '早餐',
          price: 0,
          price_unit: PriceUnitEnum.PER_STAY,
          quantity: 1
        }
      ],
      rate_plan_id: '1380589',
      rate_plan_name: 'default',
      room_type_id: '464352'
    },
    '1406349': {
      is_children_allowed: true,
      is_infants_allowed: true,
      is_pets_allowed: false,
      is_smoking_allowed: false,
      is_breakfast_included: true,
      max_adults: 2,
      max_children: 1,
      max_extra_beds: 0,
      max_infants: 1,
      packages: [
        {
          code: 'breakfast',
          description: '早餐',
          image: [
            {
              image: 'https://via.placeholder.com/150',
              thumb: 'https://via.placeholder.com/150'
            }
          ],
          is_included: true,
          name: '早餐',
          price: 0,
          price_unit: PriceUnitEnum.PER_STAY,
          quantity: 1
        }
      ],
      rate_plan_id: '1406349',
      rate_plan_name: 'default',
      room_type_id: '472669'
    },
    '1419131': {
      is_children_allowed: true,
      is_infants_allowed: true,
      is_pets_allowed: false,
      is_smoking_allowed: false,
      is_breakfast_included: true,
      max_adults: 3,
      max_children: 0,
      max_extra_beds: 0,
      max_infants: 1,
      packages: [
        {
          code: 'breakfast',
          description: '早餐',
          image: [
            {
              image: 'https://via.placeholder.com/150',
              thumb: 'https://via.placeholder.com/150'
            }
          ],
          is_included: true,
          name: '早餐',
          price: 0,
          price_unit: PriceUnitEnum.PER_STAY,
          quantity: 1
        }
      ],
      rate_plan_id: '1419131',
      rate_plan_name: 'default',
      room_type_id: '475906'
    },
    '1419134': {
      is_children_allowed: true,
      is_infants_allowed: true,
      is_pets_allowed: false,
      is_smoking_allowed: false,
      is_breakfast_included: true,
      max_adults: 4,
      max_children: 0,
      max_extra_beds: 0,
      max_infants: 1,
      packages: [
        {
          code: 'breakfast',
          description: '早餐',
          image: [
            {
              image: 'https://via.placeholder.com/150',
              thumb: 'https://via.placeholder.com/150'
            }
          ],
          is_included: true,
          name: '早餐',
          price: 0,
          price_unit: PriceUnitEnum.PER_STAY,
          quantity: 1
        }
      ],
      rate_plan_id: '1419134',
      rate_plan_name: 'default',
      room_type_id: '475909'
    }
  },
  room_type_details: {
    '431074': {
      bath_set_brand: '上山採藥',
      beds_included: [
        {
          code: BedCodeEnum.DOUBLE,
          name: '雙人床',
          quantity: 1
        }
      ],
      floor_type: [FloorTypeEnum.SPC],
      hairdryer_type: 'TESCOM 2200TW',
      is_110v_socket: true,
      is_220v_socket: false,
      is_air_conditioning: true,
      is_bath_set: true,
      is_bathrobes: false,
      is_bathtub: true,
      is_both_side_socket_of_bedside: true,
      is_clothes_rack: true,
      is_coffie_maker: false,
      is_crib_available: true,
      is_electric_kettle: true,
      is_extra_bed_availale: false,
      is_glass_bottled_water: false,
      is_hairdryer: true,
      is_heating: false,
      is_hot_tub: false,
      is_instant_coffee: true,
      is_japanese_toilet: true,
      is_kitchenette: false,
      is_lead_free_faucet: true,
      is_linens: true,
      is_low_blue_lights_lamp: true,
      is_microwave: false,
      is_minibar: false,
      is_optional_pilow: true,
      is_private_bathroom: true,
      is_refrigerator: true,
      is_safty_locker: false,
      is_slippers: true,
      is_soundproof: true,
      is_tea_bag: true,
      is_toilet_paper: true,
      is_toiletries: true,
      is_towels: true,
      is_tv: true,
      is_universal_socket: true,
      is_wake_up_service: true,
      is_wifi: true,
      is_wifi_free: true,
      is_wired_internet: false,
      is_wired_internet_free: false,
      baby_facilities: [
        BabyFacilityEnum.BABY_BOTTLE_STERILIZER,
        BabyFacilityEnum.BABY_CRIB,
        BabyFacilityEnum.BABY_BATHTUB
      ],
      photos: [
        {
          image: 'https://h-img2.cloudbeds.com/217575/xjg3hoyu_featured~~640aaee494d31.jpg',
          thumb: 'https://h-img2.cloudbeds.com/217575/xjg3hoyu_thumb~~640aaee4d02f7.jpg'
        },
        {
          image: 'https://h-img3.cloudbeds.com/217575/7lfmrgxs_gallery~~640aaf015a0c6.jpg',
          thumb: 'https://h-img1.cloudbeds.com/217575/7lfmrgxs_thumb~~640aaf019d144.jpg'
        },
        {
          image: 'https://h-img1.cloudbeds.com/217575/dx4zxagv_gallery~~640aaf15698dc.jpg',
          thumb: 'https://h-img2.cloudbeds.com/217575/dx4zxagv_thumb~~640aaf15a3cd7.jpg'
        },
        {
          image: 'https://h-img3.cloudbeds.com/217575/vo4wxzv9_gallery~~640aaf39f36ca.jpg',
          thumb: 'https://h-img2.cloudbeds.com/217575/vo4wxzv9_thumb~~640aaf3a447b3.jpg'
        }
      ],
      pilow_type: [
        {
          code: PillowTypeEnum.SOFT,
          name: '軟枕'
        },
        {
          code: PillowTypeEnum.MEDIUM,
          name: '硬度適中枕'
        },
        {
          code: PillowTypeEnum.FIRM,
          name: '較具支撐力枕'
        }
      ],
      room_size: 24,
      room_size_unit: '平方公尺',
      room_type_id: '431074',
      room_type_name: 'Standard Double',
      tv_casting: [TvCastingEnum.CHROMECAST, TvCastingEnum.AIRPLAY, TvCastingEnum.DLNA],
      tv_content: [
        TvContentEnum.NETFLIX_APP,
        TvContentEnum.AMAZON_PRIME_VIDEO_APP,
        TvContentEnum.APPLE_TV_APP,
        TvContentEnum.DISNEY_PLUS_APP,
        TvContentEnum.IQIYI_APP,
        TvContentEnum.FREE_CABLE_TV,
        TvContentEnum.FREE_MOVIES_ON_DEMAND,
        TvContentEnum.FREE_PORN_MOVIES_ON_DEMAND
      ],
      tv_resolution: TvResolutionEnum._4K,
      tv_size: 70,
      view_types: [
        {
          code: RoomViewCodeEnum.CITY_VIEW,
          name: '城市景觀'
        },
        {
          code: RoomViewCodeEnum.PARTIAL_NO_VIEW,
          name: '部分房間無窗'
        }
      ],
      wifi_description: '免費WiFi',
      wifi_max_download_speed: 300,
      wifi_max_upload_speed: 300,
      wifi_specifications: 'WiFi 5'
    },
    '431129': {
      bath_set_brand: '上山採藥',
      beds_included: [
        {
          code: BedCodeEnum.DOUBLE,
          name: '雙人床',
          quantity: 1
        }
      ],
      floor_type: [FloorTypeEnum.SPC],
      hairdryer_type: 'TESCOM 2200TW',
      is_110v_socket: true,
      is_220v_socket: false,
      is_air_conditioning: true,
      is_bath_set: true,
      is_bathrobes: false,
      is_bathtub: true,
      is_both_side_socket_of_bedside: true,
      is_clothes_rack: true,
      is_coffie_maker: false,
      is_crib_available: true,
      is_electric_kettle: true,
      is_extra_bed_availale: false,
      is_glass_bottled_water: false,
      is_hairdryer: true,
      is_heating: false,
      is_hot_tub: false,
      is_instant_coffee: true,
      is_japanese_toilet: true,
      is_kitchenette: false,
      is_lead_free_faucet: true,
      is_linens: true,
      is_low_blue_lights_lamp: true,
      is_microwave: false,
      is_minibar: false,
      is_optional_pilow: true,
      is_private_bathroom: true,
      is_refrigerator: true,
      is_safty_locker: false,
      is_slippers: true,
      is_soundproof: true,
      is_tea_bag: true,
      is_toilet_paper: true,
      is_toiletries: true,
      is_towels: true,
      is_tv: true,
      is_universal_socket: true,
      is_wake_up_service: true,
      is_wifi: true,
      is_wifi_free: true,
      is_wired_internet: false,
      is_wired_internet_free: false,
      baby_facilities: [
        BabyFacilityEnum.BABY_BOTTLE_STERILIZER,
        BabyFacilityEnum.BABY_CRIB,
        BabyFacilityEnum.BABY_BATHTUB
      ],
      photos: [
        {
          image: 'https://h-img3.cloudbeds.com/217575/ed1_featured~~6380bf7cae1a4.jpg',
          thumb: 'https://h-img3.cloudbeds.com/217575/ed1_thumb~~6380bf7d01fd0.jpg'
        },
        {
          image: 'https://h-img1.cloudbeds.com/217575/ed5_gallery~~6380bf8ada44a.jpg',
          thumb: 'https://h-img1.cloudbeds.com/217575/ed5_thumb~~6380bf8b1bced.jpg'
        },
        {
          image: 'https://h-img3.cloudbeds.com/217575/kogxdotw_gallery~~640aafdcb20dd.jpg',
          thumb: 'https://h-img1.cloudbeds.com/217575/kogxdotw_thumb~~640aafdcef2e0.jpg'
        },
        {
          image: 'https://h-img1.cloudbeds.com/217575/iqjbv0os_gallery~~640aafec63b7b.jpg',
          thumb: 'https://h-img2.cloudbeds.com/217575/iqjbv0os_thumb~~640aafeca5077.jpg'
        },
        {
          image: 'https://h-img1.cloudbeds.com/217575/dx4zxagv_gallery~~640ab00f8e854.jpg',
          thumb: 'https://h-img2.cloudbeds.com/217575/dx4zxagv_thumb~~640ab00fc2eb5.jpg'
        }
      ],
      pilow_type: [
        {
          code: PillowTypeEnum.SOFT,
          name: '軟枕'
        },
        {
          code: PillowTypeEnum.MEDIUM,
          name: '硬度適中枕'
        },
        {
          code: PillowTypeEnum.FIRM,
          name: '較具支撐力枕'
        }
      ],
      room_size: 24,
      room_size_unit: '平方公尺',
      room_type_id: '431129',
      room_type_name: 'Elite Double',
      tv_casting: [TvCastingEnum.CHROMECAST, TvCastingEnum.AIRPLAY, TvCastingEnum.DLNA],
      tv_content: [
        TvContentEnum.NETFLIX_APP,
        TvContentEnum.AMAZON_PRIME_VIDEO_APP,
        TvContentEnum.APPLE_TV_APP,
        TvContentEnum.DISNEY_PLUS_APP,
        TvContentEnum.IQIYI_APP,
        TvContentEnum.FREE_CABLE_TV,
        TvContentEnum.FREE_MOVIES_ON_DEMAND,
        TvContentEnum.FREE_PORN_MOVIES_ON_DEMAND
      ],
      tv_resolution: TvResolutionEnum._4K,
      tv_size: 70,
      view_types: [
        {
          code: RoomViewCodeEnum.CITY_VIEW,
          name: '城市景觀'
        },
        {
          code: RoomViewCodeEnum.PARTIAL_NO_VIEW,
          name: '部分房間無窗'
        }
      ],
      wifi_description: '免費WiFi',
      wifi_max_download_speed: 300,
      wifi_max_upload_speed: 300,
      wifi_specifications: 'WiFi 5'
    },
    '464349': {
      bath_set_brand: '上山採藥',
      beds_included: [
        {
          code: BedCodeEnum.SINGLE,
          name: '單人床',
          quantity: 1
        }
      ],
      floor_type: [FloorTypeEnum.SPC],
      hairdryer_type: 'TESCOM 2200TW',
      is_110v_socket: true,
      is_220v_socket: false,
      is_air_conditioning: true,
      is_bath_set: true,
      is_bathrobes: false,
      is_bathtub: true,
      is_both_side_socket_of_bedside: true,
      is_clothes_rack: true,
      is_coffie_maker: false,
      is_crib_available: true,
      is_electric_kettle: true,
      is_extra_bed_availale: false,
      is_glass_bottled_water: false,
      is_hairdryer: true,
      is_heating: false,
      is_hot_tub: false,
      is_instant_coffee: true,
      is_japanese_toilet: true,
      is_kitchenette: false,
      is_lead_free_faucet: true,
      is_linens: true,
      is_low_blue_lights_lamp: true,
      is_microwave: false,
      is_minibar: false,
      is_optional_pilow: true,
      is_private_bathroom: true,
      is_refrigerator: true,
      is_safty_locker: false,
      is_slippers: true,
      is_soundproof: true,
      is_tea_bag: true,
      is_toilet_paper: true,
      is_toiletries: true,
      is_towels: true,
      is_tv: true,
      is_universal_socket: true,
      is_wake_up_service: true,
      is_wifi: true,
      is_wifi_free: true,
      is_wired_internet: false,
      is_wired_internet_free: false,
      baby_facilities: [
        BabyFacilityEnum.BABY_BOTTLE_STERILIZER,
        BabyFacilityEnum.BABY_CRIB,
        BabyFacilityEnum.BABY_BATHTUB
      ],
      photos: [
        {
          image: 'https://h-img2.cloudbeds.com/217575/zylsskif_featured~~640aafbb92da7.jpg',
          thumb: 'https://h-img2.cloudbeds.com/217575/zylsskif_thumb~~640aafbbcb575.jpg'
        },
        {
          image: 'https://h-img3.cloudbeds.com/uploads/217575/single_gallery~~64acc61117521.jpg',
          thumb: 'https://h-img2.cloudbeds.com/uploads/217575/single_thumb~~64acc6113fdce.jpg'
        }
      ],
      pilow_type: [
        {
          code: PillowTypeEnum.SOFT,
          name: '軟枕'
        },
        {
          code: PillowTypeEnum.MEDIUM,
          name: '硬度適中枕'
        },
        {
          code: PillowTypeEnum.FIRM,
          name: '較具支撐力枕'
        }
      ],
      room_size: 24,
      room_size_unit: '平方公尺',
      room_type_id: '464349',
      room_type_name: 'Single Room',
      tv_casting: [TvCastingEnum.CHROMECAST, TvCastingEnum.AIRPLAY, TvCastingEnum.DLNA],
      tv_content: [
        TvContentEnum.NETFLIX_APP,
        TvContentEnum.AMAZON_PRIME_VIDEO_APP,
        TvContentEnum.APPLE_TV_APP,
        TvContentEnum.DISNEY_PLUS_APP,
        TvContentEnum.IQIYI_APP,
        TvContentEnum.FREE_CABLE_TV,
        TvContentEnum.FREE_MOVIES_ON_DEMAND,
        TvContentEnum.FREE_PORN_MOVIES_ON_DEMAND
      ],
      tv_resolution: TvResolutionEnum._4K,
      tv_size: 70,
      view_types: [
        {
          code: RoomViewCodeEnum.CITY_VIEW,
          name: '城市景觀'
        },
        {
          code: RoomViewCodeEnum.PARTIAL_NO_VIEW,
          name: '部分房間無窗'
        }
      ],
      wifi_description: '免費WiFi',
      wifi_max_download_speed: 300,
      wifi_max_upload_speed: 300,
      wifi_specifications: 'WiFi 5'
    },
    '464352': {
      bath_set_brand: '上山採藥',
      beds_included: [
        {
          code: BedCodeEnum.DOUBLE,
          name: '雙人床',
          quantity: 2
        }
      ],
      floor_type: [FloorTypeEnum.SPC],
      hairdryer_type: 'TESCOM 2200TW',
      is_110v_socket: true,
      is_220v_socket: false,
      is_air_conditioning: true,
      is_bath_set: true,
      is_bathrobes: false,
      is_bathtub: true,
      is_both_side_socket_of_bedside: true,
      is_clothes_rack: true,
      is_coffie_maker: false,
      is_crib_available: true,
      is_electric_kettle: true,
      is_extra_bed_availale: false,
      is_glass_bottled_water: false,
      is_hairdryer: true,
      is_heating: false,
      is_hot_tub: false,
      is_instant_coffee: true,
      is_japanese_toilet: true,
      is_kitchenette: false,
      is_lead_free_faucet: true,
      is_linens: true,
      is_low_blue_lights_lamp: true,
      is_microwave: false,
      is_minibar: false,
      is_optional_pilow: true,
      is_private_bathroom: true,
      is_refrigerator: true,
      is_safty_locker: false,
      is_slippers: true,
      is_soundproof: true,
      is_tea_bag: true,
      is_toilet_paper: true,
      is_toiletries: true,
      is_towels: true,
      is_tv: true,
      is_universal_socket: true,
      is_wake_up_service: true,
      is_wifi: true,
      is_wifi_free: true,
      is_wired_internet: false,
      is_wired_internet_free: false,
      baby_facilities: [
        BabyFacilityEnum.BABY_BOTTLE_STERILIZER,
        BabyFacilityEnum.BABY_CRIB,
        BabyFacilityEnum.BABY_BATHTUB
      ],
      photos: [
        {
          image: 'https://h-img3.cloudbeds.com/217575/ajmh0fl4_featured~~640ab1751c580.jpg',
          thumb: 'https://h-img3.cloudbeds.com/217575/ajmh0fl4_thumb~~640ab1755e33f.jpg'
        },
        {
          image: 'https://h-img3.cloudbeds.com/217575/i7xbqmyd_gallery~~640ab18bd88ef.jpg',
          thumb: 'https://h-img2.cloudbeds.com/217575/i7xbqmyd_thumb~~640ab18c2ac18.jpg'
        },
        {
          image: 'https://h-img2.cloudbeds.com/217575/dx4zxagv_gallery~~640ab0c2a4454.jpg',
          thumb: 'https://h-img1.cloudbeds.com/217575/dx4zxagv_thumb~~640ab0c2cff30.jpg'
        }
      ],
      pilow_type: [
        {
          code: PillowTypeEnum.SOFT,
          name: '軟枕'
        },
        {
          code: PillowTypeEnum.MEDIUM,
          name: '硬度適中枕'
        },
        {
          code: PillowTypeEnum.FIRM,
          name: '較具支撐力枕'
        }
      ],
      room_size: 24,
      room_size_unit: '平方公尺',
      room_type_id: '464352',
      room_type_name: '四人家庭房 (兩張雙人床)',
      tv_casting: [TvCastingEnum.CHROMECAST, TvCastingEnum.AIRPLAY, TvCastingEnum.DLNA],
      tv_content: [
        TvContentEnum.NETFLIX_APP,
        TvContentEnum.AMAZON_PRIME_VIDEO_APP,
        TvContentEnum.APPLE_TV_APP,
        TvContentEnum.DISNEY_PLUS_APP,
        TvContentEnum.IQIYI_APP,
        TvContentEnum.FREE_CABLE_TV,
        TvContentEnum.FREE_MOVIES_ON_DEMAND,
        TvContentEnum.FREE_PORN_MOVIES_ON_DEMAND
      ],
      tv_resolution: TvResolutionEnum._4K,
      tv_size: 70,
      view_types: [
        {
          code: RoomViewCodeEnum.CITY_VIEW,
          name: '城市景觀'
        },
        {
          code: RoomViewCodeEnum.PARTIAL_NO_VIEW,
          name: '部分房間無窗'
        }
      ],
      wifi_description: '免費WiFi',
      wifi_max_download_speed: 300,
      wifi_max_upload_speed: 300,
      wifi_specifications: 'WiFi 5'
    },
    '472669': {
      bath_set_brand: '上山採藥',
      beds_included: [
        {
          code: BedCodeEnum.DOUBLE,
          name: '雙人床',
          quantity: 1
        }
      ],
      floor_type: [FloorTypeEnum.SPC],
      hairdryer_type: 'TESCOM 2200TW',
      is_110v_socket: true,
      is_220v_socket: false,
      is_air_conditioning: true,
      is_bath_set: true,
      is_bathrobes: false,
      is_bathtub: true,
      is_both_side_socket_of_bedside: true,
      is_clothes_rack: true,
      is_coffie_maker: false,
      is_crib_available: true,
      is_electric_kettle: true,
      is_extra_bed_availale: false,
      is_glass_bottled_water: false,
      is_hairdryer: true,
      is_heating: false,
      is_hot_tub: false,
      is_instant_coffee: true,
      is_japanese_toilet: true,
      is_kitchenette: false,
      is_lead_free_faucet: true,
      is_linens: true,
      is_low_blue_lights_lamp: true,
      is_microwave: false,
      is_minibar: false,
      is_optional_pilow: true,
      is_private_bathroom: true,
      is_refrigerator: true,
      is_safty_locker: false,
      is_slippers: true,
      is_soundproof: true,
      is_tea_bag: true,
      is_toilet_paper: true,
      is_toiletries: true,
      is_towels: true,
      is_tv: true,
      is_universal_socket: true,
      is_wake_up_service: true,
      is_wifi: true,
      is_wifi_free: true,
      is_wired_internet: false,
      is_wired_internet_free: false,
      baby_facilities: [
        BabyFacilityEnum.BABY_BOTTLE_STERILIZER,
        BabyFacilityEnum.BABY_CRIB,
        BabyFacilityEnum.BABY_BATHTUB
      ],
      photos: [
        {
          image: 'https://h-img2.cloudbeds.com/217575/jzxxf3cu_featured~~640ab0438fcd0.jpg',
          thumb: 'https://h-img3.cloudbeds.com/217575/jzxxf3cu_thumb~~640ab043d0765.jpg'
        },
        {
          image: 'https://h-img2.cloudbeds.com/217575/rkagp6l5_gallery~~640ab063b83f8.jpg',
          thumb: 'https://h-img1.cloudbeds.com/217575/rkagp6l5_thumb~~640ab0640819c.jpg'
        },
        {
          image: 'https://h-img1.cloudbeds.com/217575/gkwwsnxs_gallery~~640ab06b010e1.jpg',
          thumb: 'https://h-img1.cloudbeds.com/217575/gkwwsnxs_thumb~~640ab06b559af.jpg'
        },
        {
          image: 'https://h-img1.cloudbeds.com/217575/xpne79yc_gallery~~640ab06f34e6b.jpg',
          thumb: 'https://h-img2.cloudbeds.com/217575/xpne79yc_thumb~~640ab06f72bb4.jpg'
        }
      ],
      pilow_type: [
        {
          code: PillowTypeEnum.SOFT,
          name: '軟枕'
        },
        {
          code: PillowTypeEnum.MEDIUM,
          name: '硬度適中枕'
        },
        {
          code: PillowTypeEnum.FIRM,
          name: '較具支撐力枕'
        }
      ],
      room_size: 24,
      room_size_unit: '平方公尺',
      room_type_id: '472669',
      room_type_name: 'Deluxe Double',
      tv_casting: [TvCastingEnum.CHROMECAST, TvCastingEnum.AIRPLAY, TvCastingEnum.DLNA],
      tv_content: [
        TvContentEnum.NETFLIX_APP,
        TvContentEnum.AMAZON_PRIME_VIDEO_APP,
        TvContentEnum.APPLE_TV_APP,
        TvContentEnum.DISNEY_PLUS_APP,
        TvContentEnum.IQIYI_APP,
        TvContentEnum.FREE_CABLE_TV,
        TvContentEnum.FREE_MOVIES_ON_DEMAND,
        TvContentEnum.FREE_PORN_MOVIES_ON_DEMAND
      ],
      tv_resolution: TvResolutionEnum._4K,
      tv_size: 70,
      view_types: [
        {
          code: RoomViewCodeEnum.CITY_VIEW,
          name: '城市景觀'
        },
        {
          code: RoomViewCodeEnum.PARTIAL_NO_VIEW,
          name: '部分房間無窗'
        }
      ],
      wifi_description: '免費WiFi',
      wifi_max_download_speed: 300,
      wifi_max_upload_speed: 300,
      wifi_specifications: 'WiFi 5'
    },
    '475906': {
      bath_set_brand: '上山採藥',
      beds_included: [
        {
          code: BedCodeEnum.DOUBLE,
          name: '雙人床',
          quantity: 1
        },
        {
          code: BedCodeEnum.SINGLE_SOFA_BED,
          name: '單人沙發床',
          quantity: 1
        }
      ],
      floor_type: [FloorTypeEnum.SPC],
      hairdryer_type: 'TESCOM 2200TW',
      is_110v_socket: true,
      is_220v_socket: false,
      is_air_conditioning: true,
      is_bath_set: true,
      is_bathrobes: false,
      is_bathtub: true,
      is_both_side_socket_of_bedside: true,
      is_clothes_rack: true,
      is_coffie_maker: false,
      is_crib_available: true,
      is_electric_kettle: true,
      is_extra_bed_availale: false,
      is_glass_bottled_water: false,
      is_hairdryer: true,
      is_heating: false,
      is_hot_tub: false,
      is_instant_coffee: true,
      is_japanese_toilet: true,
      is_kitchenette: false,
      is_lead_free_faucet: true,
      is_linens: true,
      is_low_blue_lights_lamp: true,
      is_microwave: false,
      is_minibar: false,
      is_optional_pilow: true,
      is_private_bathroom: true,
      is_refrigerator: true,
      is_safty_locker: false,
      is_slippers: true,
      is_soundproof: true,
      is_tea_bag: true,
      is_toilet_paper: true,
      is_toiletries: true,
      is_towels: true,
      is_tv: true,
      is_universal_socket: true,
      is_wake_up_service: true,
      is_wifi: true,
      is_wifi_free: true,
      is_wired_internet: false,
      is_wired_internet_free: false,
      baby_facilities: [
        BabyFacilityEnum.BABY_BOTTLE_STERILIZER,
        BabyFacilityEnum.BABY_CRIB,
        BabyFacilityEnum.BABY_BATHTUB
      ],
      photos: [
        {
          image:
            'https://h-img3.cloudbeds.com/uploads/217575/img20230518150950_featured~~64acc4dd88a9b.jpg',
          thumb:
            'https://h-img2.cloudbeds.com/uploads/217575/img20230518150950_thumb~~64acc4ddbd065.jpg'
        }
      ],
      pilow_type: [
        {
          code: PillowTypeEnum.SOFT,
          name: '軟枕'
        },
        {
          code: PillowTypeEnum.MEDIUM,
          name: '硬度適中枕'
        },
        {
          code: PillowTypeEnum.FIRM,
          name: '較具支撐力枕'
        }
      ],
      room_size: 24,
      room_size_unit: '平方公尺',
      room_type_id: '475906',
      room_type_name: '3 people - Sofa Bed extention Room',
      tv_casting: [TvCastingEnum.CHROMECAST, TvCastingEnum.AIRPLAY, TvCastingEnum.DLNA],
      tv_content: [
        TvContentEnum.NETFLIX_APP,
        TvContentEnum.AMAZON_PRIME_VIDEO_APP,
        TvContentEnum.APPLE_TV_APP,
        TvContentEnum.DISNEY_PLUS_APP,
        TvContentEnum.IQIYI_APP,
        TvContentEnum.FREE_CABLE_TV,
        TvContentEnum.FREE_MOVIES_ON_DEMAND,
        TvContentEnum.FREE_PORN_MOVIES_ON_DEMAND
      ],
      tv_resolution: TvResolutionEnum._4K,
      tv_size: 70,
      view_types: [
        {
          code: RoomViewCodeEnum.CITY_VIEW,
          name: '城市景觀'
        },
        {
          code: RoomViewCodeEnum.PARTIAL_NO_VIEW,
          name: '部分房間無窗'
        }
      ],
      wifi_description: '免費WiFi',
      wifi_max_download_speed: 300,
      wifi_max_upload_speed: 300,
      wifi_specifications: 'WiFi 5'
    },
    '475909': {
      bath_set_brand: '上山採藥',
      beds_included: [
        {
          code: BedCodeEnum.DOUBLE,
          name: '雙人床',
          quantity: 1
        },
        {
          code: BedCodeEnum.DOUBLE_SOFA_BED,
          name: '雙人沙發床',
          quantity: 1
        }
      ],
      floor_type: [FloorTypeEnum.SPC],
      hairdryer_type: 'TESCOM 2200TW',
      is_110v_socket: true,
      is_220v_socket: false,
      is_air_conditioning: true,
      is_bath_set: true,
      is_bathrobes: false,
      is_bathtub: true,
      is_both_side_socket_of_bedside: true,
      is_clothes_rack: true,
      is_coffie_maker: false,
      is_crib_available: true,
      is_electric_kettle: true,
      is_extra_bed_availale: false,
      is_glass_bottled_water: false,
      is_hairdryer: true,
      is_heating: false,
      is_hot_tub: false,
      is_instant_coffee: true,
      is_japanese_toilet: true,
      is_kitchenette: false,
      is_lead_free_faucet: true,
      is_linens: true,
      is_low_blue_lights_lamp: true,
      is_microwave: false,
      is_minibar: false,
      is_optional_pilow: true,
      is_private_bathroom: true,
      is_refrigerator: true,
      is_safty_locker: false,
      is_slippers: true,
      is_soundproof: true,
      is_tea_bag: true,
      is_toilet_paper: true,
      is_toiletries: true,
      is_towels: true,
      is_tv: true,
      is_universal_socket: true,
      is_wake_up_service: true,
      is_wifi: true,
      is_wifi_free: true,
      is_wired_internet: false,
      is_wired_internet_free: false,
      baby_facilities: [
        BabyFacilityEnum.BABY_BOTTLE_STERILIZER,
        BabyFacilityEnum.BABY_CRIB,
        BabyFacilityEnum.BABY_BATHTUB
      ],
      photos: [
        {
          image: 'https://h-img2.cloudbeds.com/217575/dn1c2xiv_featured~~640ab1c0dabae.jpg',
          thumb: 'https://h-img3.cloudbeds.com/217575/dn1c2xiv_thumb~~640ab1c120b0f.jpg'
        },
        {
          image: 'https://h-img2.cloudbeds.com/217575/6bsdsjrn_gallery~~640ab1cbd63ad.jpg',
          thumb: 'https://h-img3.cloudbeds.com/217575/6bsdsjrn_thumb~~640ab1cc1ec85.jpg'
        },
        {
          image: 'https://h-img3.cloudbeds.com/217575/gnxdpivj_gallery~~640ab1dd0eb39.jpg',
          thumb: 'https://h-img1.cloudbeds.com/217575/gnxdpivj_thumb~~640ab1dd5458a.jpg'
        },
        {
          image: 'https://h-img3.cloudbeds.com/217575/mhzusres_gallery~~640ab1e98508c.jpg',
          thumb: 'https://h-img2.cloudbeds.com/217575/mhzusres_thumb~~640ab1e9bedad.jpg'
        },
        {
          image: 'https://h-img2.cloudbeds.com/217575/dx4zxagv_gallery~~640ab1f11db08.jpg',
          thumb: 'https://h-img2.cloudbeds.com/217575/dx4zxagv_thumb~~640ab1f155277.jpg'
        }
      ],
      pilow_type: [
        {
          code: PillowTypeEnum.SOFT,
          name: '軟枕'
        },
        {
          code: PillowTypeEnum.MEDIUM,
          name: '硬度適中枕'
        },
        {
          code: PillowTypeEnum.FIRM,
          name: '較具支撐力枕'
        }
      ],
      room_size: 24,
      room_size_unit: '平方公尺',
      room_type_id: '475909',
      room_type_name: '4 People Sofa Bed extention Room',
      tv_casting: [TvCastingEnum.CHROMECAST, TvCastingEnum.AIRPLAY, TvCastingEnum.DLNA],
      tv_content: [
        TvContentEnum.NETFLIX_APP,
        TvContentEnum.AMAZON_PRIME_VIDEO_APP,
        TvContentEnum.APPLE_TV_APP,
        TvContentEnum.DISNEY_PLUS_APP,
        TvContentEnum.IQIYI_APP,
        TvContentEnum.FREE_CABLE_TV,
        TvContentEnum.FREE_MOVIES_ON_DEMAND,
        TvContentEnum.FREE_PORN_MOVIES_ON_DEMAND
      ],
      tv_resolution: TvResolutionEnum._4K,
      tv_size: 70,
      view_types: [
        {
          code: RoomViewCodeEnum.CITY_VIEW,
          name: '城市景觀'
        },
        {
          code: RoomViewCodeEnum.PARTIAL_NO_VIEW,
          name: '部分房間無窗'
        }
      ],
      wifi_description: '免費WiFi',
      wifi_max_download_speed: 300,
      wifi_max_upload_speed: 300,
      wifi_specifications: 'WiFi 5'
    },
    '474094': {
      bath_set_brand: '上山採藥',
      beds_included: [
        {
          code: BedCodeEnum.DOUBLE,
          name: '雙人床',
          quantity: 1
        }
      ],
      floor_type: [FloorTypeEnum.SPC],
      hairdryer_type: 'TESCOM 2200TW',
      is_110v_socket: true,
      is_220v_socket: false,
      is_air_conditioning: true,
      is_bath_set: true,
      is_bathrobes: false,
      is_bathtub: true,
      is_both_side_socket_of_bedside: true,
      is_clothes_rack: true,
      is_coffie_maker: false,
      is_crib_available: true,
      is_electric_kettle: true,
      is_extra_bed_availale: false,
      is_glass_bottled_water: false,
      is_hairdryer: true,
      is_heating: false,
      is_hot_tub: false,
      is_instant_coffee: true,
      is_japanese_toilet: true,
      is_kitchenette: false,
      is_lead_free_faucet: true,
      is_linens: true,
      is_low_blue_lights_lamp: true,
      is_microwave: false,
      is_minibar: false,
      is_optional_pilow: true,
      is_private_bathroom: true,
      is_refrigerator: true,
      is_safty_locker: false,
      is_slippers: true,
      is_soundproof: true,
      is_tea_bag: true,
      is_toilet_paper: true,
      is_toiletries: true,
      is_towels: true,
      is_tv: true,
      is_universal_socket: true,
      is_wake_up_service: true,
      is_wifi: true,
      is_wifi_free: true,
      is_wired_internet: false,
      is_wired_internet_free: false,
      baby_facilities: [
        BabyFacilityEnum.BABY_BOTTLE_STERILIZER,
        BabyFacilityEnum.BABY_CRIB,
        BabyFacilityEnum.BABY_BATHTUB
      ],
      photos: [
        {
          image: 'https://h-img2.cloudbeds.com/217575/xjg3hoyu_featured~~640aaee494d31.jpg',
          thumb: 'https://h-img2.cloudbeds.com/217575/xjg3hoyu_thumb~~640aaee4d02f7.jpg'
        },
        {
          image: 'https://h-img3.cloudbeds.com/217575/7lfmrgxs_gallery~~640aaf015a0c6.jpg',
          thumb: 'https://h-img1.cloudbeds.com/217575/7lfmrgxs_thumb~~640aaf019d144.jpg'
        },
        {
          image: 'https://h-img1.cloudbeds.com/217575/dx4zxagv_gallery~~640aaf15698dc.jpg',
          thumb: 'https://h-img2.cloudbeds.com/217575/dx4zxagv_thumb~~640aaf15a3cd7.jpg'
        },
        {
          image: 'https://h-img3.cloudbeds.com/217575/vo4wxzv9_gallery~~640aaf39f36ca.jpg',
          thumb: 'https://h-img2.cloudbeds.com/217575/vo4wxzv9_thumb~~640aaf3a447b3.jpg'
        }
      ],
      pilow_type: [
        {
          code: PillowTypeEnum.SOFT,
          name: '軟枕'
        },
        {
          code: PillowTypeEnum.MEDIUM,
          name: '硬度適中枕'
        },
        {
          code: PillowTypeEnum.FIRM,
          name: '較具支撐力枕'
        }
      ],
      room_size: 24,
      room_size_unit: '平方公尺',
      room_type_id: '431074',
      room_type_name: 'Standard Double',
      tv_casting: [TvCastingEnum.CHROMECAST, TvCastingEnum.AIRPLAY, TvCastingEnum.DLNA],
      tv_content: [
        TvContentEnum.NETFLIX_APP,
        TvContentEnum.AMAZON_PRIME_VIDEO_APP,
        TvContentEnum.APPLE_TV_APP,
        TvContentEnum.DISNEY_PLUS_APP,
        TvContentEnum.IQIYI_APP,
        TvContentEnum.FREE_CABLE_TV,
        TvContentEnum.FREE_MOVIES_ON_DEMAND,
        TvContentEnum.FREE_PORN_MOVIES_ON_DEMAND
      ],
      tv_resolution: TvResolutionEnum._4K,
      tv_size: 70,
      view_types: [
        {
          code: RoomViewCodeEnum.CITY_VIEW,
          name: '城市景觀'
        },
        {
          code: RoomViewCodeEnum.PARTIAL_NO_VIEW,
          name: '部分房間無窗'
        }
      ],
      wifi_description: '免費WiFi',
      wifi_max_download_speed: 300,
      wifi_max_upload_speed: 300,
      wifi_specifications: 'WiFi 5'
    },
    '513155': {
      bath_set_brand: '上山採藥',
      beds_included: [
        {
          code: BedCodeEnum.DOUBLE,
          name: '雙人床',
          quantity: 1
        }
      ],
      floor_type: [FloorTypeEnum.SPC],
      hairdryer_type: 'TESCOM 2200TW',
      is_110v_socket: true,
      is_220v_socket: false,
      is_air_conditioning: true,
      is_bath_set: true,
      is_bathrobes: false,
      is_bathtub: true,
      is_both_side_socket_of_bedside: true,
      is_clothes_rack: true,
      is_coffie_maker: false,
      is_crib_available: true,
      is_electric_kettle: true,
      is_extra_bed_availale: false,
      is_glass_bottled_water: false,
      is_hairdryer: true,
      is_heating: false,
      is_hot_tub: false,
      is_instant_coffee: true,
      is_japanese_toilet: true,
      is_kitchenette: false,
      is_lead_free_faucet: true,
      is_linens: true,
      is_low_blue_lights_lamp: true,
      is_microwave: false,
      is_minibar: false,
      is_optional_pilow: true,
      is_private_bathroom: true,
      is_refrigerator: true,
      is_safty_locker: false,
      is_slippers: true,
      is_soundproof: true,
      is_tea_bag: true,
      is_toilet_paper: true,
      is_toiletries: true,
      is_towels: true,
      is_tv: true,
      is_universal_socket: true,
      is_wake_up_service: true,
      is_wifi: true,
      is_wifi_free: true,
      is_wired_internet: false,
      is_wired_internet_free: false,
      baby_facilities: [
        BabyFacilityEnum.BABY_BOTTLE_STERILIZER,
        BabyFacilityEnum.BABY_CRIB,
        BabyFacilityEnum.BABY_BATHTUB
      ],
      photos: [
        {
          image: 'https://h-img2.cloudbeds.com/217575/xjg3hoyu_featured~~640aaee494d31.jpg',
          thumb: 'https://h-img2.cloudbeds.com/217575/xjg3hoyu_thumb~~640aaee4d02f7.jpg'
        },
        {
          image: 'https://h-img3.cloudbeds.com/217575/7lfmrgxs_gallery~~640aaf015a0c6.jpg',
          thumb: 'https://h-img1.cloudbeds.com/217575/7lfmrgxs_thumb~~640aaf019d144.jpg'
        },
        {
          image: 'https://h-img1.cloudbeds.com/217575/dx4zxagv_gallery~~640aaf15698dc.jpg',
          thumb: 'https://h-img2.cloudbeds.com/217575/dx4zxagv_thumb~~640aaf15a3cd7.jpg'
        },
        {
          image: 'https://h-img3.cloudbeds.com/217575/vo4wxzv9_gallery~~640aaf39f36ca.jpg',
          thumb: 'https://h-img2.cloudbeds.com/217575/vo4wxzv9_thumb~~640aaf3a447b3.jpg'
        }
      ],
      pilow_type: [
        {
          code: PillowTypeEnum.SOFT,
          name: '軟枕'
        },
        {
          code: PillowTypeEnum.MEDIUM,
          name: '硬度適中枕'
        },
        {
          code: PillowTypeEnum.FIRM,
          name: '較具支撐力枕'
        }
      ],
      room_size: 24,
      room_size_unit: '平方公尺',
      room_type_id: '431074',
      room_type_name: 'Standard Double',
      tv_casting: [TvCastingEnum.CHROMECAST, TvCastingEnum.AIRPLAY, TvCastingEnum.DLNA],
      tv_content: [
        TvContentEnum.NETFLIX_APP,
        TvContentEnum.AMAZON_PRIME_VIDEO_APP,
        TvContentEnum.APPLE_TV_APP,
        TvContentEnum.DISNEY_PLUS_APP,
        TvContentEnum.IQIYI_APP,
        TvContentEnum.FREE_CABLE_TV,
        TvContentEnum.FREE_MOVIES_ON_DEMAND,
        TvContentEnum.FREE_PORN_MOVIES_ON_DEMAND
      ],
      tv_resolution: TvResolutionEnum._4K,
      tv_size: 70,
      view_types: [
        {
          code: RoomViewCodeEnum.CITY_VIEW,
          name: '城市景觀'
        },
        {
          code: RoomViewCodeEnum.PARTIAL_NO_VIEW,
          name: '部分房間無窗'
        }
      ],
      wifi_description: '免費WiFi',
      wifi_max_download_speed: 300,
      wifi_max_upload_speed: 300,
      wifi_specifications: 'WiFi 5'
    }
  },
  the_fine_print: [
    '請注意，為保障預訂資格，飯店有權向所提供的信用卡行使預授權。',
    '客人需在辦理入住時出示附照片的身份證明文件和信用卡。',
    '請注意，特殊要求將視實際狀況安排，有可能會產生額外費用。',
    '附設停車位有限高且數量有限，採預約制，額滿為止。請致電飯店以了解詳情。'
  ]
}

export default [
  // 列表接口
  {
    url: '/mock/property/getProperties',
    method: 'get',
    response: () => {
      // response: ({ query }) => {
      //   const { pageIndex, pageSize } = query

      return {
        success: true,
        data: [MockHotelDetail]
      }
    }
  },
  {
    url: '/mock/property/getProperty',
    method: 'get',
    response: () => {
      // response: ({ query }) => {
      //   const { pageIndex, pageSize } = query

      return {
        success: true,
        data: MockHotelDetail
      }
    }
  }
  // 登录接口
  //   {
  //     url: '/mock/user/login',
  //     method: 'post',
  //     timeout,
  //     response: ({ body }) => {
  //       const data = body
  //       let hasUser = false
  //       for (const user of List) {
  //         if (user.username === data.username && user.password === data.password) {
  //           hasUser = true
  //           return {
  //             code: SUCCESS_CODE,
  //             data: user
  //           }
  //         }
  //       }
  //       if (!hasUser) {
  //         return {
  //           code: 500,
  //           message: '账号或密码错误'
  //         }
  //       }
  //     }
  //   },
  //   // 退出接口
  //   {
  //     url: '/mock/user/loginOut',
  //     method: 'get',
  //     timeout,
  //     response: () => {
  //       return {
  //         code: SUCCESS_CODE,
  //         data: null
  //       }
  //     }
  //   }
]
