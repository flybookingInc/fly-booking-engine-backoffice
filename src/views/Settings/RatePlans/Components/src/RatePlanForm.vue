<script setup lang="tsx">
import { Form, FormSchema, SelectOption } from '@/components/Form'
import { useForm } from '@/hooks/web/useForm'
import { useValidator } from '@/hooks/web/useValidator'
import { onBeforeMount, reactive } from 'vue'
// import { BaseButton } from '@/components/Button'
import { postRatePlanApi, putRatePlanApi } from '@/api/setting/ratePlan'
import {
  getAvailableRatePlanStatusApi,
  getAvailableRatePlanAllowedApi,
  getAvailableRatePlanIncludedApi
} from '@/api/system'
import { useI18n } from '@/hooks/web/useI18n'
import { usePropertyStore } from '@/store/modules/property'
import type { RatePlanDetail, RoomTypeDetail } from '@/types/stores/property'
import type { FormItemRule } from 'element-plus'
import { ElMessage } from 'element-plus'

const { t } = useI18n()
const { required } = useValidator()
const { setRatePlanDetail, fetchRatePlanDetail, fetchRoomTypes } = usePropertyStore()
const { hotelDetails } = usePropertyStore()

interface Props {
  propertyId: string
  ratePlanId?: string
}

const props = defineProps<Props>()

const { formRegister, formMethods } = useForm()
const { setValues, getFormData, getElFormExpose } = formMethods
const ratePlanDetail: RatePlanDetail = {} as RatePlanDetail
// const photoUrl = ref('')
const schema = reactive<FormSchema[]>([
  {
    field: 'ratePlanName',
    label: t('router.views.properties.propertyForm.ratePlanNameLabel'),
    component: 'Input',
    colProps: {
      span: 12
    },
    formItemProps: {
      rules: [required()]
    }
  },
  {
    field: 'status',
    label: t('router.views.properties.propertyForm.statusLabel'),
    component: 'SelectV2',
    componentProps: {
      options: []
    },
    formItemProps: {
      rules: [required()]
    },
    optionApi: async () => {
      const res = await getAvailableRatePlanStatusApi()
      return (res.data.data || []).map((status: string) => {
        return {
          label: t(`enum.ratePlanStatus.${status}`),
          value: status
        } as SelectOption
      })
    }
  },
  {
    field: 'ratePlanId',
    label: t('router.views.properties.propertyForm.ratePlanIdLabel'),
    component: 'Input',
    colProps: {
      span: 12
    },
    hidden: true
  },
  {
    field: 'pmsRatePlanId',
    label: t('router.views.properties.propertyForm.pmsRatePlanIdLabel'),
    component: 'Input',
    colProps: {
      span: 12
    }
  },
  {
    field: 'roomTypeId',
    label: t('router.views.properties.propertyForm.roomTypeLabel'),
    component: 'SelectV2',
    componentProps: {
      options: []
    },
    formItemProps: {
      rules: [required()]
    },
    optionApi: async () => {
      const data = await fetchRoomTypes(props.propertyId)
      return (data || []).map((roomType: RoomTypeDetail) => {
        return {
          label: roomType.room_type_name,
          value: roomType.room_type_id
        } as SelectOption
      })
    }
  },
  {
    field: 'allowed',
    label: t('router.views.settings.properties.propertyForm.ratePlanAllowedLabel'),
    colProps: {
      span: 24
    },
    component: 'CheckboxGroup',
    componentProps: {
      options: [],
      clearable: false,
      multiple: true
    },
    optionApi: async () => {
      const res = await getAvailableRatePlanAllowedApi()
      if (res.data.data) {
        return res.data.data.map((item: string) => {
          return {
            label: t(`enum.ratePlanAllowed.${item}`),
            value: item
          } as SelectOption
        })
      }
    }
  },
  {
    field: 'allowedNotes',
    label: t('router.views.roomType.propertyForm.ratePlanAllowedNoteTitle'),
    component: 'DynamicInput',
    colProps: {
      span: 24
    }
  },
  {
    field: 'included',
    label: t('router.views.settings.properties.propertyForm.ratePlanIncludedLabel'),
    colProps: {
      span: 24
    },
    component: 'CheckboxGroup',
    componentProps: {
      options: [],
      clearable: false,
      multiple: true
    },
    optionApi: async () => {
      const res = await getAvailableRatePlanIncludedApi()
      if (res.data.data) {
        return res.data.data.map((item: string) => {
          return {
            label: t(`enum.ratePlanIncluded.${item}`),
            value: item
          } as SelectOption
        })
      }
    }
  },
  {
    field: 'includedNotes',
    label: t('router.views.roomType.propertyForm.ratePlanIncludedNoteTitle'),
    component: 'DynamicInput',
    colProps: {
      span: 24
    }
  },
  {
    field: 'maxAdults',
    label: t('router.views.roomType.propertyForm.maxAdultsLabel'),
    component: 'Input',
    colProps: {
      span: 12
    },
    formItemProps: {
      rules: [required()]
    }
  },
  {
    field: 'maxChildren',
    label: t('router.views.roomType.propertyForm.maxChildrenLabel'),
    component: 'Input',
    colProps: {
      span: 12
    },
    formItemProps: {
      rules: [required()]
    }
  },
  {
    field: 'maxInfants',
    label: t('router.views.roomType.propertyForm.maxInfantsLabel'),
    component: 'Input',
    colProps: {
      span: 12
    },
    formItemProps: {
      rules: [required()]
    }
  },
  {
    field: 'maxExtraBeds',
    label: t('router.views.roomType.propertyForm.maxExtraBedsLabel'),
    component: 'Input',
    colProps: {
      span: 12
    },
    formItemProps: {
      rules: [required()]
    }
  }
])
let formMode: string = 'add'

