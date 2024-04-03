export enum TvContentEnum {
  // TV Type Enum.
  NETFLIX_APP = 'netflix_app',
  HULU_APP = 'hulu_app',
  YOUTUBE_APP = 'youtube_app',
  AMAZON_PRIME_VIDEO_APP = 'amazon_prime_video_app',
  DISNEY_PLUS_APP = 'disney_plus_app',
  HBO_GO_APP = 'hbo_go_app',
  APPLE_TV_APP = 'apple_tv_app',
  IQIYI_APP = 'iqiyi_app',
  FREE_CABLE_TV = 'free_cable_tv',
  PAID_CABLE_TV = 'paid_cable_tv',
  SATELLITE_TV = 'satellite_tv',
  PAID_MOVIES_ON_DEMAND = 'paid_movies_on_demand',
  FREE_MOVIES_ON_DEMAND = 'free_movies_on_demand',
  PAID_PORN_MOVIES_ON_DEMAND = 'paid_porn_movies_on_demand',
  FREE_PORN_MOVIES_ON_DEMAND = 'free_porn_movies_on_demand'
}

export enum TvResolutionEnum {
  // TV Resolution Enum.
  _4K = '4k',
  _8K = '8k',
  _1080P = '1080p',
  _720P = '720p',
  _480P = '480p'
}

export enum TvCastingEnum {
  // TV Casting Enum.
  CHROMECAST = 'chromecast',
  AIRPLAY = 'airplay',
  MIRACAST = 'miracast',
  DLNA = 'dlna',
  VIERA_CAST = 'viera_cast',
  NETCAST = 'netcast'
}

export enum FloorTypeEnum {
  // Floor Type Enum.
  CARPET = 'carpet',
  PLASTIC_TILE = 'plastic_tile',
  WOOD_FLOOR = 'wood_floor',
  STONE_FLOOR = 'stone_floor',
  MARBLE_FLOOR = 'marble_floor',
  CERAMIC_TILE = 'ceramic_tile',
  CEMENT_FLOOR = 'cement_floor',
  SPC = 'stone_plastic'
}

export enum PriceUnitEnum {
  // Price Unit Enum.
  PER_PERSON = 'per_person',
  PER_NIGHT = 'per_night',
  PER_STAY = 'per_stay'
}

export enum ValueOrPercentEnum {
  // Exclusive,Inclusive Enum.

  VALUE = 'value',
  PERCENT = 'percent'
}

export enum BeforeAfterEnum {
  // Before,After Enum.
  BEFORE = 'before',
  AFTER = 'after'
}

export enum BedCodeEnum {
  // Bed Code Enum.
  SINGLE = 'single',
  DOUBLE = 'double',
  QUEEN = 'queen',
  KING = 'king',
  CALIFORNIA_KING = 'california_king',
  BUNK = 'bunk',
  SINGLE_SOFA_BED = 'single_sofa_bed',
  DOUBLE_SOFA_BED = 'double_sofa_bed',
  FUTON = 'futon',
  AIR_MATTRESS = 'air_mattress',
  COT = 'cot',
  CRIB = 'crib',
  HAMMOCK = 'hammock',
  WATER_BED = 'water_bed',
  MURPHY_BED = 'murphy_bed',
  TATAMI = 'tatami_bed',
  OTHERS = 'others'
}

export enum RoomViewCodeEnum {
  // Room View Code Enum.
  CITY_VIEW = 'city_view',
  MOUNTAIN_VIEW = 'mountain_view',
  OCEAN_VIEW = 'ocean_view',
  GARDEN_VIEW = 'garden_view',
  POOL_VIEW = 'pool_view',
  NO_VIEW = 'no_view',
  PARTIAL_NO_VIEW = 'partial_no_view'
}

export enum CreditCardTypeEnum {
  // Card Type Enum.
  VISA = 'visa',
  MASTER = 'master',
  JCB = 'jcb',
  AMEX = 'amex',
  DINERS = 'diners',
  DISCOVER = 'discover',
  UNION_PAY = 'unionpay',
  ELO = 'elo',
  HIPER = 'hiper',
  MAESTRO = 'maestro',
  MIR = 'mir'
}

