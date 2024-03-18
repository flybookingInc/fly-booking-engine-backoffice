export enum TvContentEnum {
  // TV Type Enum.
  NETFLIX_APP = 'netflix_app',
  HULU_APP = 'hulu_app',
  YOUTUBE_APP = 'youtube_app',
  AMAZON_PRIME_VIDEO_APP = 'amazon_prime_video_app',
  DISNEY_PLUS_APP = 'disney_plus_app',
  HBO_MAX_APP = 'hbo_max_app',
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
  ROKU = 'roku',
  FIRE_TV = 'fire_tv',
  ANDROID_TV = 'android_tv',
  APPLE_TV = 'apple_tv_app',
  TIZEN = 'tizen',
  WEBOS = 'webos',
  VIERA_CAST = 'viera_cast',
  NETCAST = 'netcast',
  VIERA_CONNECT = 'viera_connect',
  SMARTC = 'smartc'
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

export enum CardTypeEnum {
  // Card Type Enum.
  VISA = 'visa',
  MASTER = 'master',
  JCB = 'jcb',
  AMEX = 'amex',
  DINERS = 'diners',
  DISCOVER = 'discover',
  UNION_PAY = 'unionpay',
  ALIPAY = 'alipay',
  APPLE_PAY = 'apple_pay',
  GOOGLE_PAY = 'google_pay',
  ELO = 'elo',
  HIPER = 'hiper',
  LINE_PAY = 'line_pay',
  MAESTRO = 'maestro',
  MIR = 'mir',
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
  SOFT = 'soft',
  MEDIUM = 'medium',
  FIRM = 'firm',
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

export enum BabyFacilityEnum {
  BABY_BATHTUB = 'baby_bathtub',
  BED_RAIL = 'bed_rail',
  BABY_CRIB = 'baby_crib',
  BABY_HIGH_CHAIR = 'baby_high_chair',
  BABY_BOTTLE_STERILIZER = 'baby_bottle_sterilizer'
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
  PER_SIX_HOUR = 'per_six_hour',
  PER_EIGHT_HOUR = 'per_eight_hour',
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

export enum PetPolicyEnum {
  // Pet Policy Enum.
  NOT_ALLOWED = 'pets_not_allowed',
  ALLOWED = 'pets_allowed',
  ROOM_TYPE_DEPENDENT = 'pets_room_type_dependent',
  ONLY_SMALL_PETS_ALLOWED = 'pets_only_small_pets_allowed',
  ONLY_LARGE_PETS_ALLOWED = 'pets_only_large_pets_allowed',
  ONLY_SERVICE_ANIMALS_ALLOWED = 'pets_only_service_animals_allowed'
}