const rules = reactive<{
  [key: string]: FormItemRule[]
}>({})
//   {
//   roomSize: [required()],
//   ratePlanName: [required()],
//   name: [required()],
//   price: [required()]
// }

/**
 * Executes the code block before the component is mounted.
 * If both propertyId and ratePlanId is provided, it enters the update mode, loads hotel details using the usePropertyStore() function,
 * and sets the form values using the setFormValues() function.
 */
onBeforeMount(async () => {
  if (!(props.propertyId && props.ratePlanId)) return
  try {
    // update mode
    formMode = 'update'
    Object.assign(ratePlanDetail, await fetchRatePlanDetail(props.propertyId, props.ratePlanId))
    setFormValues()
  } catch (err) {
    ElMessage.error(t('common.fetchDataFailed'))
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
        const data = (await getRatePlanDetailFromForm()) as Omit<RatePlanDetail, 'rate_plan_id'>
        const res = await postRatePlanApi({ data: data })
        if (!res.data.success || !res.data.data) {
          ElMessage.error(t('common.createFailed'))
          return
        }
        setRatePlanDetail({ rate_plan_id: res.data.data.rate_plan_id, ...data }) // add data to store
        ElMessage.success(t('common.createSuccessful'))
      } else {
        // update exist property
        if (!props.propertyId || !hotelDetails) {
          ElMessage.error(t('error.propertyIdIsNull'))
          return
        }
        const data = (await getRatePlanDetailFromForm()) as RatePlanDetail
        const res = await putRatePlanApi({ data: data, rate_plan_id: data.rate_plan_id })
        if (!res.data.success) {
          ElMessage.error(t('common.editFailed'))
          return
        }
        setRatePlanDetail(data) // // update data to store
        ElMessage.success(t('common.editSuccessful'))
      }
    }
  } catch (err) {
    console.log(err)
  }
}

const getRatePlanDetailFromForm = async (): Promise<
  RatePlanDetail | Omit<RatePlanDetail, 'rate_plan_id'>
> => {
  const data = await getFormData()
  const ratePlanDetail: Omit<RatePlanDetail, 'rate_plan_id'> = {
    status: data.status,
    pms_rate_plan_id: data.pmsRatePlanId,
    allowed: data.allowed,
    included: data.included,
    allowed_notes: data.allowedNotes,
    included_notes: data.includedNotes,
    max_adults: data.maxAdults,
    max_children: data.maxChildren,
    max_extra_beds: data.maxExtraBeds,
    max_infants: data.maxInfants,
    packages: [],
    rate_plan_name: data.ratePlanName,
    room_type_id: data.roomTypeId
  }
  if (formMode !== 'add') {
    return { rate_plan_id: data.ratePlanId, ...ratePlanDetail } as RatePlanDetail
  }
  return ratePlanDetail
}

/**
 * Set form values
 */
const setFormValues = () => {
  if (!ratePlanDetail) return
  const formData = {
    // fulfill form
    status: ratePlanDetail.status,
    ratePlanId: props.ratePlanId || '',
    roomTypeId: ratePlanDetail.room_type_id,
    pmsRatePlanId: ratePlanDetail.pms_rate_plan_id,
    ratePlanName: ratePlanDetail.rate_plan_name,
    allowed: ratePlanDetail.allowed,
    included: ratePlanDetail.included,
    allowedNotes: ratePlanDetail.allowed_notes,
    includedNotes: ratePlanDetail.included_notes,
    maxAdults: ratePlanDetail.max_adults,
    maxChildren: ratePlanDetail.max_children,
    maxExtraBeds: ratePlanDetail.max_extra_beds,
    maxInfants: ratePlanDetail.max_infants
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