export enum ThirdPartyPaymentEnum {
  // Third Party Payment Enum.
  ALIPAY = 'alipay',
  APPLE_PAY = 'apple_pay',
  GOOGLE_PAY = 'google_pay',
  LINE_PAY = 'line_pay',
  PAYPAL = 'paypal'
}

export enum CurrencyCodeEnum {
  USD = 'USD',
  CAD = 'CAD',
  EUR = 'EUR',
  AED = 'AED',
  AFN = 'AFN',
  ALL = 'ALL',
  AMD = 'AMD',
  ARS = 'ARS',
  AUD = 'AUD',
  AZN = 'AZN',
  BAM = 'BAM',
  BDT = 'BDT',
  BGN = 'BGN',
  BHD = 'BHD',
  BIF = 'BIF',
  BND = 'BND',
  BOB = 'BOB',
  BRL = 'BRL',
  BWP = 'BWP',
  BYN = 'BYN',
  BZD = 'BZD',
  CDF = 'CDF',
  CHF = 'CHF',
  CLP = 'CLP',
  CNY = 'CNY',
  COP = 'COP',
  CRC = 'CRC',
  CVE = 'CVE',
  CZK = 'CZK',
  DJF = 'DJF',
  DKK = 'DKK',
  DOP = 'DOP',
  DZD = 'DZD',
  EEK = 'EEK',
  EGP = 'EGP',
  ERN = 'ERN',
  ETB = 'ETB',
  GBP = 'GBP',
  GEL = 'GEL',
  GHS = 'GHS',
  GNF = 'GNF',
  GTQ = 'GTQ',
  HKD = 'HKD',
  HNL = 'HNL',
  HRK = 'HRK',
  HUF = 'HUF',
  IDR = 'IDR',
  ILS = 'ILS',
  INR = 'INR',
  IQD = 'IQD',
  IRR = 'IRR',
  ISK = 'ISK',
  JMD = 'JMD',
  JOD = 'JOD',
  JPY = 'JPY',
  KES = 'KES',
  KHR = 'KHR',
  KMF = 'KMF',
  KRW = 'KRW',
  KWD = 'KWD',
  KZT = 'KZT',
  LBP = 'LBP',
  LKR = 'LKR',
  LTL = 'LTL',
  LVL = 'LVL',
  LYD = 'LYD',
  MAD = 'MAD',
  MDL = 'MDL',
  MGA = 'MGA',
  MKD = 'MKD',
  MMK = 'MMK',
  MOP = 'MOP',
  MUR = 'MUR',
  MXN = 'MXN',
  MYR = 'MYR',
  MZN = 'MZN',
  NAD = 'NAD',
  NGN = 'NGN',
  NIO = 'NIO',
  NOK = 'NOK',
  NPR = 'NPR',
  NZD = 'NZD',
  OMR = 'OMR',
  PAB = 'PAB',
  PEN = 'PEN',
  PHP = 'PHP',
  PKR = 'PKR',
  PLN = 'PLN',
  PYG = 'PYG',
  QAR = 'QAR',
  RON = 'RON',
  RSD = 'RSD',
  RUB = 'RUB',
  RWF = 'RWF',
  SAR = 'SAR',
  SDG = 'SDG',
  SEK = 'SEK',
  SGD = 'SGD',
  SOS = 'SOS',
  SYP = 'SYP',
  THB = 'THB',
  TND = 'TND',
  TOP = 'TOP',
  TRY = 'TRY',
  TTD = 'TTD',
  TWD = 'TWD',
  TZS = 'TZS',
  UAH = 'UAH',
  UGX = 'UGX',
  UYU = 'UYU',
  UZS = 'UZS',
  VEF = 'VEF',
  VND = 'VND',
  XAF = 'XAF',
  XOF = 'XOF',
  YER = 'YER',
  ZAR = 'ZAR',
  ZMW = 'ZMW',
  ZWL = 'ZWL'
}

export enum PillowTypeEnum {
  FEATHER = 'feather',
  FOAM = 'foam',
  BUCKWHEAT = 'buckwheat',
  MEMORY_FOAM = 'memory foam',
  LATEX = 'latex',
  WOOL = 'wool',
  COTTON = 'cotton',
  POLYESTER = 'polyester',
  MICROFIBER = 'microfiber',
  DOWN = 'down',
  DOWN_ALTERNATIVE = 'down alternative',
  SILK = 'silk',
  KAPOK = 'kapok',
  WATER = 'water'
}

