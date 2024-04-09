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
import type { RatePlanDetail } from '@/types/stores/property'
import type { FormItemRule } from 'element-plus'
import { ElMessage } from 'element-plus'

const { t } = useI18n()
const { required } = useValidator()
const { setRatePlanDetail, fetchRatePlanDetail } = usePropertyStore()
const { hotelDetails } = usePropertyStore()

interface Props {
  propertyId: string
  ratePlanId?: string
}

const props = defineProps<Props>()

const { formRegister, formMethods } = useForm()
const { setValues, getFormData, getElFormExpose } = formMethods
const ratePlanDetails: RatePlanDetail = {} as RatePlanDetail
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
      options: [],
      clearable: false
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
    hidden: true,
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
    hidden: true,
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
    Object.assign(ratePlanDetails, await fetchRatePlanDetail(props.propertyId, props.ratePlanId))
    setFormValues()
  } catch (err) {
    console.log(err)
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
    allowed: [],
    included: [],
    allowed_notes: [],
    included_notes: [],
    max_adults: 0,
    max_children: 0,
    max_extra_beds: 0,
    max_infants: 0,
    packages: [],
    rate_plan_name: '',
    room_type_id: ''
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
  if (!ratePlanDetails) return
  const formData = {
    // fulfill form
    status: ratePlanDetails.status,
    ratePlanId: props.ratePlanId || '',
    pmsRatePlanId: ratePlanDetails.pms_rate_plan_id,
    ratePlanName: ratePlanDetails.rate_plan_name
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
