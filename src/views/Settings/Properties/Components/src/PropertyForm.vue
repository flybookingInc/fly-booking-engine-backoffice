<script setup lang="tsx">
import { Form, FormSchema, SelectOption, CheckboxOption } from '@/components/Form'
import { useForm } from '@/hooks/web/useForm'
import { onBeforeMount, reactive, ref } from 'vue'
import { useValidator } from '@/hooks/web/useValidator'
import {
  BookingPolicy,
  CheckInOutPolicy,
  HotelDetails,
  PropertyPaymentMethodsCardType,
  PropertypaymentMethodBankTransfer,
  PropertypaymentMethodCash
} from '@/types/stores/property'
import { postPropertyApi } from '@/api/setting/property'
import {
  getAvailableAmenitiesApi,
  getAvailableCreditCardsApi,
  getAvailableCurrenciesApi,
  getAvailableLanguagesApi,
  getAvailableServicesApi
} from '@/api/system'
import { ElMessage } from 'element-plus'
import { useI18n } from '@/hooks/web/useI18n'
import {
  AgeEnum,
  BeforeAfterEnum,
  HalfHourEnum,
  PetPolicyEnum,
  TimeIntervalEnum,
  ValueOrPercentEnum
} from '@/types/enums/dataStore'
import { usePropertyStore } from '@/store/modules/property'

const { t } = useI18n()
const { required } = useValidator()
const { updateProperty, FetchHotelDetails } = usePropertyStore()

interface Props {
  propertyId?: string
}

const props = defineProps<Props>()