export enum PillowFirmnessEnum {
  SOFT = 'soft',
  MEDIUM = 'medium',
  FIRM = 'firm',
  EXTRA_FIRM = 'extra_firm'
}

export enum TimeIntervalEnum {
  PER_MINUTE = 'per_minute',
  PER_FIVE_MINUTE = 'per_five_minute',
  PER_TEN_MINUTE = 'per_ten_minute',
  PER_FIVTEEN_MINUTE = 'per_fivteen_minute',
  PER_TWENTY_MINUTE = 'per_twenty_minute',
  PER_THIRTY_MINUTE = 'per_thirty_minute',
  PER_HOUR = 'per_hour',
  PER_TWO_HOUR = 'per_two_hour',
  PER_THREE_HOUR = 'per_three_hour',
  PER_FOUR_HOUR = 'per_four_hour',
  PER_FIVE_HOUR = 'per_five_hour',
  PER_SIX_HOUR = 'per_six_hour',
  PER_SEVEN_HOUR = 'per_seven_hour',
  PER_EIGHT_HOUR = 'per_eight_hour',
  PER_NINE_HOUR = 'per_nine_hour',
  PER_TEN_HOUR = 'per_ten_hour',
  PER_ELEVEN_HOUR = 'per_eleven_hour',
  PER_TWELVE_HOUR = 'per_twelve_hour',
  PER_DAY = 'per_day',
  PER_WEEK = 'per_week',
  PER_MONTH = 'per_month',
  PER_YEAR = 'per_year'
}

export enum HourEnum {
  _NOT_SET = '',
  _00_OCLOCK = '00:00',
  _01_OCLOCK = '01:00',
  _02_OCLOCK = '02:00',
  _03_OCLOCK = '03:00',
  _04_OCLOCK = '04:00',
  _05_OCLOCK = '05:00',
  _06_OCLOCK = '06:00',
  _07_OCLOCK = '07:00',
  _08_OCLOCK = '08:00',
  _09_OCLOCK = '09:00',
  _10_OCLOCK = '10:00',
  _11_OCLOCK = '11:00',
  _12_OCLOCK = '12:00',
  _13_OCLOCK = '13:00',
  _14_OCLOCK = '14:00',
  _15_OCLOCK = '15:00',
  _16_OCLOCK = '16:00',
  _17_OCLOCK = '17:00',
  _18_OCLOCK = '18:00',
  _19_OCLOCK = '19:00',
  _20_OCLOCK = '20:00',
  _21_OCLOCK = '21:00',
  _22_OCLOCK = '22:00',
  _23_OCLOCK = '23:00'
}

export enum HalfHourEnum {
  _NOT_SET = '',
  _0000_OCLOCK = '00:00',
  _0030_OCLOCK = '00:30',
  _0100_OCLOCK = '01:00',
  _0130_OCLOCK = '01:30',
  _0200_OCLOCK = '02:00',
  _0230_OCLOCK = '02:30',
  _0300_OCLOCK = '03:00',
  _0330_OCLOCK = '03:30',
  _0400_OCLOCK = '04:00',
  _0430_OCLOCK = '04:30',
  _0500_OCLOCK = '05:00',
  _0530_OCLOCK = '05:30',
  _0600_OCLOCK = '06:00',
  _0630_OCLOCK = '06:30',
  _0700_OCLOCK = '07:00',
  _0730_OCLOCK = '07:30',
  _0800_OCLOCK = '08:00',
  _0830_OCLOCK = '08:30',
  _0900_OCLOCK = '09:00',
  _0930_OCLOCK = '09:30',
  _1000_OCLOCK = '10:00',
  _1030_OCLOCK = '10:30',
  _1100_OCLOCK = '11:00',
  _1130_OCLOCK = '11:30',
  _1200_OCLOCK = '12:00',
  _1230_OCLOCK = '12:30',
  _1300_OCLOCK = '13:00',
  _1330_OCLOCK = '13:30',
  _1400_OCLOCK = '14:00',
  _1430_OCLOCK = '14:30',
  _1500_OCLOCK = '15:00',
  _1530_OCLOCK = '15:30',
  _1600_OCLOCK = '16:00',
  _1630_OCLOCK = '16:30',
  _1700_OCLOCK = '17:00',
  _1730_OCLOCK = '17:30',
  _1800_OCLOCK = '18:00',
  _1830_OCLOCK = '18:30',
  _1900_OCLOCK = '19:00',
  _1930_OCLOCK = '19:30',
  _2000_OCLOCK = '20:00',
  _2030_OCLOCK = '20:30',
  _2100_OCLOCK = '21:00',
  _2130_OCLOCK = '21:30',
  _2200_OCLOCK = '22:00',
  _2230_OCLOCK = '22:30',
  _2300_OCLOCK = '23:00',
  _2330_OCLOCK = '23:30'
}

