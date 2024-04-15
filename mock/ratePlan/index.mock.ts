// import { UserMeta } from '@/api/login/types'
// import { SUCCESS_CODE } from '@/constants'
// import { AppRoleEnum, RoleEnum } from '@/enums/roleEnum'
import {
  RatePlanStatusEnum,
  PriceUnitEnum,
  ValueOrPercentEnum,
  RatePlanAllowedEnum,
  RatePlanIncludedEnum
} from '@/types/enums/dataStore'
import { RatePlanDetail } from '@/types/stores/property'

// mock hotelDetail Data
export const MockRatePlanDetails: RatePlanDetail[] = [
  {
    allowed: [RatePlanAllowedEnum.CHILDREN, RatePlanAllowedEnum.INFANTS],
    allowed_notes: ['12歲以下兒童不占床免費'],
    included: [RatePlanIncludedEnum.BREAKFAST, RatePlanIncludedEnum.DINNER],
    included_notes: ['含兩客早餐、兩客晚餐'],

    room_type_id: '431074',
    packages: [
      {
        is_included: true,
        price_unit: PriceUnitEnum.PER_STAY,
        image: [
          {
            image: 'https://via.placeholder.com/150',
            thumb: 'https://via.placeholder.com/150'
          }
        ],
        code: 'breakfast',
        quantity: 1,
        price: 0,
        name: '早餐',
        description: '早餐'
      }
    ],
    rate_plan_name: 'default',
    max_infants: 1,
    max_adults: 2,
    rate_plan_id: '1274032',
    pms_rate_plan_id: '1274032',
    max_children: 1,
    max_extra_beds: 0,
    status: RatePlanStatusEnum.ACTIVED
  },
  {
    allowed: [RatePlanAllowedEnum.CHILDREN, RatePlanAllowedEnum.INFANTS],
    allowed_notes: ['12歲以下兒童不占床免費'],
    included: [RatePlanIncludedEnum.BREAKFAST, RatePlanIncludedEnum.DINNER],
    included_notes: ['含兩客早餐、兩客晚餐'],

    room_type_id: '431129',
    packages: [
      {
        is_included: true,
        price_unit: PriceUnitEnum.PER_STAY,
        image: [
          {
            image: 'https://via.placeholder.com/150',
            thumb: 'https://via.placeholder.com/150'
          }
        ],
        code: 'breakfast',
        quantity: 1,
        price: 0,
        name: '早餐',
        description: '早餐'
      }
    ],

    rate_plan_name: 'default',
    max_infants: 1,

    max_adults: 2,
    rate_plan_id: '1274306',
    pms_rate_plan_id: '1274306',

    max_children: 1,
    max_extra_beds: 0,
    status: RatePlanStatusEnum.ACTIVED
  },
  {
    allowed: [RatePlanAllowedEnum.CHILDREN, RatePlanAllowedEnum.INFANTS],
    allowed_notes: ['12歲以下兒童不占床免費'],
    included: [RatePlanIncludedEnum.BREAKFAST, RatePlanIncludedEnum.DINNER],
    included_notes: ['含兩客早餐、兩客晚餐'],

    room_type_id: '464349',
    packages: [
      {
        is_included: true,
        price_unit: PriceUnitEnum.PER_STAY,
        image: [
          {
            image: 'https://via.placeholder.com/150',
            thumb: 'https://via.placeholder.com/150'
          }
        ],
        code: 'breakfast',
        quantity: 1,
        price: 0,
        name: '早餐',
        description: '早餐'
      }
    ],

    rate_plan_name: 'default',
    max_infants: 1,

    max_adults: 1,
    rate_plan_id: '1380586',
    pms_rate_plan_id: '1380586',

    max_children: 0,
    max_extra_beds: 0,
    status: RatePlanStatusEnum.ACTIVED
  },
  {
    allowed: [RatePlanAllowedEnum.CHILDREN, RatePlanAllowedEnum.INFANTS],
    allowed_notes: ['12歲以下兒童不占床免費'],
    included: [RatePlanIncludedEnum.BREAKFAST, RatePlanIncludedEnum.DINNER],
    included_notes: ['含兩客早餐、兩客晚餐'],

    room_type_id: '464352',
    packages: [
      {
        is_included: true,
        price_unit: PriceUnitEnum.PER_STAY,
        image: [
          {
            image: 'https://via.placeholder.com/150',
            thumb: 'https://via.placeholder.com/150'
          }
        ],
        code: 'breakfast',
        quantity: 1,
        price: 0,
        name: '早餐',
        description: '早餐'
      }
    ],

    rate_plan_name: 'default',
    max_infants: 1,

    max_adults: 4,
    rate_plan_id: '1380589',
    pms_rate_plan_id: '1380589',

    max_children: 0,
    max_extra_beds: 0,
    status: RatePlanStatusEnum.ACTIVED
  },
  {
    allowed: [RatePlanAllowedEnum.CHILDREN, RatePlanAllowedEnum.INFANTS],
    allowed_notes: ['12歲以下兒童不占床免費'],
    included: [RatePlanIncludedEnum.BREAKFAST, RatePlanIncludedEnum.DINNER],
    included_notes: ['含兩客早餐、兩客晚餐'],

    room_type_id: '472669',
    packages: [
      {
        is_included: true,
        price_unit: PriceUnitEnum.PER_STAY,
        image: [
          {
            image: 'https://via.placeholder.com/150',
            thumb: 'https://via.placeholder.com/150'
          }
        ],
        code: 'breakfast',
        quantity: 1,
        price: 0,
        name: '早餐',
        description: '早餐'
      }
    ],

    rate_plan_name: 'default',
    max_infants: 1,

    max_adults: 2,
    rate_plan_id: '1406349',
    pms_rate_plan_id: '1406349',

    max_children: 1,
    max_extra_beds: 0,
    status: RatePlanStatusEnum.ACTIVED
  },
  {
    allowed: [RatePlanAllowedEnum.CHILDREN, RatePlanAllowedEnum.INFANTS],
    allowed_notes: ['12歲以下兒童不占床免費'],
    included: [RatePlanIncludedEnum.BREAKFAST, RatePlanIncludedEnum.DINNER],
    included_notes: ['含兩客早餐、兩客晚餐'],
    room_type_id: '474094',
    packages: [
      {
        is_included: true,
        price_unit: PriceUnitEnum.PER_STAY,
        image: [
          {
            image: 'https://via.placeholder.com/150',
            thumb: 'https://via.placeholder.com/150'
          }
        ],
        code: 'breakfast',
        quantity: 1,
        price: 0,
        name: '早餐',
        description: '早餐'
      }
    ],
    rate_plan_name: 'default',
    max_infants: 1,
    cancellation_policy: [
      {
        penalty_value: 0,
        days_before_checkin: 3,
        penalty_type: ValueOrPercentEnum.PERCENT
      },
      {
        penalty_value: 50,
        days_before_checkin: 1,
        penalty_type: ValueOrPercentEnum.PERCENT
      },
      {
        penalty_value: 100,
        days_before_checkin: 0,
        penalty_type: ValueOrPercentEnum.PERCENT
      }
    ],
    max_adults: 2,
    rate_plan_id: '1411703',
    pms_rate_plan_id: '1411703',
    max_children: 0,

    max_extra_beds: 0,
    status: RatePlanStatusEnum.ACTIVED
  },
  {
    allowed: [RatePlanAllowedEnum.CHILDREN, RatePlanAllowedEnum.INFANTS],
    allowed_notes: ['12歲以下兒童不占床免費'],
    included: [RatePlanIncludedEnum.BREAKFAST, RatePlanIncludedEnum.DINNER],
    included_notes: ['含兩客早餐、兩客晚餐'],

    room_type_id: '475906',
    packages: [
      {
        is_included: true,
        price_unit: PriceUnitEnum.PER_STAY,
        image: [
          {
            image: 'https://via.placeholder.com/150',
            thumb: 'https://via.placeholder.com/150'
          }
        ],
        code: 'breakfast',
        quantity: 1,
        price: 0,
        name: '早餐',
        description: '早餐'
      }
    ],

    rate_plan_name: 'default',
    max_infants: 1,

    max_adults: 3,
    rate_plan_id: '1419131',
    pms_rate_plan_id: '1419131',

    max_children: 0,
    max_extra_beds: 0,
    status: RatePlanStatusEnum.ACTIVED
  },
  {
    allowed: [RatePlanAllowedEnum.CHILDREN, RatePlanAllowedEnum.INFANTS],
    allowed_notes: ['12歲以下兒童不占床免費'],
    included: [RatePlanIncludedEnum.BREAKFAST, RatePlanIncludedEnum.DINNER],
    included_notes: ['含兩客早餐、兩客晚餐'],

    room_type_id: '475909',
    packages: [
      {
        is_included: true,
        price_unit: PriceUnitEnum.PER_STAY,
        image: [
          {
            image: 'https://via.placeholder.com/150',
            thumb: 'https://via.placeholder.com/150'
          }
        ],
        code: 'breakfast',
        quantity: 1,
        price: 0,
        name: '早餐',
        description: '早餐'
      }
    ],

    rate_plan_name: 'default',
    max_infants: 1,

    max_adults: 4,
    rate_plan_id: '1419134',
    pms_rate_plan_id: '1419134',

    max_children: 0,
    max_extra_beds: 0,
    status: RatePlanStatusEnum.ACTIVED
  },
  {
    allowed: [RatePlanAllowedEnum.CHILDREN, RatePlanAllowedEnum.INFANTS],
    allowed_notes: ['12歲以下兒童不占床免費'],
    included: [RatePlanIncludedEnum.BREAKFAST, RatePlanIncludedEnum.DINNER],
    included_notes: ['含兩客早餐、兩客晚餐'],

    room_type_id: '513155',
    packages: [
      {
        is_included: true,
        price_unit: PriceUnitEnum.PER_STAY,
        image: [
          {
            image: 'https://via.placeholder.com/150',
            thumb: 'https://via.placeholder.com/150'
          }
        ],
        code: 'breakfast',
        quantity: 1,
        price: 0,
        name: '早餐',
        description: '早餐'
      }
    ],
    rate_plan_name: 'default',
    max_infants: 1,
    cancellation_policy: [
      {
        penalty_value: 0,
        days_before_checkin: 3,
        penalty_type: ValueOrPercentEnum.PERCENT
      },
      {
        penalty_value: 50,
        days_before_checkin: 1,
        penalty_type: ValueOrPercentEnum.PERCENT
      },
      {
        penalty_value: 100,
        days_before_checkin: 0,
        penalty_type: ValueOrPercentEnum.PERCENT
      }
    ],
    max_adults: 2,
    rate_plan_id: '1566774',
    pms_rate_plan_id: '1566774',
    max_children: 0,
    max_extra_beds: 0,
    status: RatePlanStatusEnum.ACTIVED
  }
]