const { formRegister, formMethods } = useForm()
const { setValues, getFormData, getElFormExpose, setSchema } = formMethods
const hotelDetails: HotelDetails = {} as HotelDetails
const amenitiesValues = ref<string[]>([])
const schema = reactive<FormSchema[]>([
  {
    field: 'propertyId',
    label: t('settings.property.property_id'),
    component: 'Input',
    formItemProps: {
      rules: [required()]
    },
    hidden: props.propertyId ? true : false,
    colProps: {
      span: 12
    }
  },
  {
    field: 'name',
    label: t('settings.property.name'),
    component: 'Input',
    formItemProps: {
      rules: [required()]
    },
    colProps: {
      span: 12
    }
  },
  {
    field: 'description',
    label: t('settings.property.description'),
    component: 'Input',
    colProps: {
      span: 12
    },
    componentProps: {
      type: 'textarea',
      clearable: false,
      autosize: true,
      placeholder: ''
    },
    formItemProps: {
      rules: [required()]
    }
  },
  {
    field: 'phone',
    label: t('settings.property.phone'),
    component: 'Input',
    colProps: {
      span: 12
    }
  },
  {
    field: 'email',
    label: t('settings.property.email'),
    component: 'Input',
    colProps: {
      span: 12
    }
  },
  {
    field: 'zipCode',
    label: t('settings.property.zip'),
    component: 'Input',
    colProps: {
      span: 12
    }
  },
  {
    field: 'address1',
    label: t('settings.property.address1'),
    component: 'Input',
    colProps: {
      span: 12
    }
  },
  {
    field: 'address2',
    label: t('settings.property.address2'),
    component: 'Input',
    colProps: {
      span: 12
    }
  },
  {
    field: 'city',
    label: t('settings.property.city'),
    component: 'Input',
    colProps: {
      span: 12
    }
  },
  {
    field: 'state',
    label: t('settings.property.state'),
    component: 'Input',
    colProps: {
      span: 12
    }
  },
  {
    field: 'country',
    label: t('settings.property.country'),
    component: 'Input',
    colProps: {
      span: 12
    }
  },
  {
    field: 'availableLanguages',
    label: t('settings.property.available_languages'),
    component: 'SelectV2',
    componentProps: {
      options: [],
      clearable: false,
      multiple: true
    },
    formItemProps: {
      rules: [required()]
    },
    optionApi: async () => {
      const res = await getAvailableLanguagesApi()
      return (res.data.data || []).map((language: string) => {
        return {
          label: t(`enum.language.${language}`),
          value: language
        } as SelectOption
      })
    }
  },
  {
    field: 'latitude',
    label: t('settings.property.latitude'),
    component: 'Input',
    colProps: {
      span: 12
    }
  },
  {
    field: 'logitude',
    label: t('settings.property.logitude'),
    component: 'Input',
    colProps: {
      span: 12
    }
  },
  {
    field: 'currencyDivider',
    label: t('router.views.properties.propertyForm.currencyDividerTitle'),
    component: 'Divider'
  },
  {
    field: 'currency',
    label: t('settings.property.currency'),
    colProps: {
      span: 12
    },
    component: 'SelectV2',
    componentProps: {
      options: [],
      clearable: false
    },
    formItemProps: {
      rules: [required()]
    },
    optionApi: async () => {
      const res = await getAvailableCurrenciesApi()
      return (res.data.data || []).map((currency) => {
        return {
          label: t(`system.available_currency.${currency}`),
          value: currency
        } as SelectOption
      })
    }
  },
  {
    field: 'currencyPosition',
    label: t('router.views.settings.properties.propertyForm.currencyPositionLabel'),
    colProps: {
      span: 12
    },
    component: 'SelectV2',
    componentProps: {
      options: [],
      clearable: false
    },
    formItemProps: {
      rules: [required()]
    },
    optionApi: async () => {
      return Object.values(BeforeAfterEnum).map((currencyPosition) => {
        return {
          label: t(`system.currency_position.${currencyPosition}`),
          value: currencyPosition
        } as SelectOption
      })
    }
  },
  {
    field: 'amenitiesDivider',
    label: t('router.views.properties.propertyForm.amenitiesDividerTitle'),
    component: 'Divider'
  },
  {
    field: 'amenities',
    component: 'CheckboxGroup',
    colProps: {
      span: 24
    },
    value: amenitiesValues,
    componentProps: {
      options: []
    },
    optionApi: async () => {
      const res = await getAvailableAmenitiesApi()
      return (res.data.data || []).map((amenityKey) => {
        return {
          label: t(`system.amenities.${amenityKey}`),
          value: amenityKey
        } as CheckboxOption
      })
    }
  },
  {
    field: 'servicesDivider',
    label: t('router.views.properties.propertyForm.servicesDividerTitle'),
    component: 'Divider'
  },
  {
    field: 'services',
    component: 'CheckboxGroup',
    colProps: {
      span: 24
    },
    componentProps: {
      options: [],
      on: {
        change: async (value: string[]) => {
          console.log(value)
        }
      }
    },
    optionApi: async () => {
      const res = await getAvailableServicesApi()
      return (res.data.data || []).map((service) => {
        return {
          label: t(`system.available_services.${service}`),
          value: service
        } as CheckboxOption
      })
    }
  },
  {
    field: 'bookingPoliciesDivider',
    label: t('router.views.properties.propertyForm.bookingPoliciesDividerTitle'),
    component: 'Divider'
  },
  {
    field: 'allowPreviousDayReservations',
    label: t('router.views.properties.propertyForm.allowPreviousDayReservationsLabel'),
    component: 'Switch',
    colProps: {
      span: 24
    },
    value: false,
    componentProps: {
      'active-value': true,
      'inactivate-value': false,
      activeText: t('common.actived'),
      inactivateText: t('common.inactived'),
      inlinePrompt: true,
      on: {
        change: async () => {
          // hidden previousDayReservationsDeadline Field if allowPreviousDayReservations is false
          if (hotelDetails?.policy.booking_policy.allow_previous_day_reservations === undefined) {
            return
          }
          hotelDetails.policy.booking_policy.allow_previous_day_reservations =
            !hotelDetails.policy.booking_policy.allow_previous_day_reservations
          await setSchema([
            {
              field: 'previousDayReservationsDeadline',
              path: 'hidden',
              value: !hotelDetails.policy.booking_policy.allow_previous_day_reservations
            }
          ])
        }
      }
    }
  },
  {
    field: 'previousDayReservationsDeadline',
    label: t('router.views.properties.propertyForm.previousDayReservationsDeadlineLabel'),
    component: 'SelectV2',
    colProps: {
      span: 24
    },
    hidden: false,
    value: '',
    componentProps: {
      options: [],
      clearable: false
    },
    optionApi: async () => {
      return Object.values(HalfHourEnum).map((hour) => {
        return {
          label: hour,
          value: hour
        } as SelectOption
      })
    }
  },
  {
    field: 'allowSameDayReservations',
    label: t('router.views.properties.propertyForm.allowSameDayReservationsLabel'),
    component: 'Switch',
    colProps: {
      span: 24
    },
    value: false,
    componentProps: {
      'active-value': true,
      'inactivate-value': false,
      activeText: t('common.actived'),
      inactivateText: t('common.inactived'),
      inlinePrompt: true,
      on: {
        change: async () => {
          // hidden allowSameDayReservationsUntil Field if allowSameDayReservations is false
          if (hotelDetails?.policy.booking_policy.allow_same_day_reservations === undefined) {
            return
          }
          hotelDetails.policy.booking_policy.allow_same_day_reservations =
            !hotelDetails.policy.booking_policy.allow_same_day_reservations
          await setSchema([
            {
              field: 'allowSameDayReservationsUntil',
              path: 'hidden',
              value: !hotelDetails.policy.booking_policy.allow_same_day_reservations
            }
          ])
        }
      }
    }
  },
  {
    field: 'allowSameDayReservationsUntil',
    label: t('router.views.properties.propertyForm.allowSameDayReservationsUntilLabel'),
    component: 'SelectV2',
    colProps: {
      span: 24
    },
    hidden: false,
    value: '',
    componentProps: {
      options: [],
      clearable: false
    },
    optionApi: async () => {
      return Object.values(HalfHourEnum).map((hour) => {
        return {
          label: hour,
          value: hour
        } as SelectOption
      })
    }
  },
  {
    field: 'checkInOutPoliciesDivider',
    label: t('router.views.properties.propertyForm.checkInOutPoliciesDividerTitle'),
    component: 'Divider'
  },
  {
    field: 'checkInEndTime',
    label: t('router.views.properties.propertyForm.checkInEndTimeLabel'),
    component: 'SelectV2',
    colProps: {
      span: 24
    },
    hidden: false,
    value: '',
    componentProps: {
      options: [],
      clearable: false
    },
    optionApi: async () => {
      return Object.values(HalfHourEnum).map((hour) => {
        return {
          label: hour,
          value: hour
        } as SelectOption
      })
    }
  },
  {
    field: 'checkInStartTime',
    label: t('router.views.properties.propertyForm.checkInStartTimeLabel'),
    component: 'SelectV2',
    colProps: {
      span: 24
    },
    hidden: false,
    value: '',
    componentProps: {
      options: [],
      clearable: false
    },
    optionApi: async () => {
      return Object.values(HalfHourEnum).map((hour) => {
        return {
          label: hour,
          value: hour
        } as SelectOption
      })
    }
  },
  {
    field: 'checkOutTime',
    label: t('router.views.properties.propertyForm.checkOutTimeLabel'),
    component: 'SelectV2',
    colProps: {
      span: 24
    },
    hidden: false,
    value: '',
    componentProps: {
      options: [],
      clearable: false
    },
    optionApi: async () => {
      return Object.values(HalfHourEnum).map((hour) => {
        return {
          label: hour,
          value: hour
        } as SelectOption
      })
    }
  },
  {
    field: 'minimumCheckInAge',
    label: t('router.views.properties.propertyForm.minimumCheckInAgeLabel'),
    component: 'SelectV2',
    colProps: {
      span: 24
    },
    hidden: false,
    value: '',
    componentProps: {
      options: [],
      clearable: false
    },
    optionApi: async () => {
      return Object.values(AgeEnum).map((age) => {
        return {
          label: age,
          value: age
        } as SelectOption
      })
    }
  },
  {
    field: 'ageRestrictionsNotes',
    label: t('router.views.properties.propertyForm.ageRestrictionsNotes'),
    component: 'DynamicInput',
    colProps: {
      span: 24
    },
    value: []
  },
  {
    field: 'earlyCheckInAllowed',
    label: t('router.views.properties.propertyForm.allowSameDayReservationsLabel'),
    component: 'Switch',
    colProps: {
      span: 24
    },
    value: false,
    componentProps: {
      'active-value': true,
      'inactivate-value': false,
      activeText: t('common.actived'),
      inactivateText: t('common.inactived'),
      inlinePrompt: true,
      on: {
        change: async () => {
          // hidden allowSameDayReservationsUntil Field if allowSameDayReservations is false
          if (hotelDetails?.policy.check_in_out_policy.early_check_in_allowed === undefined) {
            return
          }
          hotelDetails.policy.check_in_out_policy.early_check_in_allowed =
            !hotelDetails.policy.check_in_out_policy.early_check_in_allowed
          await setSchema([
            {
              field: 'earlyCheckInChargedUnitType',
              path: 'hidden',
              value: !hotelDetails.policy.check_in_out_policy.early_check_in_allowed
            },
            {
              field: 'earlyCheckInValue',
              path: 'hidden',
              value: !hotelDetails.policy.check_in_out_policy.early_check_in_allowed
            },
            {
              field: 'earlyCheckInChargedUnit',
              path: 'hidden',
              value: !hotelDetails.policy.check_in_out_policy.early_check_in_allowed
            }
          ])
        }
      }
    }
  },
  {
    field: 'earlyCheckInChargedUnitType',
    label: t('router.views.properties.propertyForm.earlyCheckInChargedUnitTypeLabel'),
    component: 'SelectV2',
    colProps: {
      span: 24
    },
    hidden: false,
    value: '',
    componentProps: {
      options: [],
      clearable: false
    },
    optionApi: async () => {
      return Object.values(ValueOrPercentEnum).map((unit) => {
        return {
          label: t(`enum.valueOrPercent.${unit}`),
          value: unit
        } as SelectOption
      })
    }
  },
  {
    field: 'earlyCheckInChargedUnit',
    label: t('router.views.properties.propertyForm.earlyCheckInChargedUnitLabel'),
    component: 'SelectV2',
    colProps: {
      span: 24
    },
    hidden: false,
    value: '',
    componentProps: {
      options: [],
      clearable: false
    },
    optionApi: async () => {
      return Object.values(TimeIntervalEnum).map((interval) => {
        return {
          label: t(`enum.timeInterval.${interval}`),
          value: interval
        } as SelectOption
      })
    }
  },
  {
    field: 'earlyCheckInValue',
    label: t('router.views.properties.propertyForm.earlyCheckInChargeLabel'),
    component: 'Input',
    colProps: {
      span: 24
    }
  },
  {
    field: 'lateCheckOutAllowed',
    label: t('router.views.properties.propertyForm.lateCheckOutAllowedLabel'),
    component: 'Switch',
    colProps: {
      span: 24
    },
    value: false,
    componentProps: {
      'active-value': true,
      'inactivate-value': false,
      activeText: t('common.actived'),
      inactivateText: t('common.inactived'),
      inlinePrompt: true,
      on: {
        change: async () => {
          // hidden allowSameDayReservationsUntil Field if allowSameDayReservations is false
          if (hotelDetails?.policy.check_in_out_policy.late_check_out_allowed === undefined) {
            return
          }
          hotelDetails.policy.check_in_out_policy.late_check_out_allowed =
            !hotelDetails.policy.check_in_out_policy.late_check_out_allowed
          await setSchema([
            {
              field: 'lateCheckOutChargedUnitType',
              path: 'hidden',
              value: !hotelDetails.policy.check_in_out_policy.late_check_out_allowed
            },
            {
              field: 'lateCheckOutValue',
              path: 'hidden',
              value: !hotelDetails.policy.check_in_out_policy.late_check_out_allowed
            },
            {
              field: 'lateCheckOutChargedUnit',
              path: 'hidden',
              value: !hotelDetails.policy.check_in_out_policy.late_check_out_allowed
            }
          ])
        }
      }
    }
  },
  {
    field: 'lateCheckOutChargedUnitType',
    label: t('router.views.properties.propertyForm.lateCheckOutChargedUnitTypeLabel'),
    component: 'SelectV2',
    colProps: {
      span: 24
    },
    hidden: false,
    value: '',
    componentProps: {
      options: [],
      clearable: false
    },
    optionApi: async () => {
      return Object.values(ValueOrPercentEnum).map((unit) => {
        return {
          label: t(`enum.valueOrPercent.${unit}`),
          value: unit
        } as SelectOption
      })
    }
  },
  {
    field: 'lateCheckOutChargedUnit',
    label: t('router.views.properties.propertyForm.lateCheckOutChargedUnitLabel'),
    component: 'SelectV2',
    colProps: {
      span: 24
    },
    hidden: false,
    value: '',
    componentProps: {
      options: [],
      clearable: false
    },
    optionApi: async () => {
      return Object.values(TimeIntervalEnum).map((interval) => {
        return {
          label: t(`enum.timeInterval.${interval}`),
          value: interval
        } as SelectOption
      })
    }
  },
  {
    field: 'lateCheckOutValue',
    label: t('router.views.properties.propertyForm.lateCheckOutValueLabel'),
    component: 'Input',
    colProps: {
      span: 24
    }
  },
  {
    field: 'infantsAndChildrenDivider',
    label: t('router.views.properties.propertyForm.infantsAndChildrenTitle'),
    component: 'Divider'
  },
  {
    field: 'infantsAgeLimit',
    label: t('router.views.properties.propertyForm.infantsAgeLimitLabel'),
    component: 'InputNumber',
    colProps: {
      span: 12
    }
  },
  {
    field: 'infantAmenitiesPolicy',
    label: t('router.views.properties.propertyForm.infantAmenitiesPolicyLabel'),
    component: 'Input',
    colProps: {
      span: 12
    }
  },
  {
    field: 'minimumAgeLimitForChildrenAccommodation',
    label: t('router.views.properties.propertyForm.minimumAgeLimitForChildrenAccommodationLabel'),
    component: 'InputNumber',
    colProps: {
      span: 12
    }
  },
  {
    field: 'childrenAgeLimit',
    label: t('router.views.properties.propertyForm.childrenAgeLimitLabel'),
    component: 'InputNumber',
    colProps: {
      span: 12
    }
  },
  {
    field: 'cancellationPoliciesDivider',
    label: t('router.views.properties.propertyForm.cancellationPoliciesTitle'),
    component: 'Divider'
  },
  {
    field: 'cancellationPolicies',
    component: 'CancellationInput',
    colProps: {
      span: 24
    }
  },
  {
    field: 'CancellationPolicyNotes',
    label: t('router.views.properties.propertyForm.CancellationPolicyNotesTitle'),
    component: 'DynamicInput',
    colProps: {
      span: 24
    },
    componentProps: {
      hasCardContainer: true
    },
    value: []
  },
  {
    field: 'infantAmenitiesPolicy',
    label: t('router.views.properties.propertyForm.infantAmenitiesPolicyTitle'),
    component: 'DynamicInput',
    colProps: {
      span: 24
    },
    componentProps: {
      hasCardContainer: true
    },
    value: []
  },
  {
    field: 'termsAndConditionsDivider',
    label: t('router.views.properties.propertyForm.termsAndConditionsTitle'),
    component: 'Divider'
  },
  {
    field: 'termsAndConditions',
    component: 'DynamicInput',
    colProps: {
      span: 24
    },
    componentProps: {
      hasCardContainer: true
    },
    value: []
  },
  {
    field: 'theFinePrintDivider',
    label: t('router.views.properties.propertyForm.theFinePrintTitle'),
    component: 'Divider'
  },
  {
    field: 'theFinePrint',
    component: 'DynamicInput',
    colProps: {
      span: 24
    },
    componentProps: {
      hasCardContainer: true
    },
    value: []
  },
  {
    field: 'GoodToKnowDivider',
    label: t('router.views.properties.propertyForm.GoodToKnowTitle'),
    component: 'Divider'
  },
  {
    field: 'goodToKnow',
    component: 'DynamicInput',
    colProps: {
      span: 24
    },
    componentProps: {
      hasCardContainer: true
    },
    value: []
  },
  {
    field: 'petsDivider',
    label: t('router.views.properties.propertyForm.petsTitle'),
    component: 'Divider'
  },
  {
    field: 'petsPolicy',
    label: t('router.views.properties.propertyForm.petsPolicyLabel'),
    component: 'SelectV2',
    colProps: {
      span: 24
    },
    hidden: false,
    value: '',
    componentProps: {
      options: [],
      clearable: false
    },
    optionApi: async () => {
      return Object.values(PetPolicyEnum).map((policy) => {
        return {
          label: t(`enum.petPolicy.${policy}`),
          value: policy
        } as SelectOption
      })
    }
  },
  {
    field: 'petsPolicyNote',
    label: t('router.views.properties.propertyForm.petsPolicyNoteLabel'),
    component: 'DynamicInput',
    colProps: {
      span: 24
    },
    componentProps: {
      hasCardContainer: true
    },
    value: []
  },
  {
    field: 'parkingDivider',
    label: t('router.views.properties.propertyForm.parkingTitle'),
    component: 'Divider'
  },
  {
    field: 'parking',
    label: t('router.views.properties.propertyForm.parkingLabel'),
    component: 'DynamicInput',
    colProps: {
      span: 24
    },
    componentProps: {
      hasCardContainer: true
    },
    value: []
  },
  {
    field: 'creditCardDivider',
    label: t('router.views.properties.propertyForm.creditCardTitle'),
    component: 'Divider'
  },
  {
    field: 'carditCardPayment',
    label: t('router.views.properties.propertyForm.creditCardPaymentLabel'),
    component: 'Switch',
    colProps: {
      span: 24
    },
    value: false,
    componentProps: {
      'active-value': true,
      'inactivate-value': false,
      activeText: t('common.actived'),
      inactivateText: t('common.inactived'),
      inlinePrompt: true
    }
  },
  {
    field: 'availableCreditCards',
    component: 'CheckboxGroup',
    label: t('router.views.properties.propertyForm.availableCreditCardsLabel'),
    colProps: {
      span: 24
    },
    value: [],
    componentProps: {
      options: []
    },
    optionApi: async () => {
      const res = await getAvailableCreditCardsApi()
      return (res.data.data || []).map((creditCard) => {
        return {
          label: t(`enum.creditCard.${creditCard}`),
          value: creditCard
        } as CheckboxOption
      })
    }
  },
  {
    field: 'bankTransferDivider',
    label: t('router.views.properties.propertyForm.bankTransferTitle'),
    component: 'Divider'
  },
  {
    field: 'enabledBankTransfer',
    label: t('router.views.properties.propertyForm.enabledBankTransferLabel'),
    component: 'Switch',
    colProps: {
      span: 24
    },
    value: false,
    componentProps: {
      'active-value': true,
      'inactivate-value': false,
      activeText: t('common.actived'),
      inactivateText: t('common.inactived'),
      inlinePrompt: true
    }
  },
  {
    field: 'accountName',
    label: t('router.views.properties.propertyForm.accountNameLabel'),
    component: 'Input',
    colProps: {
      span: 12
    }
  },
  {
    field: 'accountNumber',
    label: t('router.views.properties.propertyForm.accountNumberLabel'),
    component: 'Input',
    colProps: {
      span: 12
    }
  },
  {
    field: 'bankCode',
    label: t('router.views.properties.propertyForm.bankCodeLabel'),
    component: 'Input',
    colProps: {
      span: 12
    }
  },
  {
    field: 'bankName',
    label: t('router.views.properties.propertyForm.bankNameLabel'),
    component: 'Input',
    colProps: {
      span: 12
    }
  },
  {
    field: 'branchName',
    label: t('router.views.properties.propertyForm.branchNameLabel'),
    component: 'Input',
    colProps: {
      span: 12
    }
  },
  {
    field: 'iban',
    label: t('router.views.properties.propertyForm.ibanLabel'),
    component: 'Input',
    colProps: {
      span: 12
    }
  },
  {
    field: 'routingNumber',
    label: t('router.views.properties.propertyForm.routingNumberLabel'),
    component: 'Input',
    colProps: {
      span: 12
    }
  },
  {
    field: 'swiftCode',
    label: t('router.views.properties.propertyForm.swiftCodeLabel'),
    component: 'Input',
    colProps: {
      span: 12
    }
  },
  {
    field: 'CashDivider',
    label: t('router.views.properties.propertyForm.cashTitle'),
    component: 'Divider'
  },
  {
    field: 'cashPayment',
    label: t('router.views.properties.propertyForm.cashPaymentLabel'),
    component: 'Switch',
    colProps: {
      span: 24
    },
    value: false,
    componentProps: {
      'active-value': true,
      'inactivate-value': false,
      activeText: t('common.actived'),
      inactivateText: t('common.inactived'),
      inlinePrompt: true
    }
  }
])
let formMode: string = 'add'