export enum AgeEnum {
  // Age Enum.
  _NOT_SET = '',
  _1 = '1',
  _2 = '2',
  _3 = '3',
  _4 = '4',
  _5 = '5',
  _6 = '6',
  _7 = '7',
  _8 = '8',
  _9 = '9',
  _10 = '10',
  _11 = '11',
  _12 = '12',
  _13 = '13',
  _14 = '14',
  _15 = '15',
  _16 = '16',
  _17 = '17',
  _18 = '18',
  _19 = '19',
  _20 = '20',
  _21 = '21',
  _22 = '22',
  _23 = '23',
  _24 = '24',
  _25 = '25',
  _26 = '26',
  _27 = '27',
  _28 = '28',
  _29 = '29',
  _30 = '30',
  _31 = '31',
  _32 = '32',
  _33 = '33',
  _34 = '34',
  _35 = '35',
  _36 = '36',
  _37 = '37',
  _38 = '38',
  _39 = '39',
  _40 = '40',
  _41 = '41',
  _42 = '42',
  _43 = '43',
  _44 = '44',
  _45 = '45',
  _46 = '46',
  _47 = '47',
  _48 = '48',
  _49 = '49',
  _50 = '50',
  _51 = '51',
  _52 = '52',
  _53 = '53',
  _54 = '54',
  _55 = '55',
  _56 = '56',
  _57 = '57',
  _58 = '58',
  _59 = '59',
  _60 = '60',
  _61 = '61',
  _62 = '62',
  _63 = '63',
  _64 = '64',
  _65 = '65',
  _66 = '66',
  _67 = '67',
  _68 = '68',
  _69 = '69',
  _70 = '70'
}

export enum PetPolicyEnum {
  // Pet Policy Enum.
  NOT_ALLOWED = 'pets_not_allowed',
  ALLOWED = 'pets_allowed',
  ROOM_TYPE_DEPENDENT = 'pets_room_type_dependent',
  ONLY_SMALL_PETS_ALLOWED = 'pets_only_small_pets_allowed',
  ONLY_LARGE_PETS_ALLOWED = 'pets_only_large_pets_allowed',
  ONLY_SERVICE_ANIMALS_ALLOWED = 'pets_only_service_animals_allowed'
}

export enum AmenitiesEnum {
  ACCESSIBILITY_PARKING = 'accessibility_parking',
  BAR = 'bar',
  ELEVATOR = 'elevator',
  FREE_WIFI_IN_PUBLIC_AREAS = 'free_wifi_in_public_areas',
  GYM = 'gym',
  NO_SMOKING_ROOMS = 'no_smoking_rooms',
  SPA = 'spa',
  OUTDOOR_SWIMMING_POOL = 'outdoor_swimming_pool',
  PARKING = 'parking',
  FREE_PARKING = 'free_parking',
  RESTAURANTS = 'restaurants',
  SMOKING_AREA = 'smoking_area'
}

