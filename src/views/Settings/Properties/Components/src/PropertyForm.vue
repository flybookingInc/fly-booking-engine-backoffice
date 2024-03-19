<script setup lang="tsx">
import { Form, FormSchema } from '@/components/Form'
import { useForm } from '@/hooks/web/useForm'
import { reactive, watch } from 'vue'
import { useValidator } from '@/hooks/web/useValidator'
import { HotelDetails } from '@/types/stores/property'
import { getPropertyApi, postPropertyApi, putPropertyApi } from '@/api/setting/property'
import { ElMessage } from 'element-plus'
import { useI18n } from '@/hooks/web/useI18n'
import { GetPropertyRequest } from '@/types/api/property/getProperty'

const { t } = useI18n()
const { required } = useValidator()

interface Props {
  hotelId?: string
}

const props = defineProps<Props>()

const { formRegister, formMethods } = useForm()
const { setValues, getFormData, getElFormExpose } = formMethods

let hotelDetails: Nullable<HotelDetails> = null
let formMode: string = 'add'

const schema = reactive<FormSchema[]>([
  {
    field: 'hotel_id',
    label: t('settings.property.hotel_id'),
    component: 'Input',
    formItemProps: {
      rules: [required()]
    },
    hidden: formMode === 'add' ? false : true,
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
    field: 'image',
    label: t('settings.property.image'),
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
    formItemProps: {
      rules: [required()]
    }
  },
  {
    field: 'currency',
    label: t('settings.property.currency'),
    colProps: {
      span: 12
    },
    component: 'Input',
    formItemProps: {
      rules: [required()]
    }
  },
  {
    field: 'available_languages',
    label: t('settings.property.available_languages'),
    component: 'Input',
    formItemProps: {
      rules: [required()]
    }
  },
  {
    field: 'additional_photos',
    label: t('settings.property.additional_photos'),
    colProps: {
      span: 12
    },
    component: 'Input',
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
    field: 'address',
    label: t('settings.property.address'),
    component: 'Input',
    colProps: {
      span: 12
    }
  },
  {
    field: 'policy',
    label: 'Policy',
    component: 'Input',
    colProps: {
      span: 12
    }
  },
  {
    field: 'amenities',
    label: 'Amenities',
    component: 'Input',
    colProps: {
      span: 12
    }
  },
  {
    field: 'service',
    label: 'Service',
    component: 'CheckboxGroup',
    colProps: {
      span: 24
    },
    componentProps: {
      options: [
        {
          label: '星期一',
          value: 1
        },
        {
          label: '星期二',
          value: 2
        },
        {
          label: '星期三',
          value: 3
        },
        {
          label: '星期四',
          value: 4
        },
        {
          label: '星期五',
          value: 5
        },
        {
          label: '星期六',
          value: 6
        },
        {
          label: '星期日',
          value: 0
        }
      ]
    }
  },
  {
    field: 'good_to_know',
    label: 'Good to Know',
    component: 'Input',
    colProps: {
      span: 12
    }
  },
  {
    field: 'the_fine_print',
    label: 'The Fine Print',
    component: 'CheckboxGroup',
    colProps: {
      span: 24
    },
    componentProps: {
      options: [
        {
          label: '星期一',
          value: 1
        },
        {
          label: '星期二',
          value: 2
        },
        {
          label: '星期三',
          value: 3
        },
        {
          label: '星期四',
          value: 4
        },
        {
          label: '星期五',
          value: 5
        },
        {
          label: '星期六',
          value: 6
        },
        {
          label: '星期日',
          value: 0
        }
      ]
    }
  }
  // {
  //   field: 'parking',
  //   label: '停車位',
  //   component: 'Divider'
  // },
  // {
  //   field: 'parkingEnable',
  //   label: '停車位揭露',
  //   componentProps: {
  //     activeText: '啟用',
  //     inactivateText: '停用',
  //     inlinePrompt: true
  //   },
  //   component: 'Switch',
  //   colProps: {
  //     span: 24
  //   }
  // },
  // {
  //   field: 'hasEmptyParkingLot',
  //   label: '目前有停車位',
  //   componentProps: {
  //     activeText: '目前有停車位',
  //     inactivateText: '目前無停車位',
  //     inlinePrompt: true
  //   },
  //   component: 'Switch',
  //   colProps: {
  //     span: 24
  //   }
  // },
  // {
  //   field: 'parkingEmptyMessage',
  //   label: '有空停車位顯示訊息',
  //   component: 'Input',
  //   colProps: {
  //     span: 24
  //   }
  // },
  // {
  //   field: 'parkingFullMessage',
  //   label: '無空停車位顯示訊息',
  //   component: 'Input',
  //   colProps: {
  //     span: 24
  //   }
  // },
  // {
  //   field: 'wise',
  //   label: '靈知串接',
  //   component: 'Divider'
  // },
  // {
  //   field: 'wisePmsApiEnable',
  //   label: '靈知PMS自動進單',
  //   componentProps: {
  //     activeText: '啟用',
  //     inactivateText: '停用',
  //     inlinePrompt: true
  //   },
  //   component: 'Switch',
  //   colProps: {
  //     span: 24
  //   }
  // },
  // {
  //   field: 'wisePmsApiHotelCode',
  //   label: '靈知旅館代碼',
  //   component: 'Input',
  //   colProps: {
  //     span: 24
  //   }
  // },
  // {
  //   field: 'wisePmsApiFailAlertEmail',
  //   label: '自動進單失敗警告信Email',
  //   component: 'Input',
  //   colProps: {
  //     span: 24
  //   }
  // },
  // {
  //   field: 'flykiosk',
  //   label: 'FlyKiosk串接',
  //   component: 'Divider'
  // },
  // {
  //   field: 'flyKioskApiEnable',
  //   label: 'FlyKiosk自動進單',
  //   componentProps: {
  //     activeText: '啟用',
  //     inactivateText: '停用',
  //     inlinePrompt: true
  //   },
  //   component: 'Switch',
  //   colProps: {
  //     span: 24
  //   }
  // },
  // {
  //   field: 'flyKioskApiHotelCode',
  //   label: 'FlyKiosk旅館代碼',
  //   component: 'Input',
  //   colProps: {
  //     span: 24
  //   }
  // },
  // {
  //   field: 'flyKioskApiFailAlertEmail',
  //   label: '自動進單失敗警告信Email',
  //   component: 'Input',
  //   colProps: {
  //     span: 24
  //   }
  // }
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
        if (!props.hotelId || !hotelDetails) ElMessage.error(t('error.propertyIdIsNull'))
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

watch(
  () => props.hotelId,
  async (hotelId) => {
    if (!hotelId) return
    formMode = '修改'
    const res = await getPropertyApi({ property_id: hotelId } as GetPropertyRequest)

    if (res.status !== 200 && res.data) {
      return
    }
    hotelDetails = res.data.data as HotelDetails

    const formData = {
      // fulfill form
      hotel_id: hotelDetails.hotel_id
      // hotelId: hotelId,
      // hotelName: hotelDetails?.hotelName ?? '',
      // hotelAddress: hotelDetails?.hotelAddress ?? '',
      // hotelPhone: hotelDetails?.hotelPhone ?? '',
      // notifyEmail: hotelDetails?.notifyEmail ?? '',
      // hotelDirection: hotelDetails?.hotelDirection ?? '',
      // googleTagManager: hotelDetails?.googleTagManager?.id ?? '',
      // message: hotelDetails?.message ?? '',
      // fullyBookShowingMessage: hotelDetails?.fullyBookShowingMessage ?? '',
      // footerMessage: hotelDetails?.footerMessage ?? '',
      // confirmScreenFooterMessage: hotelDetails?.confirmScreenFooterMessage ?? '',
      // hotelShortDescription: hotelDetails?.hotelShortDescription ?? '',
      // hotelDescription: hotelDetails?.hotelDescription ?? '',
      // // weekend: weekendOptions.length > 0 ? weekendOptions : [],
      // weekend: hotelDetails?.weekend ?? [],
      // parkingEnable: hotelDetails?.parking?.enable ?? false,
      // hasEmptyParkingLot: hotelDetails?.parking?.hasEmptyParkingLot ?? false,
      // parkingEmptyMessage: hotelDetails?.parking?.emptyMessage ?? '',
      // parkingFullMessage: hotelDetails?.parking?.fullMessage ?? '',
      // wisePmsApiEnable: hotelDetails?.wisePmsApi?.enable ?? false,
      // wisePmsApiHotelCode: hotelDetails?.wisePmsApi?.HotelCode ?? '',
      // wisePmsApiFailAlertEmail: hotelDetails?.wisePmsApi?.failAlertEmail ?? '',
      // flyKioskApiEnable: hotelDetails?.flyKioskApi?.enabled ?? false,
      // flyKioskApiHotelCode: hotelDetails?.flyKioskApi?.hotelCode ?? '',
      // flyKioskApiFailAlertEmail: hotelDetails?.flyKioskApi?.failAlertEmail ?? ''
    }
    console.log('formData=', formData)
    setValues(formData)
    // setSchema([
    //   {
    //     field: 'coverPhoto',
    //     path: 'componentProps.fileList',
    //     value: [
    //       {
    //         name: 'photo',
    //         url: formData.coverPhoto
    //       }
    //     ]
    //   }
    // ])
  },
  {
    deep: true,
    immediate: true
  }
)

defineExpose({
  submit
})
</script>

<template>
  <Form :rules="rules" @register="formRegister" :schema="schema" />
</template>