const rules = reactive({
  sequence: [required()],
  status: [required()],
  name: [required()],
  price: [required()]
})

/**
 * Executes the code block before the component is mounted.
 * If a propertyId is provided, it enters the update mode, loads hotel details using the usePropertyStore() function,
 * and sets the form values using the setFormValues() function.
 */
onBeforeMount(async () => {
  if (props.propertyId) {
    // update mode
    formMode = 'update'
    Object.assign(hotelDetails, await FetchHotelDetails(props.propertyId))
    setFormValues()
  }
})

const submit = async () => {
  try {
    const elForm = await getElFormExpose()
    const valid = await elForm?.validate().catch((err) => {
      console.log(err)
    })
    if (valid) {
      if (formMode === 'add') {
        // create new property
        const data = (await getFormData()) as HotelDetails // force convert to HotelDetails DataType
        await updateFormDataToHotelDetails()
        await postPropertyApi({ data: data })
        ElMessage.success('新增成功')
      } else {
        // update exist property
        if (!props.propertyId || !hotelDetails) {
          ElMessage.error(t('error.propertyIdIsNull'))
          throw new Error('propertyId is null')
        }
        await updateFormDataToHotelDetails()
        await updateProperty(hotelDetails)
        ElMessage.success('儲存成功')
      }
    }
  } catch (err) {
    console.log(err)
  }
}