// currency value will have duplicate values. It's impossible to use Enum. Use object instead.
export const CurrencySymbol = {
  USD: '$',
  CAD: 'C$',
  EUR: '€',
  AED: 'د.إ',
  AFN: '؋',
  ALL: 'L',
  AMD: '֏',
  ARS: '$',
  AUD: 'A$',
  AZN: '₼',
  BAM: 'KM',
  BDT: '৳',
  BGN: 'лв',
  BHD: 'ب.د',
  BIF: 'FBu',
  BND: 'B$',
  BOB: 'Bs.',
  BRL: 'R$',
  BWP: 'P',
  BYN: 'Br',
  BZD: 'BZ$',
  CDF: 'FC',
  CHF: 'CHF',
  CLP: 'CLP$',
  CNY: '¥',
  COP: 'COL$',
  CRC: '₡',
  CVE: 'Esc',
  CZK: 'Kč',
  DJF: 'Fdj',
  DKK: 'kr',
  DOP: 'RD$',
  DZD: 'د.ج',
  EEK: 'kr',
  EGP: 'E£',
  ERN: 'Nfk',
  ETB: 'Br',
  GBP: '£',
  GEL: '₾',
  GHS: 'GH₵',
  GNF: 'FG',
  GTQ: 'Q',
  HKD: 'HK$',
  HNL: 'L',
  HRK: 'kn',
  HUF: 'Ft',
  IDR: 'Rp',
  ILS: '₪',
  INR: '₹',
  IQD: 'ع.د',
  IRR: '﷼',
  ISK: 'kr',
  JMD: 'J$',
  JOD: 'د.ا',
  JPY: '¥',
  KES: 'KSh',
  KHR: '៛',
  KMF: 'CF',
  KRW: '₩',
  KWD: 'د.ك',
  KZT: '₸',
  LBP: 'ل.ل',
  LKR: 'Rs',
  LTL: 'Lt',
  LVL: 'Ls',
  LYD: 'ل.د',
  MAD: 'د.م.',
  MDL: 'L',
  MGA: 'Ar',
  MKD: 'ден',
  MMK: 'K',
  MOP: 'MOP$',
  MUR: 'Rs',
  MXN: 'Mex$',
  MYR: 'RM',
  MZN: 'MT',
  NAD: 'N$',
  NGN: '₦',
  NIO: 'C$',
  NOK: 'kr',
  NPR: 'रू',
  NZD: 'NZ$',
  OMR: 'ر.ع.',
  PAB: 'B/.',
  PEN: 'S/.',
  PHP: '₱',
  PKR: 'Rs',
  PLN: 'zł',
  PYG: '₲',
  QAR: 'ر.ق',
  RON: 'lei',
  RSD: 'дин',
  RUB: '₽',
  RWF: 'FRw',
  SAR: 'ر.س',
  SDG: 'ج.س.',
  SEK: 'kr',
  SGD: 'S$',
  SOS: 'S',
  SYP: 'ل.س',
  THB: '฿',
  TND: 'د.ت',
  TOP: 'T$',
  TRY: '₺',
  TTD: 'TT$',
  TWD: 'NT$',
  TZS: 'TSh',
  UAH: '₴',
  UGX: 'USh',
  UYU: '$U',
  UZS: 'лв',
  VEF: 'Bs',
  VND: '₫',
  XAF: 'FCFA',
  XOF: 'CFA',
  YER: '﷼',
  ZAR: 'R',
  ZMW: 'K',
  ZWL: 'Z$'
}

export enum ServicesEnum {
  FRONT_DESK_24HR = '24hr_front_desk',
  AIRPORT_TRANSFER = 'airport_transfer',
  BABYSITTING = 'babysitting',
  CONCIERGE = 'concierge',
  CURRENCY_EXCHANGE = 'currency_exchange',
  DAILY_HOUSEKEEPING = 'daily_housekeeping',
  DRY_CLEANING = 'dry_cleaning',
  LAUNDRY_SERVICE = 'laundry_service',
  LUGGAGE_STORAGE = 'luggage_storage',
  ROOM_SERVICE = 'room_service',
  SAFETY_DEPOSIT_BOX = 'safety_deposit_box',
  SELF_CHECKIN = 'self_checkin',
  SHUTTLE_SERVICE = 'shuttle_service',
  TAXI_SERVICE = 'taxi_service',
  FREE_TOURS = 'free_tours'
}

export enum WiFiSpecificationEnum {
  WIFI4 = 'WiFi4',
  WIFI5 = 'WiFi5',
  WIFI6 = 'WiFi6',
  WIFI6E = 'WiFi6E',
  WIFI7 = 'WiFi7'
}

export enum WifiAvailabilityEnum {
  WIFI_FREE_IN_ALL_AREAS = 'wifi_free_in_all_areas',
  WIFI_FREE_IN_ROOM = 'wifi_free_in_room',
  WIFI_FREE_IN_PUBLIC_AREAS = 'wifi_free_in_public_areas',
  WIFI_PAID_IN_ALL_AREAS = 'wifi_paid_in_all_areas',
  WIFI_PAID_IN_ROOM = 'wifi_paid_in_room',
  WIFI_PAID_IN_PUBLIC_AREAS = 'wifi_paid_in_public_areas'
}

