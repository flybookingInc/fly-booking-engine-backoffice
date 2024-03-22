<script setup lang="tsx">
import { Form, FormSchema, SelectOption, CheckboxOption } from '@/components/Form'
import { useForm } from '@/hooks/web/useForm'
import { reactive, watch, ref, onBeforeMount } from 'vue'
import { useValidator } from '@/hooks/web/useValidator'
import { HotelDetails, Language } from '@/types/stores/property'
import { getPropertyApi, postPropertyApi, putPropertyApi } from '@/api/setting/property'
import {
  getAvailableAmenitiesApi,
  getAvailableCurrenciesApi,
  getAvailableLanguagesApi,
  getAvailableServicesApi
} from '@/api/system'
import { ElMessage } from 'element-plus'
import { useI18n } from '@/hooks/web/useI18n'
import { GetPropertyRequest } from '@/types/api/property/getProperty'
import {
  AgeEnum,
  BeforeAfterEnum,
  HalfHourEnum,
  TimeIntervalEnum,
  ValueOrPercentEnum
} from '@/types/enums/dataStore'

const { t } = useI18n()
const { required } = useValidator()

interface Props {
  propertyId?: string
}

const props = defineProps<Props>()

const { formRegister, formMethods } = useForm()
const { setValues, getFormData, getElFormExpose, setSchema } = formMethods

let hotelDetails: HotelDetails | undefined = undefined
let formMode: string = 'add'
const amenitiesValues = ref<string[]>([])
const theFinePrintValue = ref<string[]>([])
const goodToKnowValue = ref<string[]>([])

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
    field: 'zip_code',
    label: t('settings.property.zip'),
    component: 'Input',
    colProps: {
      span: 12
    }
  },
  {
    field: 'address1',
    label: t('settings.property.address'),
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
    field: 'available_languages',
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
      const res = await getAvailableLanguagesApi({ pageIndex: 1, pageSize: 1000 })
      return (res.data.data || []).map((language: Language) => {
        return {
          label: language.name,
          value: language.code,
          id: language.code
        } as SelectOption
      })
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
      const res = await getAvailableCurrenciesApi({ pageIndex: 1, pageSize: 1000 })
      return (res.data.data || []).map((currency) => {
        return {
          label: t(`system.available_currency.${currency.code}`),
          value: currency.code,
          symbol: currency.symbol
        } as SelectOption
      })
    }
  },
  {
    field: 'currency_position',
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
    label: t('settings.property.amenities'),
    component: 'CheckboxGroup',
    colProps: {
      span: 24
    },
    value: amenitiesValues,
    componentProps: {
      options: []
    },
    optionApi: async () => {
      const res = await getAvailableAmenitiesApi({ pageIndex: 1, pageSize: 1000 })
      return (res.data.data || []).map((amenityKey) => {
        return {
          label: t(`system.amenities.${amenityKey}`),
          value: amenityKey,
          id: amenityKey
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
    label: t('router.views.properties.propertyForm.servicesLabel'),
    component: 'CheckboxGroup',
    colProps: {
      span: 24
    },
    componentProps: {
      options: []
    },
    optionApi: async () => {
      const res = await getAvailableServicesApi({ pageIndex: 1, pageSize: 1000 })
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
      activeText: t('common.active'),
      inactivateText: t('common.inactive'),
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
    },
    optionApi: async () => {
      await setValues({
        allowPreviousDayReservations:
          hotelDetails?.policy.booking_policy.allow_previous_day_reservations
      })
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
      // await setValues({
      //   previousDayReservationsDeadline:
      //     hotelDetails?.policy.booking_policy.previous_day_reservations_deadline
      // })
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
      activeText: t('common.active'),
      inactivateText: t('common.inactive'),
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
    },
    optionApi: async () => {
      await setValues({
        allowSameDayReservations: hotelDetails?.policy.booking_policy.allow_same_day_reservations
      })
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
      await setValues({
        allowSameDayReservationsUntil:
          hotelDetails?.policy.booking_policy.same_day_reservations_deadline
      })
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
      await setValues({
        checkInEndTime: hotelDetails?.policy.check_in_out_policy.check_in_end_time
      })
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
      await setValues({
        checkInStartTime: hotelDetails?.policy.check_in_out_policy.check_in_start_time
      })
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
      await setValues({
        checkOutTime: hotelDetails?.policy.check_in_out_policy.check_out_time
      })
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
      await setValues({
        minimumCheckInAge: hotelDetails?.policy.check_in_out_policy.minimum_checkin_age
      })
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
    value: [],
    optionApi: async () => {
      await setValues({
        ageRestrictionsNotes: hotelDetails?.policy.check_in_out_policy.age_restrictions_notes ?? []
      })
    }
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
      activeText: t('common.active'),
      inactivateText: t('common.inactive'),
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
    },
    optionApi: async () => {
      await setValues({
        earlyCheckInAllowed: hotelDetails?.policy.check_in_out_policy.early_check_in_allowed
      })
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
      await setValues({
        earlyCheckInChargedUnitType: hotelDetails?.policy.check_in_out_policy.early_check_in_type
      })
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
      await setValues({
        earlyCheckInChargedUnit: hotelDetails?.policy.check_in_out_policy.early_check_in_value_unit
      })
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
    },
    optionApi: async () => {
      await setValues({
        earlyCheckInValue: hotelDetails?.policy.check_in_out_policy.early_check_in_value
      })
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
      activeText: t('common.active'),
      inactivateText: t('common.inactive'),
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
    },
    optionApi: async () => {
      await setValues({
        lateCheckOutAllowed: hotelDetails?.policy.check_in_out_policy.late_check_out_allowed
      })
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
      await setValues({
        lateCheckOutChargedUnitType: hotelDetails?.policy.check_in_out_policy.late_check_out_type
      })
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
      await setValues({
        lateCheckOutChargedUnit: hotelDetails?.policy.check_in_out_policy.late_check_out_value_unit
      })
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
    },
    optionApi: async () => {
      await setValues({
        lateCheckOutValue: hotelDetails?.policy.check_in_out_policy.late_check_out_value
      })
    }
  },
  {
    field: 'theFinePrintDivider',
    label: t('router.views.properties.propertyForm.theFinePrintTitle'),
    component: 'Divider'
  },
  {
    field: 'theFinePrint',
    label: t('router.views.properties.propertyForm.theFinePrint'),
    component: 'DynamicInput',
    colProps: {
      span: 24
    },
    value: [],
    optionApi: async () => {
      await setValues({ theFinePrint: theFinePrintValue.value })
    }
  },
  {
    field: 'GoodToKnowDivider',
    label: t('router.views.properties.propertyForm.GoodToKnowTitle'),
    component: 'Divider'
  },
  {
    field: 'goodToKnow',
    label: t('router.views.properties.propertyForm.goodToKnow'),
    component: 'DynamicInput',
    colProps: {
      span: 24
    },
    value: [],
    optionApi: async () => {
      await setValues({ goodToKnow: goodToKnowValue.value })
    }
  }
])

const rules = reactive({
  sequence: [required()],
  status: [required()],
  name: [required()],
  price: [required()]
})

const updateFormDataToHotelDetails = (data: HotelDetails) => {
  data = data
}

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
        await postPropertyApi({ data: data })
        ElMessage.success('新增成功')
      } else {
        // update exist property
        if (!props.propertyId || !hotelDetails) ElMessage.error(t('error.propertyIdIsNull'))
        const data = (await getFormData()) as HotelDetails
        updateFormDataToHotelDetails(data)

        // update DB
        await putPropertyApi({ data: data })
        ElMessage.success('儲存成功')
      }
    }
  } catch (err) {
    console.log(err)
  }
}