/**
 * Update propertyStore HotelDetails
 */
const updateFormDataToHotelDetails = async () => {
  const formData = await getFormData()

  let bankTransfer: PropertypaymentMethodBankTransfer
  let cash: PropertypaymentMethodCash
  let creditCard: PropertyPaymentMethodsCardType
  let bookingPolicy: BookingPolicy
  let checkInOutPolicy: CheckInOutPolicy

  bankTransfer = {
    account_name: formData.accountName,
    account_number: formData.accountNumber,
    bank_code: formData.bankCode,
    bank_name: formData.bankName,
    branch_name: formData.branchName,
    enabled: formData.enabledBankTransfer,
    iban: formData.iban,
    payment_type_id: 'bank_transfer',
    routing_number: formData.routingNumber,
    swift_code: formData.swiftCode
  }
  cash = {
    enabled: formData.cashPayment,
    payment_type_id: 'cash'
  }
  creditCard = {
    available_card: formData.availableCreditCards,
    enabled: formData.carditCardPayment,
    payment_type_id: 'credit_card'
  }
  bookingPolicy = {
    allow_previous_day_reservations: formData.allowPreviousDayReservations,
    allow_same_day_reservations: formData.allowSameDayReservations,
    previous_day_reservations_deadline: formData.previousDayReservationsDeadline,
    same_day_reservations_deadline: formData.allowSameDayReservationsUntil
  }
  checkInOutPolicy = {
    age_restrictions_notes: formData.ageRestrictionsNotes,
    check_in_end_time: formData.checkInEndTime,
    check_in_out_notes: formData.checkInOutNotes,
    check_in_start_time: formData.checkInStartTime,
    check_out_time: formData.checkOutTime,
    early_check_in_allowed: formData.earlyCheckInAllowed,
    early_check_in_type: formData.earlyCheckInChargedUnitType,
    early_check_in_value: formData.earlyCheckInValue,
    early_check_in_value_unit: formData.earlyCheckInChargedUnit,
    late_check_out_allowed: formData.lateCheckOutAllowed,
    late_check_out_type: formData.lateCheckOutChargedUnitType,
    late_check_out_value: formData.lateCheckOutValue,
    late_check_out_value_unit: formData.lateCheckOutChargedUnit,
    minimum_checkin_age: formData.minimumCheckInAge
  }

  hotelDetails.address = {
    address1: formData.address1,
    address2: formData.address2,
    city: formData.city,
    country: formData.country,
    latitude: formData.latitude,
    longitude: formData.longitude,
    state: formData.state,
    zip: formData.zipCode
  }
  hotelDetails.amenities = formData.amenities
  hotelDetails.available_languages = formData.availableLanguages
  hotelDetails.currency = {
    currency_code: formData.currency,
    currency_position: formData.currencyPosition
  }
  hotelDetails.description = formData.description
  hotelDetails.email = formData.email
  hotelDetails.good_to_know = formData.goodToKnow
  hotelDetails.payment = {
    methods: {
      bank_transfer: bankTransfer,
      cash: cash,
      credit_card: creditCard
    }
  }
  hotelDetails.phone = formData.phone
  hotelDetails.policy = {
    booking_policy: bookingPolicy,
    check_in_out_policy: checkInOutPolicy,
    children_age_limit: formData.childrenAgeLimit,
    default_cancellation_policy: formData.cancellationPolicies,
    default_cancellation_policy_notes: formData.CancellationPolicyNotes,
    infant_amenities_policy: formData.infantAmenitiesPolicy,
    infants_age_limit: formData.infantsAgeLimit,
    minimum_age_limit_for_children_accommodation: formData.minimumAgeLimitForChildrenAccommodation,
    parking_policy: formData.parking,
    pets_policy: formData.petsPolicy,
    pets_policy_notes: formData.petsPolicyNote,
    terms_and_conditions: formData.termsAndConditions
  }
  hotelDetails.property_id = formData.propertyId
  hotelDetails.services = formData.services
  hotelDetails.the_fine_print = formData.theFinePrint
}
/**
 * Set form values
 */