export enum WiredInternetAvailabilityEnum {
  WIRED_INTERNET_FREE_IN_ALL_AREAS = 'wired_internet_free_in_all_areas',
  WIRED_INTERNET_FREE_IN_ROOM = 'wired_internet_free_in_room',
  WIRED_INTERNET_FREE_IN_PUBLIC_AREAS = 'wired_internet_free_in_public_areas',
  WIRED_INTERNET_PAID_IN_ALL_AREAS = 'wired_internet_paid_in_all_areas',
  WIRED_INTERNET_PAID_IN_ROOM = 'wired_internet_paid_in_room',
  WIRED_INTERNET_PAID_IN_PUBLIC_AREAS = 'wired_internet_paid_in_public_areas'
}

export enum RoomTypeStatusEnum {
  ACTIVE = 'active',
  INACTIVE = 'inactive'
}

export enum RoomFacilityEnum {
  BEDSIDE_DOUBLE_SIDED_SOCKET = 'bedside_double_sided_socket',
  BEDSIDE_LAMP = 'bedside_lamp',
  DESKTOP_LED_COSMETIC_MIRROR = 'desktop_led_cosmetic_mirror',
  GLASS_BOTTLED_WATER = 'glass_bottled_water',
  LOW_BLUE_LIGHTS_LAMP = 'low_blue_lights_lamp',
  SAFTY_LOCKER = 'safty_locker',
  SOCKET_110V = '110v_socket',
  SOCKET_220V = '220v_socket',
  SOUND_PROOF = 'sound_proof',
  UNIVERSAL_SOCKET = 'universal_socket',
  MINI_BAR = 'mini_bar',
  PRIVATE_BATHROOM = 'private_bathroom'
}

export enum RoomBathRoomFacilityEnum {
  BATHROBES = 'bathrobes',
  BATH_SET = 'bath_set',
  BATHTUB = 'bathtub',
  BIDET = 'bidet',
  BODY_SOAP = 'body_soap',
  CONDITIONER = 'conditioner',
  HAIR_DRYER = 'hairdryer',
  HOT_WATER = 'hot_water',
  HOT_SPRING_BATH = 'hot_spring_bath',
  JAPANESE_TOILET = 'japanese_toilet',
  LEAD_FREE_FAUCET = 'lead_free_faucet',
  SHAMPOO = 'shampoo',
  SHOWER_GEL = 'shower_gel',
  SLIPPERS = 'slippers',
  SOAP = 'soap',
  SPA_TUB = 'spa_tub',
  TOILET_PAPER = 'toilet_paper',
  TOILETRIES = 'toiletries',
  TOWELS = 'towels'
}

export enum RoomBedroomAndLaundryFacilityEnum {
  BED_SHEETS = 'bed_sheets',
  CLOTHING_STORAGE = 'clothing_storage',
  DRAYER = 'drayer',
  DRAYER_RACK_FOR_CLOTHING = 'drayer_rack_for_clothing',
  EXTRA_PILLOWS_AND_BLANKETS = 'extra_pillows_and_blankets',
  HANGERS = 'hangers',
  IRON = 'iron',
  MOSQUITO_NET = 'mosquito_net',
  PILLOWS_CASE = 'pillows_case',
  ROOM_DARKENING_SHADES = 'room_darkening_shades',
  WASHER = 'washer',
  WASHING_POWDER = 'washing_powder'
}

export enum RoomHeatingAndCoolingFacilityEnum {
  AIR_CONDITIONING = 'air_conditioning',
  CELLING_FAN = 'celling_fan',
  HEATING = 'heating',
  INDOOR_FIREPLACE = 'indoor_fireplace',
  PROTABLE_FAN = 'protable_fan',
  PROTABLE_HEATER = 'protable_heater'
}

export enum RoomSafetyFacilityEnum {
  EMWEGENCY_LIGHTING = 'emergency_lighting',
  FIRST_AID_KIT = 'first_aid_kit',
  FIRE_EXTINGUISHER = 'fire_extinguisher',
  FIRE_PROOF_ROOM_DOOR = 'fire_proof_room_door',
  FLAME_CONSTRUCTION_MATERIALS = 'flame_construction_materials',
  SMOKE_ALARM = 'smoke_alarm',
  CARBON_MONOXIDE_DETECTOR = 'carbon_monoxide_detector'
}

