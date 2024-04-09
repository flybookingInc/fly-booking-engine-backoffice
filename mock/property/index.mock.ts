// import { UserMeta } from '@/api/login/types'
// import { SUCCESS_CODE } from '@/constants'
// import { AppRoleEnum, RoleEnum } from '@/enums/roleEnum'
import {
  AmenitiesEnum,
  BeforeAfterEnum,
  CreditCardTypeEnum,
  CurrencyCodeEnum,
  HourEnum,
  PetPolicyEnum,
  ServicesEnum,
  TimeIntervalEnum,
  ValueOrPercentEnum
} from '@/types/enums/dataStore'
import { LanguageCodeEnum } from '@/types/enums/languageCode'
import { HotelDetails } from '@/types/stores/property'
import { MockRatePlanDetails } from 'mock/ratePlan/index.mock'
import { MockRoomTypeDetails } from 'mock/roomType/index.mock'

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
  available_languages: [LanguageCodeEnum.ZH_TW, LanguageCodeEnum.EN, LanguageCodeEnum.ZH_CN],
  services: [
    ServicesEnum.AIRPORT_TRANSFER,
    ServicesEnum.BABYSITTING,
    ServicesEnum.CONCIERGE,
    ServicesEnum.CURRENCY_EXCHANGE,
    ServicesEnum.DAILY_HOUSEKEEPING,
    ServicesEnum.DRY_CLEANING,
    ServicesEnum.LAUNDRY_SERVICE,
    ServicesEnum.LUGGAGE_STORAGE,
    ServicesEnum.ROOM_SERVICE,
    ServicesEnum.SAFETY_DEPOSIT_BOX,
    ServicesEnum.SELF_CHECKIN,
    ServicesEnum.SHUTTLE_SERVICE,
    ServicesEnum.TAXI_SERVICE,
    ServicesEnum.FREE_TOURS
  ],
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
  amenities: [
    AmenitiesEnum.ACCESSIBILITY_PARKING,
    AmenitiesEnum.BAR,
    AmenitiesEnum.ELEVATOR,
    AmenitiesEnum.FREE_WIFI_IN_PUBLIC_AREAS,
    AmenitiesEnum.GYM,
    AmenitiesEnum.NO_SMOKING_ROOMS,
    AmenitiesEnum.SPA,
    AmenitiesEnum.OUTDOOR_SWIMMING_POOL,
    AmenitiesEnum.PARKING,
    AmenitiesEnum.RESTAURANTS,
    AmenitiesEnum.SMOKING_AREA
  ],
  currency: {
    currency_code: CurrencyCodeEnum.TWD,
    currency_position: BeforeAfterEnum.BEFORE
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
        available_card: [CreditCardTypeEnum.VISA, CreditCardTypeEnum.MASTER],
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
    infant_amenities_policy: ['須事先預約'],
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
    default_cancellation_policy_notes: [''],
    booking_policy: {
      allow_same_day_reservations: true,
      same_day_reservations_deadline: HourEnum._NOT_SET,
      allow_previous_day_reservations: true,
      previous_day_reservations_deadline: HourEnum._06_OCLOCK
    },
    infants_age_limit: 2,
    parking_policy: ['須事先預約'],
    terms_and_conditions: ['入住須攜帶有相片之身分證件']
  },
  property_id: 'test',
  rate_plan_details: MockRatePlanDetails,
  room_type_details: MockRoomTypeDetails,
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
  },
  {
    url: '/mock/property/putProperty',
    method: 'put',
    response: ({ query }) => {
      const { data } = query

      return {
        success: true,
        data: data
      }
    }
  },
  {
    url: '/mock/property/postProperty',
    method: 'post',
    response: ({ query }) => {
      const { data } = query

      return {
        success: true,
        data: data
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
