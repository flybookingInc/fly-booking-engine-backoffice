// import { UserMeta } from '@/api/login/types'
// import { SUCCESS_CODE } from '@/constants'
// import { AppRoleEnum, RoleEnum } from '@/enums/roleEnum'
import {
  BedCodeEnum,
  FloorTypeEnum,
  PillowFirmnessEnum,
  PillowTypeEnum,
  RoomBathRoomFacilityEnum,
  RoomBedroomAndLaundryFacilityEnum,
  RoomEntertainmentFacilityEnum,
  RoomFacilityEnum,
  RoomFamilyFacilityEnum,
  RoomHeatingAndCoolingFacilityEnum,
  RoomInternetAndOfficeFacilityEnum,
  RoomKitchenAndDiningFacilityEnum,
  RoomSafetyFacilityEnum,
  RoomTypeStatusEnum,
  RoomViewCodeEnum,
  TvCastingEnum,
  TvContentEnum,
  TvResolutionEnum,
  WiFiSpecificationEnum,
  WifiAvailabilityEnum,
  WiredInternetAvailabilityEnum
} from '@/types/enums/dataStore'
import { RoomTypeDetail } from '@/types/stores/property'

// mock hotelDetail Data
const MockRoomTypeDetails: RoomTypeDetail[] = [
  {
    wired_internet_availability: [WiredInternetAvailabilityEnum.WIRED_INTERNET_FREE_IN_ROOM],
    facilities: {
      room_facility: Object.values(RoomFacilityEnum),
      room_notes: [],
      bathroom_facility: Object.values(RoomBathRoomFacilityEnum),
      bathroom_notes: [],
      bedroom_and_laundry_facility: Object.values(RoomBedroomAndLaundryFacilityEnum),
      bedroom_and_laundry_notes: [],
      heating_and_cooling_facility: Object.values(RoomHeatingAndCoolingFacilityEnum),
      heating_and_cooling_notes: [],
      safety_facility: Object.values(RoomSafetyFacilityEnum),
      safety_notes: [],
      internet_and_office_facility: Object.values(RoomInternetAndOfficeFacilityEnum),
      internet_and_office_notes: [],
      kitchen_and_dining_facility: Object.values(RoomKitchenAndDiningFacilityEnum),
      kitchen_and_dining_notes: [],
      family_facility: Object.values(RoomFamilyFacilityEnum),
      family_notes: [],
      entertainment_facility: Object.values(RoomEntertainmentFacilityEnum),
      entertainment_notes: []
    },
    pms_room_type_id: '431074',
    bath_set_brand: '上山採藥',
    beds_included: [
      {
        code: BedCodeEnum.DOUBLE,
        quantity: 1
      }
    ],
    floor_type: [FloorTypeEnum.SPC],
    hairdryer_type: 'TESCOM 2200TW',
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
    pillow_types: [PillowTypeEnum.MEMORY_FOAM, PillowTypeEnum.COTTON],
    pillow_firmness: [PillowFirmnessEnum.SOFT, PillowFirmnessEnum.MEDIUM, PillowFirmnessEnum.FIRM],
    room_size: 24,

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
    view_types: [RoomViewCodeEnum.CITY_VIEW, RoomViewCodeEnum.PARTIAL_NO_VIEW],
    internet_max_download_speed: 300,
    internet_max_upload_speed: 300,
    wifi_specifications: [WiFiSpecificationEnum.WIFI5, WiFiSpecificationEnum.WIFI4],
    wifi_availability: [
      WifiAvailabilityEnum.WIFI_FREE_IN_ROOM,
      WifiAvailabilityEnum.WIFI_PAID_IN_PUBLIC_AREAS
    ],
    status: RoomTypeStatusEnum.ACTIVE
  },
  {
    wired_internet_availability: [WiredInternetAvailabilityEnum.WIRED_INTERNET_FREE_IN_ROOM],
    facilities: {
      room_facility: Object.values(RoomFacilityEnum),
      room_notes: [],
      bathroom_facility: Object.values(RoomBathRoomFacilityEnum),
      bathroom_notes: [],
      bedroom_and_laundry_facility: Object.values(RoomBedroomAndLaundryFacilityEnum),
      bedroom_and_laundry_notes: [],
      heating_and_cooling_facility: Object.values(RoomHeatingAndCoolingFacilityEnum),
      heating_and_cooling_notes: [],
      safety_facility: Object.values(RoomSafetyFacilityEnum),
      safety_notes: [],
      internet_and_office_facility: Object.values(RoomInternetAndOfficeFacilityEnum),
      internet_and_office_notes: [],
      kitchen_and_dining_facility: Object.values(RoomKitchenAndDiningFacilityEnum),
      kitchen_and_dining_notes: [],
      family_facility: Object.values(RoomFamilyFacilityEnum),
      family_notes: [],
      entertainment_facility: Object.values(RoomEntertainmentFacilityEnum),
      entertainment_notes: []
    },
    pms_room_type_id: '431129',
    bath_set_brand: '上山採藥',
    beds_included: [
      {
        code: BedCodeEnum.DOUBLE,
        quantity: 1
      }
    ],
    floor_type: [FloorTypeEnum.SPC],
    hairdryer_type: 'TESCOM 2200TW',
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
    pillow_types: [PillowTypeEnum.MEMORY_FOAM, PillowTypeEnum.COTTON],
    pillow_firmness: [PillowFirmnessEnum.SOFT, PillowFirmnessEnum.MEDIUM, PillowFirmnessEnum.FIRM],
    room_size: 24,

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
    view_types: [RoomViewCodeEnum.CITY_VIEW, RoomViewCodeEnum.PARTIAL_NO_VIEW],
    internet_max_download_speed: 300,
    internet_max_upload_speed: 300,
    wifi_specifications: [WiFiSpecificationEnum.WIFI5, WiFiSpecificationEnum.WIFI4],
    wifi_availability: [
      WifiAvailabilityEnum.WIFI_FREE_IN_ROOM,
      WifiAvailabilityEnum.WIFI_PAID_IN_PUBLIC_AREAS
    ],
    status: RoomTypeStatusEnum.ACTIVE
  },
  {
    wired_internet_availability: [WiredInternetAvailabilityEnum.WIRED_INTERNET_FREE_IN_ROOM],
    facilities: {
      room_facility: Object.values(RoomFacilityEnum),
      room_notes: [],
      bathroom_facility: Object.values(RoomBathRoomFacilityEnum),
      bathroom_notes: [],
      bedroom_and_laundry_facility: Object.values(RoomBedroomAndLaundryFacilityEnum),
      bedroom_and_laundry_notes: [],
      heating_and_cooling_facility: Object.values(RoomHeatingAndCoolingFacilityEnum),
      heating_and_cooling_notes: [],
      safety_facility: Object.values(RoomSafetyFacilityEnum),
      safety_notes: [],
      internet_and_office_facility: Object.values(RoomInternetAndOfficeFacilityEnum),
      internet_and_office_notes: [],
      kitchen_and_dining_facility: Object.values(RoomKitchenAndDiningFacilityEnum),
      kitchen_and_dining_notes: [],
      family_facility: Object.values(RoomFamilyFacilityEnum),
      family_notes: [],
      entertainment_facility: Object.values(RoomEntertainmentFacilityEnum),
      entertainment_notes: []
    },
    pms_room_type_id: '464349',
    bath_set_brand: '上山採藥',
    beds_included: [
      {
        code: BedCodeEnum.SINGLE,
        quantity: 1
      }
    ],
    floor_type: [FloorTypeEnum.SPC],
    hairdryer_type: 'TESCOM 2200TW',
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
    pillow_types: [PillowTypeEnum.MEMORY_FOAM, PillowTypeEnum.COTTON],
    pillow_firmness: [PillowFirmnessEnum.SOFT, PillowFirmnessEnum.MEDIUM, PillowFirmnessEnum.FIRM],
    room_size: 24,

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
    view_types: [RoomViewCodeEnum.CITY_VIEW, RoomViewCodeEnum.PARTIAL_NO_VIEW],
    internet_max_download_speed: 300,
    internet_max_upload_speed: 300,
    wifi_specifications: [WiFiSpecificationEnum.WIFI5, WiFiSpecificationEnum.WIFI4],
    wifi_availability: [
      WifiAvailabilityEnum.WIFI_FREE_IN_ROOM,
      WifiAvailabilityEnum.WIFI_PAID_IN_PUBLIC_AREAS
    ],
    status: RoomTypeStatusEnum.ACTIVE
  },
  {
    wired_internet_availability: [WiredInternetAvailabilityEnum.WIRED_INTERNET_FREE_IN_ROOM],
    facilities: {
      room_facility: Object.values(RoomFacilityEnum),
      room_notes: [],
      bathroom_facility: Object.values(RoomBathRoomFacilityEnum),
      bathroom_notes: [],
      bedroom_and_laundry_facility: Object.values(RoomBedroomAndLaundryFacilityEnum),
      bedroom_and_laundry_notes: [],
      heating_and_cooling_facility: Object.values(RoomHeatingAndCoolingFacilityEnum),
      heating_and_cooling_notes: [],
      safety_facility: Object.values(RoomSafetyFacilityEnum),
      safety_notes: [],
      internet_and_office_facility: Object.values(RoomInternetAndOfficeFacilityEnum),
      internet_and_office_notes: [],
      kitchen_and_dining_facility: Object.values(RoomKitchenAndDiningFacilityEnum),
      kitchen_and_dining_notes: [],
      family_facility: Object.values(RoomFamilyFacilityEnum),
      family_notes: [],
      entertainment_facility: Object.values(RoomEntertainmentFacilityEnum),
      entertainment_notes: []
    },
    pms_room_type_id: '464352',
    bath_set_brand: '上山採藥',
    beds_included: [
      {
        code: BedCodeEnum.DOUBLE,
        quantity: 2
      }
    ],
    floor_type: [FloorTypeEnum.SPC],
    hairdryer_type: 'TESCOM 2200TW',
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
    pillow_types: [PillowTypeEnum.MEMORY_FOAM, PillowTypeEnum.COTTON],
    pillow_firmness: [PillowFirmnessEnum.SOFT, PillowFirmnessEnum.MEDIUM, PillowFirmnessEnum.FIRM],
    room_size: 24,

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
    view_types: [RoomViewCodeEnum.CITY_VIEW, RoomViewCodeEnum.PARTIAL_NO_VIEW],
    internet_max_download_speed: 300,
    internet_max_upload_speed: 300,
    wifi_specifications: [WiFiSpecificationEnum.WIFI5, WiFiSpecificationEnum.WIFI4],
    wifi_availability: [
      WifiAvailabilityEnum.WIFI_FREE_IN_ROOM,
      WifiAvailabilityEnum.WIFI_PAID_IN_PUBLIC_AREAS
    ],
    status: RoomTypeStatusEnum.ACTIVE
  },
  {
    wired_internet_availability: [WiredInternetAvailabilityEnum.WIRED_INTERNET_FREE_IN_ROOM],
    facilities: {
      room_facility: Object.values(RoomFacilityEnum),
      room_notes: [],
      bathroom_facility: Object.values(RoomBathRoomFacilityEnum),
      bathroom_notes: [],
      bedroom_and_laundry_facility: Object.values(RoomBedroomAndLaundryFacilityEnum),
      bedroom_and_laundry_notes: [],
      heating_and_cooling_facility: Object.values(RoomHeatingAndCoolingFacilityEnum),
      heating_and_cooling_notes: [],
      safety_facility: Object.values(RoomSafetyFacilityEnum),
      safety_notes: [],
      internet_and_office_facility: Object.values(RoomInternetAndOfficeFacilityEnum),
      internet_and_office_notes: [],
      kitchen_and_dining_facility: Object.values(RoomKitchenAndDiningFacilityEnum),
      kitchen_and_dining_notes: [],
      family_facility: Object.values(RoomFamilyFacilityEnum),
      family_notes: [],
      entertainment_facility: Object.values(RoomEntertainmentFacilityEnum),
      entertainment_notes: []
    },
    pms_room_type_id: '472669',
    bath_set_brand: '上山採藥',
    beds_included: [
      {
        code: BedCodeEnum.DOUBLE,
        quantity: 1
      }
    ],
    floor_type: [FloorTypeEnum.SPC],
    hairdryer_type: 'TESCOM 2200TW',
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
    pillow_types: [PillowTypeEnum.MEMORY_FOAM, PillowTypeEnum.COTTON],
    pillow_firmness: [PillowFirmnessEnum.SOFT, PillowFirmnessEnum.MEDIUM, PillowFirmnessEnum.FIRM],
    room_size: 24,

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
    view_types: [RoomViewCodeEnum.CITY_VIEW, RoomViewCodeEnum.PARTIAL_NO_VIEW],
    internet_max_download_speed: 300,
    internet_max_upload_speed: 300,
    wifi_specifications: [WiFiSpecificationEnum.WIFI5, WiFiSpecificationEnum.WIFI4],
    wifi_availability: [
      WifiAvailabilityEnum.WIFI_FREE_IN_ROOM,
      WifiAvailabilityEnum.WIFI_PAID_IN_PUBLIC_AREAS
    ],
    status: RoomTypeStatusEnum.ACTIVE
  },
  {
    wired_internet_availability: [WiredInternetAvailabilityEnum.WIRED_INTERNET_FREE_IN_ROOM],
    facilities: {
      room_facility: Object.values(RoomFacilityEnum),
      room_notes: [],
      bathroom_facility: Object.values(RoomBathRoomFacilityEnum),
      bathroom_notes: [],
      bedroom_and_laundry_facility: Object.values(RoomBedroomAndLaundryFacilityEnum),
      bedroom_and_laundry_notes: [],
      heating_and_cooling_facility: Object.values(RoomHeatingAndCoolingFacilityEnum),
      heating_and_cooling_notes: [],
      safety_facility: Object.values(RoomSafetyFacilityEnum),
      safety_notes: [],
      internet_and_office_facility: Object.values(RoomInternetAndOfficeFacilityEnum),
      internet_and_office_notes: [],
      kitchen_and_dining_facility: Object.values(RoomKitchenAndDiningFacilityEnum),
      kitchen_and_dining_notes: [],
      family_facility: Object.values(RoomFamilyFacilityEnum),
      family_notes: [],
      entertainment_facility: Object.values(RoomEntertainmentFacilityEnum),
      entertainment_notes: []
    },
    pms_room_type_id: '475906',
    bath_set_brand: '上山採藥',
    beds_included: [
      {
        code: BedCodeEnum.DOUBLE,
        quantity: 1
      },
      {
        code: BedCodeEnum.SINGLE_SOFA_BED,
        quantity: 1
      }
    ],
    floor_type: [FloorTypeEnum.SPC],
    hairdryer_type: 'TESCOM 2200TW',
    photos: [
      {
        image:
          'https://h-img3.cloudbeds.com/uploads/217575/img20230518150950_featured~~64acc4dd88a9b.jpg',
        thumb:
          'https://h-img2.cloudbeds.com/uploads/217575/img20230518150950_thumb~~64acc4ddbd065.jpg'
      }
    ],
    pillow_types: [PillowTypeEnum.MEMORY_FOAM, PillowTypeEnum.COTTON],
    pillow_firmness: [PillowFirmnessEnum.SOFT, PillowFirmnessEnum.MEDIUM, PillowFirmnessEnum.FIRM],
    room_size: 24,

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
    view_types: [RoomViewCodeEnum.CITY_VIEW, RoomViewCodeEnum.PARTIAL_NO_VIEW],
    internet_max_download_speed: 300,
    internet_max_upload_speed: 300,
    wifi_specifications: [WiFiSpecificationEnum.WIFI5, WiFiSpecificationEnum.WIFI4],
    wifi_availability: [
      WifiAvailabilityEnum.WIFI_FREE_IN_ROOM,
      WifiAvailabilityEnum.WIFI_PAID_IN_PUBLIC_AREAS
    ],
    status: RoomTypeStatusEnum.ACTIVE
  },
  {
    wired_internet_availability: [WiredInternetAvailabilityEnum.WIRED_INTERNET_FREE_IN_ROOM],
    facilities: {
      room_facility: Object.values(RoomFacilityEnum),
      room_notes: [],
      bathroom_facility: Object.values(RoomBathRoomFacilityEnum),
      bathroom_notes: [],
      bedroom_and_laundry_facility: Object.values(RoomBedroomAndLaundryFacilityEnum),
      bedroom_and_laundry_notes: [],
      heating_and_cooling_facility: Object.values(RoomHeatingAndCoolingFacilityEnum),
      heating_and_cooling_notes: [],
      safety_facility: Object.values(RoomSafetyFacilityEnum),
      safety_notes: [],
      internet_and_office_facility: Object.values(RoomInternetAndOfficeFacilityEnum),
      internet_and_office_notes: [],
      kitchen_and_dining_facility: Object.values(RoomKitchenAndDiningFacilityEnum),
      kitchen_and_dining_notes: [],
      family_facility: Object.values(RoomFamilyFacilityEnum),
      family_notes: [],
      entertainment_facility: Object.values(RoomEntertainmentFacilityEnum),
      entertainment_notes: []
    },
    pms_room_type_id: '475909',
    bath_set_brand: '上山採藥',
    beds_included: [
      {
        code: BedCodeEnum.DOUBLE,
        quantity: 1
      },
      {
        code: BedCodeEnum.DOUBLE_SOFA_BED,
        quantity: 1
      }
    ],
    floor_type: [FloorTypeEnum.SPC],
    hairdryer_type: 'TESCOM 2200TW',
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
    pillow_types: [PillowTypeEnum.MEMORY_FOAM, PillowTypeEnum.COTTON],
    pillow_firmness: [PillowFirmnessEnum.SOFT, PillowFirmnessEnum.MEDIUM, PillowFirmnessEnum.FIRM],
    room_size: 24,

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
    view_types: [RoomViewCodeEnum.CITY_VIEW, RoomViewCodeEnum.PARTIAL_NO_VIEW],
    internet_max_download_speed: 300,
    internet_max_upload_speed: 300,
    wifi_specifications: [WiFiSpecificationEnum.WIFI5, WiFiSpecificationEnum.WIFI4],
    wifi_availability: [
      WifiAvailabilityEnum.WIFI_FREE_IN_ROOM,
      WifiAvailabilityEnum.WIFI_PAID_IN_PUBLIC_AREAS
    ],
    status: RoomTypeStatusEnum.ACTIVE
  },
  {
    wired_internet_availability: [WiredInternetAvailabilityEnum.WIRED_INTERNET_FREE_IN_ROOM],
    facilities: {
      room_facility: Object.values(RoomFacilityEnum),
      room_notes: [],
      bathroom_facility: Object.values(RoomBathRoomFacilityEnum),
      bathroom_notes: [],
      bedroom_and_laundry_facility: Object.values(RoomBedroomAndLaundryFacilityEnum),
      bedroom_and_laundry_notes: [],
      heating_and_cooling_facility: Object.values(RoomHeatingAndCoolingFacilityEnum),
      heating_and_cooling_notes: [],
      safety_facility: Object.values(RoomSafetyFacilityEnum),
      safety_notes: [],
      internet_and_office_facility: Object.values(RoomInternetAndOfficeFacilityEnum),
      internet_and_office_notes: [],
      kitchen_and_dining_facility: Object.values(RoomKitchenAndDiningFacilityEnum),
      kitchen_and_dining_notes: [],
      family_facility: Object.values(RoomFamilyFacilityEnum),
      family_notes: [],
      entertainment_facility: Object.values(RoomEntertainmentFacilityEnum),
      entertainment_notes: []
    },
    pms_room_type_id: '474094',
    bath_set_brand: '上山採藥',
    beds_included: [
      {
        code: BedCodeEnum.DOUBLE,
        quantity: 1
      }
    ],
    floor_type: [FloorTypeEnum.SPC],
    hairdryer_type: 'TESCOM 2200TW',
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
    pillow_types: [PillowTypeEnum.MEMORY_FOAM, PillowTypeEnum.COTTON],
    pillow_firmness: [PillowFirmnessEnum.SOFT, PillowFirmnessEnum.MEDIUM, PillowFirmnessEnum.FIRM],
    room_size: 24,

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
    view_types: [RoomViewCodeEnum.CITY_VIEW, RoomViewCodeEnum.PARTIAL_NO_VIEW],
    internet_max_download_speed: 300,
    internet_max_upload_speed: 300,
    wifi_specifications: [WiFiSpecificationEnum.WIFI5, WiFiSpecificationEnum.WIFI4],
    wifi_availability: [
      WifiAvailabilityEnum.WIFI_FREE_IN_ROOM,
      WifiAvailabilityEnum.WIFI_PAID_IN_PUBLIC_AREAS
    ],
    status: RoomTypeStatusEnum.ACTIVE
  },
  {
    wired_internet_availability: [WiredInternetAvailabilityEnum.WIRED_INTERNET_FREE_IN_ROOM],
    facilities: {
      room_facility: Object.values(RoomFacilityEnum),
      room_notes: [],
      bathroom_facility: Object.values(RoomBathRoomFacilityEnum),
      bathroom_notes: [],
      bedroom_and_laundry_facility: Object.values(RoomBedroomAndLaundryFacilityEnum),
      bedroom_and_laundry_notes: [],
      heating_and_cooling_facility: Object.values(RoomHeatingAndCoolingFacilityEnum),
      heating_and_cooling_notes: [],
      safety_facility: Object.values(RoomSafetyFacilityEnum),
      safety_notes: [],
      internet_and_office_facility: Object.values(RoomInternetAndOfficeFacilityEnum),
      internet_and_office_notes: [],
      kitchen_and_dining_facility: Object.values(RoomKitchenAndDiningFacilityEnum),
      kitchen_and_dining_notes: [],
      family_facility: Object.values(RoomFamilyFacilityEnum),
      family_notes: [],
      entertainment_facility: Object.values(RoomEntertainmentFacilityEnum),
      entertainment_notes: []
    },
    pms_room_type_id: '513155',
    bath_set_brand: '上山採藥',
    beds_included: [
      {
        code: BedCodeEnum.DOUBLE,
        quantity: 1
      }
    ],
    floor_type: [FloorTypeEnum.SPC],
    hairdryer_type: 'TESCOM 2200TW',
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
    pillow_types: [PillowTypeEnum.MEMORY_FOAM, PillowTypeEnum.COTTON],
    pillow_firmness: [PillowFirmnessEnum.SOFT, PillowFirmnessEnum.MEDIUM, PillowFirmnessEnum.FIRM],
    room_size: 24,

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
    view_types: [RoomViewCodeEnum.CITY_VIEW, RoomViewCodeEnum.PARTIAL_NO_VIEW],
    internet_max_download_speed: 300,
    internet_max_upload_speed: 300,
    wifi_specifications: [WiFiSpecificationEnum.WIFI5, WiFiSpecificationEnum.WIFI4],
    wifi_availability: [
      WifiAvailabilityEnum.WIFI_FREE_IN_ROOM,
      WifiAvailabilityEnum.WIFI_PAID_IN_PUBLIC_AREAS
    ],
    status: RoomTypeStatusEnum.ACTIVE
  }
]

export default [
  // 列表接口
  {
    url: '/mock/roomType/getRoomTypes',
    method: 'get',
    response: () => {
      return {
        success: true,
        data: MockRoomTypeDetails
      }
    }
  },
  {
    url: '/mock/roomType/getRoomType',
    method: 'get',
    response: ({ query }) => {
      const { room_type_id } = query

      return {
        success: true,
        data: MockRoomTypeDetails.find((item) => item.room_type_id === room_type_id)
      }
    }
  },
  {
    url: '/mock/roomType/putRoomType',
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
    url: '/mock/roomType/postRoomType',
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
    url: '/mock/roomType/uploadPhotos',
    method: 'post',
    response: () => {
      return {
        success: true,
        data: {
          photoUrls: ['https://picsum.photos/536/354', 'https://picsum.photos/1024/960']
        }
      }
    }
  },
  {
    url: '/mock/roomType/deletePhoto',
    method: 'delete',
    response: (query) => {
      return {
        success: true,
        data: query
      }
    }
  }
]