export enum RoomInternetAndOfficeFacilityEnum {
  DESK_OR_TABLE_AND_CHAIR = 'desk_or_table_and_chair', // Guests have a desk or table that’s used just for working, along with a comfortable chair
  PRINTER = 'printer',
  SCANNER = 'scanner',
  FAX = 'fax',
  WIRED_INTERNET = 'wired_internet',
  WIFI = 'wifi'
}

export enum RoomKitchenAndDiningFacilityEnum {
  BAKING_SHEET = 'baking_sheet',
  BARBECUE_UTENSILS = 'barbecue_utensils',
  BREAD_MAKER = 'bread_maker',
  BLENDER = 'blender',
  COFFEE = 'coffee',
  COFFEE_MAKER = 'coffee_maker',
  COOKING_BASICS = 'cooking_basics', // Pots and pans, oil, salt and pepper
  DING_TABLE = 'dining_table',
  DISHES_AND_SILVERWARE = 'dishes_and_silverware', // Bowls, chopsticks, plates, cups, etc.
  DISHWASHER = 'dishwasher',
  FREEZER = 'freezer',
  HOT_WATER_KETTLE = 'hot_water_kettle',
  KITCHEN = 'kitchen', // Space where guests can cook their own meals
  KITCHENETTE = 'kitchenette', // Space where guests can heat up and refrigerate food
  MICROWAVE = 'microwave',
  MINI_FRIDGE = 'mini_fridge',
  OVEN = 'oven',
  REFRIGERATOR = 'refrigerator',
  GAS_STOVE = 'gas_stove',
  ELECTRIC_STOVE = 'electric_stove',
  WOOD_BURNING_STOVE = 'wood_burning_stove',
  INDUCTION_STOVE = 'induction_stove',
  TEA_BAG = 'tea_bag',
  TEAPOT = 'teapot',
  TOASTER = 'toaster',
  TRASH_COMPACTOR = 'trash_compactor',
  WINE_GLASSES = 'wine_glasses'
}

export enum RoomFamilyFacilityEnum {
  BABY_BATH = 'baby_bath',
  BABY_MONITOR = 'baby_monitor',
  BABY_SAFTY_GATE = 'baby_safety_gate',
  BED_RAIL = 'bedrail',
  BABY_SITTER_RECOMMDATION = 'baby_sitter_recommendation',
  BOARD_GAMES = 'board_games',
  CHANGING_TABLE = 'changing_table',
  CHILDRENS_BOOKS_AND_TOYS = 'childrens_books_and_toys',
  CHILDRENS_DINNERWARE = 'childrens_dinnerware',
  CHILDRENS_PLAYGROUND = 'childrens_playground',
  CRIB = 'crib',
  FIREPLACE_GUARDS = 'fireplace_guards',
  HIGH_CHAIR = 'high_chair',
  OUTLET_COVERS = 'outlet_covers',
  PACK_AND_PLAY_CRIB = 'pack_and_play_crib',
  TABLE_CORNER_GUARDS = 'table_corner_guards',
  WINDOWS_GUARDS = 'windows_guards'
}

export enum RoomEntertainmentFacilityEnum {
  ARCADE_GAMES = 'arcade_games',
  BATTING_CAGE = 'batting_cage',
  BOOKS_AND_READING_MATERIALS = 'books_and_reading_materials',
  EXERCISE_EQUIPMENT = 'exercise_equipment',
  GAME_CONSOLE = 'game_console',
  LASER_TAG = 'laser_tag',
  LIFE_SIZE_GAMES = 'life_size_games',
  MINI_GOLF = 'mini_golf',
  MOVIE_THEATER = 'movie_theater',
  PIANO = 'piano',
  PING_PONG_TABLE = 'ping_pong_table',
  POOL_TABLE = 'pool_table',
  RECORD_PLAYER = 'record_player',
  SKATE_RAMP = 'skate_ramp',
  SOUND_SYSTEM = 'sound_system',
  THEME_ROOM = 'theme_room',
  TV = 'tv'
}