onBeforeMount(async () => {
  if (!props.propertyId) throw new Error('propertyId is null')
  // load hotelDetails from server
  await loadHotelDetails()
  theFinePrintValue.value = hotelDetails?.the_fine_print || []
  goodToKnowValue.value = hotelDetails?.good_to_know || []
})

/**
 * Load HotelDetails from server
 */
const loadHotelDetails = async () => {
  if (!props.propertyId) throw new Error('propertyId is null')
  const res = await getPropertyApi({ property_id: props.propertyId } as GetPropertyRequest)
  if (res.status !== 200 && res.data) {
    return
  }
  hotelDetails = res.data.data as HotelDetails
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
    address1: hotelDetails?.address.address1,
    city: hotelDetails?.address.city,
    state: hotelDetails?.address.state,
    country: hotelDetails?.address.country,
    zip_code: hotelDetails?.address.zip,
    // image: hotelDetails.image,
    description: hotelDetails?.description,
    currency: hotelDetails?.currency.currency_code,
    currency_symbol: hotelDetails?.currency.currency_symbol,
    currency_position: hotelDetails?.currency.currency_position,
    available_languages: hotelDetails?.available_languages.map((lang: Language) => lang.name),
    additional_photos: hotelDetails?.additional_photos,
    phone: hotelDetails?.phone,
    email: hotelDetails?.email,
    address: hotelDetails?.address,
    policy: hotelDetails?.policy,
    amenities: Object.keys(hotelDetails?.amenities || {}).map((amenityKey) => {
      return hotelDetails?.amenities[amenityKey]
    }),
    service: hotelDetails?.services,
    good_to_know: hotelDetails?.good_to_know,
    the_fine_print: hotelDetails?.the_fine_print
  }
  setValues(formData)
}

/**
 * this watch will trigger when propertyId is changed
 * load hotel details from server
 * and fulfill form
 */
watch(
  () => props.propertyId,
  async (newPropertyId, _oldPropertyId) => {
    if (!newPropertyId) throw new Error('hotelId is null')
    formMode = 'update'

    // load hotelDetails from server if not exist or propertyId is changed
    if (!hotelDetails || hotelDetails.property_id !== newPropertyId) {
      await loadHotelDetails()
      setFormValues()
    }
  },
  {
    immediate: true,
    deep: true
  }
)

defineExpose({
  submit
})
</script>

<template>
  <div>
    <Form :rules="rules" @register="formRegister" :schema="schema" :auto-set-placeholder="false" />
  </div>
</template>