const setFormValues = () => {
  if (!hotelDetails) return
  const formData = {
    // fulfill form
    propertyId: hotelDetails?.property_id,
    name: hotelDetails?.name,
    description: hotelDetails?.description,
    phone: hotelDetails?.phone,
    email: hotelDetails?.email,
    zipCode: hotelDetails?.address.zip,
    address1: hotelDetails?.address.address1,
    address2: hotelDetails?.address.address2,
    longtitue: hotelDetails?.address.longitude,
    latitude: hotelDetails?.address.latitude,
    city: hotelDetails?.address.city,
    state: hotelDetails?.address.state,
    country: hotelDetails?.address.country,
    availableLanguages: hotelDetails?.available_languages,
    // image: hotelDetails.image,
    currency: hotelDetails?.currency.currency_code,
    currencyPosition: hotelDetails?.currency.currency_position,
    // currency_symbol: hotelDetails?.currency.currency_symbol,
    amenities: hotelDetails?.amenities || [],
    services: hotelDetails?.services || [],
    allowPreviousDayReservations:
      hotelDetails?.policy.booking_policy.allow_previous_day_reservations,
    previousDayReservationsDeadline:
      hotelDetails?.policy.booking_policy.previous_day_reservations_deadline,
    allowSameDayReservations: hotelDetails?.policy.booking_policy.allow_same_day_reservations,
    allowSameDayReservationsUntil:
      hotelDetails?.policy.booking_policy.same_day_reservations_deadline,
    checkInEndTime: hotelDetails?.policy.check_in_out_policy.check_in_end_time,
    checkInStartTime: hotelDetails?.policy.check_in_out_policy.check_in_start_time,
    checkOutTime: hotelDetails?.policy.check_in_out_policy.check_out_time,
    minimumCheckInAge: hotelDetails?.policy.check_in_out_policy.minimum_checkin_age,
    ageRestrictionsNotes: hotelDetails?.policy.check_in_out_policy.age_restrictions_notes ?? [],
    earlyCheckInAllowed: hotelDetails?.policy.check_in_out_policy.early_check_in_allowed,
    earlyCheckInChargedUnitType: hotelDetails?.policy.check_in_out_policy.early_check_in_type,
    earlyCheckInChargedUnit: hotelDetails?.policy.check_in_out_policy.early_check_in_value_unit,
    earlyCheckInValue: hotelDetails?.policy.check_in_out_policy.early_check_in_value,
    lateCheckOutAllowed: hotelDetails?.policy.check_in_out_policy.late_check_out_allowed,
    lateCheckOutChargedUnitType: hotelDetails?.policy.check_in_out_policy.late_check_out_type,
    lateCheckOutChargedUnit: hotelDetails?.policy.check_in_out_policy.late_check_out_value_unit,
    lateCheckOutValue: hotelDetails?.policy.check_in_out_policy.late_check_out_value,
    infantsAgeLimit: hotelDetails?.policy.infants_age_limit,
    infantAmenitiesPolicy: hotelDetails?.policy.infant_amenities_policy,
    minimumAgeLimitForChildrenAccommodation:
      hotelDetails?.policy.minimum_age_limit_for_children_accommodation,
    childrenAgeLimit: hotelDetails?.policy.children_age_limit,
    cancellationPolicies: hotelDetails?.policy.default_cancellation_policy || [],
    CancellationPolicyNotes: hotelDetails?.policy.default_cancellation_policy_notes || [],
    termsAndConditions: hotelDetails?.policy.terms_and_conditions,
    theFinePrint: hotelDetails?.the_fine_print || [],
    goodToKnow: hotelDetails?.good_to_know || [],
    petsPolicy: hotelDetails?.policy.pets_policy,
    petsPolicyNote: hotelDetails?.policy.pets_policy_notes || [],
    parking: hotelDetails?.policy.parking_policy,
    carditCardPayment: hotelDetails?.payment.methods.credit_card?.enabled || false,
    availableCreditCards: hotelDetails?.payment.methods.credit_card?.available_card || [],
    enabledBankTransfer: hotelDetails?.payment.methods.bank_transfer?.enabled || false,
    accountName: hotelDetails?.payment.methods.bank_transfer?.account_name || '',
    accountNumber: hotelDetails?.payment.methods.bank_transfer?.account_number || '',
    bankCode: hotelDetails?.payment.methods.bank_transfer?.bank_code || '',
    bankName: hotelDetails?.payment.methods.bank_transfer?.bank_name || '',
    branchName: hotelDetails?.payment.methods.bank_transfer?.branch_name || '',
    iban: hotelDetails?.payment.methods.bank_transfer?.iban || '',
    routingNumber: hotelDetails?.payment.methods.bank_transfer?.routing_number || '',
    swiftCode: hotelDetails?.payment.methods.bank_transfer?.swift_code || '',
    cashPayment: hotelDetails?.payment.methods.cash?.enabled || false
    // additional_photos: hotelDetails?.additional_photos,
  }
  setValues(formData)
}

defineExpose({
  submit
})
</script>

<template>
  <div>
    <Form :rules="rules" @register="formRegister" :schema="schema" :auto-set-placeholder="false" />
  </div>
</template>