export default [
  // 列表接口
  {
    url: '/mock/ratePlan/getRatePlans',
    method: 'get',
    response: () => {
      return {
        success: true,
        data: MockRatePlanDetails
      }
    }
  },
  {
    url: '/mock/ratePlan/getRatePlan',
    method: 'get',
    response: ({ query }) => {
      const { rate_plan_id } = query
      return {
        success: true,
        data: MockRatePlanDetails.find((item) => item.rate_plan_id === rate_plan_id)
      }
    }
  },
  {
    url: '/mock/ratePlan/putRatePlan',
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
    url: '/mock/ratePlan/putRatePlans',
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
    url: '/mock/ratePlan/postRatePlan',
    method: 'post',
    response: ({ query }) => {
      const { data } = query

      return {
        success: true,
        data: data
      }
    }
  },
  {
    url: '/mock/ratePlan/deleteRatePlan',
    method: 'delete',
    response: ({ query }) => {
      const { rate_plan_id } = query
      return {
        success: true,
        data: MockRatePlanDetails.find((item) => item.rate_plan_id === rate_plan_id)
      }
    }
  },
  {
    url: '/mock/ratePlan/getPmsRatePlans',
    method: 'get',
    response: () => {
      return {
        success: true,
        data: MockRatePlanDetails
      }
    }
  }
]
