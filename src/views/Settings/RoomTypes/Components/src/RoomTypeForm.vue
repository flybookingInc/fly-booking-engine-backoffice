<script setup lang="tsx">
import { CheckboxOption, Form, FormSchema, SelectOption } from '@/components/Form'
import { useForm } from '@/hooks/web/useForm'
import { useValidator } from '@/hooks/web/useValidator'
import { onBeforeMount, reactive, ref } from 'vue'
// import { BaseButton } from '@/components/Button'
import { deleteUploadPhotosApi, postRoomTypeApi } from '@/api/setting/roomType'
import {
  getAvailableFloorTypeApi,
  getAvailablePillowFirmnessApi,
  getAvailablePillowTypeApi,
  getAvailableRoomBathRoomFacilityApi,
  getAvailableRoomBedroomAndLaundryFacilityApi,
  getAvailableRoomEntertainmentFacilityApi,
  getAvailableRoomFacilityApi,
  getAvailableRoomFamilyFacilityApi,
  getAvailableRoomHeatingAndCoolingFacilityApi,
  getAvailableRoomInternetAndOfficeFacilityApi,
  getAvailableRoomKitchenAndDiningFacilityApi,
  getAvailableRoomSafetyFacilityApi,
  getAvailableRoomTypeStatusesApi,
  getAvailableRoomViewApi,
  getAvailableTvCastingApi,
  getAvailableTvContentApi,
  getAvailableTvResolutionApi,
  getAvailableWifiAvailabilityApi,
  getAvailableWiredInternetAvailabilityApi
} from '@/api/system'
import { useI18n } from '@/hooks/web/useI18n'
import { usePropertyStore } from '@/store/modules/property'
import { PostUploadPhotosResponse } from '@/types/api/roomType/postPhotos'
import {
  RoomEntertainmentFacilityEnum,
  RoomInternetAndOfficeFacilityEnum,
  WiFiSpecificationEnum
} from '@/types/enums/dataStore'
import type {
  BookingPolicy,
  CheckInOutPolicy,
  HotelDetails,
  PropertyPaymentMethodsCardType,
  PropertypaymentMethodBankTransfer,
  PropertypaymentMethodCash,
  RoomTypeDetail,
  RoomTypePhoto
} from '@/types/stores/property'
import { Delete, Download, Plus, CaretLeft, CaretRight } from '@element-plus/icons-vue'
import type { UploadFile, UploadFiles } from 'element-plus'
import { ElIcon, ElMessage, ElMessageBox, ElTooltip } from 'element-plus'

const { t } = useI18n()
const { required } = useValidator()
const { updateProperty, fetchRoomTypeDetail } = usePropertyStore()

interface Props {
  propertyId: string
  roomTypeId?: string
}

const props = defineProps<Props>()

const { formRegister, formMethods } = useForm()
const { setValues, getFormData, getElFormExpose, setSchema } = formMethods
const hotelDetails: HotelDetails = {} as HotelDetails
const roomTypeDetails: RoomTypeDetail = {} as RoomTypeDetail
// const photoUrl = ref('')
const UPLOAD_PHOTO_LIMIT = 50
const schema = reactive<FormSchema[]>([
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
      const res = await getAvailableRoomTypeStatusesApi()
      return (res.data.data || []).map((status: string) => {
        return {
          label: t(`enum.roomTypeStatus.${status}`),
          value: status
        } as SelectOption
      })
    }
  },
  {
    field: 'pmsRoomTypeId',
    label: t('router.views.properties.propertyForm.pmsRoomTypeIdLabel'),
    component: 'Input',
    colProps: {
      span: 12
    }
  },
  {
    field: 'roomTypeName',
    label: t('router.views.properties.propertyForm.roomTypeNameLabel'),
    component: 'Input',
    colProps: {
      span: 12
    }
  },
  {
    field: 'roomSize',
    label: t('router.views.properties.propertyForm.roomSizeLabel'),
    component: 'Input',
    componentProps: {
      slots: {
        append: () => t('common.square_meter')
      }
    },
    colProps: {
      span: 12
    }
  },
  {
    field: 'bathSetBrand',
    label: t('router.views.properties.propertyForm.bathSetBrandLabel'),
    component: 'Input',
    colProps: {
      span: 12
    }
  },
  {
    field: 'hairdryerType',
    label: t('router.views.properties.propertyForm.hairdryerTypeLabel'),
    component: 'Input',
    colProps: {
      span: 12
    }
  },
  {
    field: 'internetDivider',
    label: t('router.views.properties.propertyForm.internetTitle'),
    component: 'Divider'
  },
  {
    field: 'internetMaxUpoadSpeed',
    label: t('router.views.properties.propertyForm.internetMaxUpoadSpeedLabel'),
    component: 'InputNumber',
    colProps: {
      span: 12
    }
  },
  {
    field: 'internetMaxDownloadSpeed',
    label: t('router.views.properties.propertyForm.internetMaxDownloadSpeedLabel'),
    component: 'InputNumber',
    colProps: {
      span: 12
    }
  },
  {
    field: 'isWiredInternet',
    label: t('router.views.properties.propertyForm.isWiredInternetLabel'),
    component: 'Switch',
    colProps: {
      span: 24
    },
    componentProps: {
      'active-value': true,
      'inactivate-value': false,
      activeText: t('common.yes'),
      inactivateText: t('common.no'),
      inlinePrompt: true,
      on: {
        change: () => {
          // hidden previousDayReservationsDeadline Field if allowPreviousDayReservations is false
          const isWiredInternet = roomTypeDetails.facilities.internet_and_office_facility.includes(
            RoomInternetAndOfficeFacilityEnum.WIRED_INTERNET
          )
          if (!isWiredInternet) {
            return
          }
          getFormData().then((data) => {
            if (data.isWiredInternet === undefined) {
              return
            }
            setSchema([
              {
                field: 'wiredInternetAvailability',
                path: 'hidden',
                value: !data.isWiredInternet
              }
            ])
          })
        }
      }
    }
  },
  {
    field: 'wiredInternetAvailability',
    label: t('router.views.properties.propertyForm.wiredInternetAvailabilityLabel'),
    component: 'CheckboxGroup',
    colProps: {
      span: 24
    },
    hidden: true,
    componentProps: {
      options: []
    },
    optionApi: async () => {
      const res = await getAvailableWiredInternetAvailabilityApi()
      return (res.data.data || []).map((item) => {
        return {
          label: t(`enum.wired_internet_availability.${item}`),
          value: item
        } as CheckboxOption
      })
    }
  },
  {
    field: 'isWiFi',
    label: t('router.views.properties.propertyForm.isWiFiLabel'),
    component: 'Switch',
    colProps: {
      span: 24
    },
    componentProps: {
      'active-value': true,
      'inactivate-value': false,
      activeText: t('common.yes'),
      inactivateText: t('common.no'),
      inlinePrompt: true,
      on: {
        change: () => {
          // hidden previousDayReservationsDeadline Field if allowPreviousDayReservations is false
          const isWiFi = roomTypeDetails.facilities.internet_and_office_facility.includes(
            RoomInternetAndOfficeFacilityEnum.WIFI
          )
          if (!isWiFi) {
            return
          }
          getFormData().then((data) => {
            if (data.isWiFi === undefined) {
              return
            }
            setSchema([
              {
                field: 'wifiAvailability',
                path: 'hidden',
                value: !data.isWiFi
              },
              {
                field: 'wifiSpecifications',
                path: 'hidden',
                value: !data.isWiFi
              }
            ])
          })
        }
      }
    }
  },
  {
    field: 'wifiAvailability',
    label: t('router.views.properties.propertyForm.isFreeWiFiLabel'),
    component: 'CheckboxGroup',
    colProps: {
      span: 24
    },
    hidden: true,
    componentProps: {
      options: []
    },
    optionApi: async () => {
      const res = await getAvailableWifiAvailabilityApi()
      return (res.data.data || []).map((item) => {
        return {
          label: t(`enum.wifi_availability.${item}`),
          value: item
        } as CheckboxOption
      })
    }
  },
  {
    field: 'wifiSpecifications',
    label: t('router.views.settings.properties.propertyForm.wifiSpecificationsLabel'),
    colProps: {
      span: 12
    },
    hidden: true,
    component: 'SelectV2',
    componentProps: {
      options: [],
      clearable: false,
      multiple: true
    },
    optionApi: async () => {
      return Object.values(WiFiSpecificationEnum).map((spec) => {
        return {
          label: t(`enum.wifi_spec.${spec}`),
          value: spec
        } as SelectOption
      })
    }
  },
  {
    field: 'tvDivider',
    label: t('router.views.properties.propertyForm.tvTitle'),
    component: 'Divider'
  },
  {
    field: 'isTv',
    label: t('router.views.properties.propertyForm.isTvLabel'),
    component: 'Switch',
    colProps: {
      span: 12
    },
    componentProps: {
      'active-value': true,
      'inactivate-value': false,
      activeText: t('common.yes'),
      inactivateText: t('common.no'),
      inlinePrompt: true,
      on: {
        change: () => {
          const isTv = roomTypeDetails.facilities.entertainment_facility.includes(
            RoomEntertainmentFacilityEnum.TV
          )
          if (!isTv) {
            return
          }
          getFormData().then((data) => {
            if (data.isTv === undefined) {
              return
            }
            setSchema([
              {
                field: 'tvSize',
                path: 'hidden',
                value: !data.isTv
              },
              {
                field: 'tvResolution',
                path: 'hidden',
                value: !data.isTv
              },
              {
                field: 'tvCasting',
                path: 'hidden',
                value: !data.isTv
              },
              {
                field: 'tvContent',
                path: 'hidden',
                value: !data.isTv
              }
            ])
          })
        }
      }
    }
  },
  {
    field: 'tvSize',
    label: t('router.views.properties.propertyForm.tvSizeLabel'),
    component: 'Input',
    componentProps: {
      slots: {
        append: () => t('common.inch')
      }
    },
    hidden: true,
    colProps: {
      span: 12
    }
  },
  {
    field: 'tvResolution',
    label: t('router.views.settings.properties.propertyForm.tvResolutionLabel'),
    colProps: {
      span: 12
    },
    component: 'SelectV2',
    componentProps: {
      options: [],
      clearable: false
    },
    hidden: true,
    optionApi: async () => {
      const res = await getAvailableTvResolutionApi()
      if (res.data.data) {
        return res.data.data.map((resolution: string) => {
          return {
            label: t(`enum.tvResolution.${resolution}`),
            value: resolution
          } as SelectOption
        })
      }
    }
  },
  {
    field: 'tvCasting',
    label: t('router.views.settings.properties.propertyForm.tvCastingLabel'),
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
      const res = await getAvailableTvCastingApi()
      if (res.data.data) {
        return res.data.data.map((cast: string) => {
          return {
            label: t(`enum.tvCasting.${cast}`),
            value: cast
          } as SelectOption
        })
      }
    }
  },
  {
    field: 'tvContent',
    label: t('router.views.settings.properties.propertyForm.tvContentLabel'),
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
      const res = await getAvailableTvContentApi()
      if (res.data.data) {
        return res.data.data.map((content: string) => {
          return {
            label: t(`enum.tvContent.${content}`),
            value: content
          } as SelectOption
        })
      }
    }
  },
  {
    field: 'bedTypeDivider',
    label: t('router.views.properties.propertyForm.bedTypeTitle'),
    component: 'Divider'
  },
  {
    field: 'bedsInclude',
    component: 'BedInput',
    colProps: {
      span: 24
    },
    value: []
  },
  {
    field: 'floorTypeDivider',
    label: t('router.views.properties.propertyForm.floorTypeTitle'),
    component: 'Divider'
  },
  {
    field: 'floorType',
    label: t('router.views.properties.propertyForm.availableFloorTypeLabel'),
    component: 'CheckboxGroup',
    colProps: {
      span: 24
    },
    componentProps: {
      options: []
    },
    optionApi: async () => {
      const res = await getAvailableFloorTypeApi()
      return (res.data.data || []).map((floor) => {
        return {
          label: t(`enum.floorType.${floor}`),
          value: floor
        } as CheckboxOption
      })
    }
  },
  {
    field: 'RoomFacilityDivider',
    label: t('router.views.roomType.propertyForm.RoomFacilityTitle'),
    component: 'Divider'
  },
  {
    field: 'availableRoomFacility',
    label: t('router.views.properties.propertyForm.availableRoomFacilityLabel'),
    component: 'CheckboxGroup',
    colProps: {
      span: 24
    },
    componentProps: {
      options: []
    },
    optionApi: async () => {
      const res = await getAvailableRoomFacilityApi()
      return (res.data.data || []).map((item) => {
        return {
          label: t(`enum.facilities.${item}`),
          value: item
        } as CheckboxOption
      })
    }
  },
  {
    field: 'availableBedroomAndLaundryFacility',
    label: t('router.views.properties.propertyForm.availableBedroomAndLaundryFacilityLabel'),
    component: 'CheckboxGroup',
    colProps: {
      span: 24
    },
    componentProps: {
      options: []
    },
    optionApi: async () => {
      const res = await getAvailableRoomBedroomAndLaundryFacilityApi()
      return (res.data.data || []).map((item) => {
        return {
          label: t(`enum.facilities.${item}`),
          value: item
        } as CheckboxOption
      })
    }
  },
  {
    field: 'availableBathRoomFacility',
    label: t('router.views.properties.propertyForm.availableBathRoomFacilityLabel'),
    component: 'CheckboxGroup',
    colProps: {
      span: 24
    },
    componentProps: {
      options: []
    },
    optionApi: async () => {
      const res = await getAvailableRoomBathRoomFacilityApi()
      return (res.data.data || []).map((item) => {
        return {
          label: t(`enum.facilities.${item}`),
          value: item
        } as CheckboxOption
      })
    }
  },
  {
    field: 'availableHeatingAndCooling',
    label: t('router.views.properties.propertyForm.availableHeatingAndCoolingFacilityLabel'),
    component: 'CheckboxGroup',
    colProps: {
      span: 24
    },
    componentProps: {
      options: []
    },
    optionApi: async () => {
      const res = await getAvailableRoomHeatingAndCoolingFacilityApi()
      return (res.data.data || []).map((item) => {
        return {
          label: t(`enum.facilities.${item}`),
          value: item
        } as CheckboxOption
      })
    }
  },
  {
    field: 'availableKitchenAndDining',
    label: t('router.views.properties.propertyForm.availableKitchenAndDiningFacilityLabel'),
    component: 'CheckboxGroup',
    colProps: {
      span: 24
    },
    componentProps: {
      options: []
    },
    optionApi: async () => {
      const res = await getAvailableRoomKitchenAndDiningFacilityApi()
      return (res.data.data || []).map((item) => {
        return {
          label: t(`enum.facilities.${item}`),
          value: item
        } as CheckboxOption
      })
    }
  },
  {
    field: 'availableFamily',
    label: t('router.views.properties.propertyForm.availableFamilyFacilityLabel'),
    component: 'CheckboxGroup',
    colProps: {
      span: 24
    },
    componentProps: {
      options: []
    },
    optionApi: async () => {
      const res = await getAvailableRoomFamilyFacilityApi()
      return (res.data.data || []).map((item) => {
        return {
          label: t(`enum.facilities.${item}`),
          value: item
        } as CheckboxOption
      })
    }
  },
  {
    field: 'availableEntertainment',
    label: t('router.views.properties.propertyForm.availableEntertainmentFacilityLabel'),
    component: 'CheckboxGroup',
    colProps: {
      span: 24
    },
    componentProps: {
      options: []
    },
    optionApi: async () => {
      const res = await getAvailableRoomEntertainmentFacilityApi()
      return (res.data.data || []).map((item) => {
        return {
          label: t(`enum.facilities.${item}`),
          value: item
        } as CheckboxOption
      })
    }
  },
  {
    field: 'availableSafety',
    label: t('router.views.properties.propertyForm.availableSafetyFacilityLabel'),
    component: 'CheckboxGroup',
    colProps: {
      span: 24
    },
    componentProps: {
      options: []
    },
    optionApi: async () => {
      const res = await getAvailableRoomSafetyFacilityApi()
      return (res.data.data || []).map((item) => {
        return {
          label: t(`enum.facilities.${item}`),
          value: item
        } as CheckboxOption
      })
    }
  },
  {
    field: 'availableInternetAndOffice',
    label: t('router.views.properties.propertyForm.availableInternetAndOfficeFacilityLabel'),
    component: 'CheckboxGroup',
    colProps: {
      span: 24
    },
    componentProps: {
      options: []
    },
    optionApi: async () => {
      const res = await getAvailableRoomInternetAndOfficeFacilityApi()
      return (res.data.data || []).map((item) => {
        return {
          label: t(`enum.facilities.${item}`),
          value: item
        } as CheckboxOption
      })
    }
  },
  {
    field: 'ViewTypeDivider',
    label: t('router.views.roomType.propertyForm.ViewTypeTitle'),
    component: 'Divider'
  },
  {
    field: 'availableViewType',
    label: t('router.views.properties.propertyForm.availableViewTypeLabel'),
    component: 'CheckboxGroup',
    colProps: {
      span: 24
    },
    componentProps: {
      options: []
    },
    optionApi: async () => {
      const res = await getAvailableRoomViewApi()
      return (res.data.data || []).map((item) => {
        return {
          label: t(`enum.viewType.${item}`),
          value: item
        } as CheckboxOption
      })
    }
  },
  {
    field: 'PillowTypeDivider',
    label: t('router.views.roomType.propertyForm.PillowTypeTitle'),
    component: 'Divider'
  },
  {
    field: 'availablePillowType',
    label: t('router.views.properties.propertyForm.availablePillowTypeLabel'),
    component: 'CheckboxGroup',
    colProps: {
      span: 24
    },
    componentProps: {
      options: []
    },
    optionApi: async () => {
      const res = await getAvailablePillowTypeApi()
      return (res.data.data || []).map((item) => {
        return {
          label: t(`enum.pillow_types.${item}`),
          value: item
        } as CheckboxOption
      })
    }
  },
  {
    field: 'availablePillowFirmness',
    label: t('router.views.properties.propertyForm.availablePillowFirmnessLabel'),
    component: 'CheckboxGroup',
    colProps: {
      span: 24
    },
    componentProps: {
      options: []
    },
    optionApi: async () => {
      const res = await getAvailablePillowFirmnessApi()
      return (res.data.data || []).map((item) => {
        return {
          label: t(`enum.pillow_types.${item}`),
          value: item
        } as CheckboxOption
      })
    }
  },
  {
    field: 'RoomTypePhotoDivider',
    label: t('router.views.roomType.propertyForm.RoomTypePhotoTitle'),
    component: 'Divider'
  },
  {
    field: 'roomTypePhoto',
    // component: 'InputImage',
    component: 'Upload',
    colProps: {
      span: 24
    },
    componentProps: {
      limit: UPLOAD_PHOTO_LIMIT,
      action: '/mock/roomType/uploadPhotos',
      headers: {
        'Cache-Control': 'public, max-age=3153600'
        // 'Content-Type': 'multipart/form-data' // 'multipart/form-data' contentent-type will set automaticly
      },
      listType: 'picture-card',
      data: { property_id: props.propertyId, room_type_id: props.roomTypeId },
      multiple: true,
      drag: true,
      // onchange: async (_response, _uploadFile: UploadFile) => {
      //   const formData = await getFormData()
      // },
      onSuccess: async (response: PostUploadPhotosResponse, _uploadFile: UploadFile) => {
        const formData = await getFormData()
        if (
          !response.success ||
          !response.data ||
          !response.data.photoUrls ||
          !Array.isArray(response.data.photoUrls)
        )
          return
        if (formData.roomTypePhoto === undefined) formData.roomTypePhoto = []
        response.data.photoUrls.forEach((url: string) => {
          formData.roomTypePhoto.push({ image: url, thumb: url })
        })
        await setValues(formData)
      },
      // onRemove: async (uploadFile: UploadFile, _uploadFiles: UploadFiles) => {
      //   const formData = await getFormData()
      //   formData.roomTypePhoto = (formData.roomTypePhoto as RoomTypePhoto[]).filter((item) => {
      //     item.image !== uploadFile.url
      //   })
      //   await setValues(formData)
      //   console.log(await getFormData())
      // },
      // beforeRemove: (uploadFile: UploadFile, _uploadFiles: UploadFiles) => {
      //   return ElMessageBox.confirm(`Cancel the transfer of ${uploadFile.name} ?`).then(
      //     () => true,
      //     () => false
      //   )
      // },
      onExceed: (_uploadFile: UploadFile, _uploadFiles: UploadFiles) => {
        ElMessage.warning(`僅允許上傳${UPLOAD_PHOTO_LIMIT}張圖片`)
      },
      slots: {
        default: () => (
          <ElIcon>
            <Plus />
          </ElIcon>
        ),
        file: (file: { file: UploadFile }) => (
          <div>
            <img class="el-upload-list__item-thumbnail" src={file.file?.url} />
            <span class="el-upload-list__item-actions">
              <span
                class="el-upload-list__item-preview"
                onClick={() => handleMovePhoto(file.file, -1)}
              >
                <ElIcon>
                  <ElTooltip content={t('common.moveLeft')}>
                    <CaretLeft />
                  </ElTooltip>
                </ElIcon>
              </span>
              {!disabled.value && (
                <span class="el-upload-list__item-delete" onClick={() => handleDownload(file.file)}>
                  <ElIcon>
                    <Download />
                  </ElIcon>
                </span>
              )}
              {!disabled.value && (
                <span
                  class="el-upload-list__item-delete"
                  onClick={() => handleRemovePhoto(file.file)}
                >
                  <ElIcon>
                    <Delete />
                  </ElIcon>
                </span>
              )}
              <span
                class="el-upload-list__item-preview"
                onClick={() => handleMovePhoto(file.file, 1)}
              >
                <ElIcon>
                  <ElTooltip content={t('common.moveRight')}>
                    <CaretRight />
                  </ElTooltip>
                </ElIcon>
              </span>
            </span>
          </div>
        ),
        tip: () => <div class="el-upload__tip">只允許 jpg/png 類型檔案,大小限制為 1MB 以內。</div>
      }
    }
  }
])
const disabled = ref(false)
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
  if (!(props.propertyId && props.roomTypeId)) return
  try {
    // update mode
    formMode = 'update'
    Object.assign(roomTypeDetails, await fetchRoomTypeDetail(props.propertyId, props.roomTypeId))
    setFormValues()
  } catch (err) {
    console.log(err)
  }
})

const handleMovePhoto = async (file: UploadFile, step: number) => {
  const photos: RoomTypePhoto[] = (await getFormData()).roomTypePhoto
  const oldIndex = photos.findIndex((item) => item.image === file.url)
  if (oldIndex === -1) return
  const newIndex = oldIndex + step
  if (newIndex < 0 || newIndex >= photos.length) return
  const temp = photos[oldIndex]
  photos[oldIndex] = photos[newIndex]
  photos[newIndex] = temp
  await setValues({ roomTypePhoto: photos })
  // set roomTypePhoto fileList
  setSchema([
    {
      field: 'roomTypePhoto',
      path: 'componentProps.fileList',
      value: photos.map((item) => {
        return { name: item.image, url: item.image }
      })
    }
  ])
}

const handleRemovePhoto = (file: UploadFile) => {
  ElMessageBox.confirm(t('common.confirmDeleteText'), t('common.warning'), {
    confirmButtonText: t('common.confirm'),
    cancelButtonText: t('common.cancel'),
    type: 'warning'
  }).then(async () => {
    if (!props.roomTypeId || !file.url) return
    deleteUploadPhotosApi({
      property_id: props.propertyId,
      room_type_id: props.roomTypeId,
      photo_url: file.url
    }).then(async () => {
      const photos: RoomTypePhoto[] = (await getFormData()).roomTypePhoto
      const newPhotos = photos.filter((item) => item.image !== file.url)
      await setValues({ roomTypePhoto: newPhotos })
      // set roomTypePhoto fileList
      setSchema([
        {
          field: 'roomTypePhoto',
          path: 'componentProps.fileList',
          value: newPhotos.map((item) => {
            return { name: item.image, url: item.image }
          })
        }
      ])
    })
  })
}

const handleDownload = (file: UploadFile) => {
  console.log(file)
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
        const data = (await getFormData()) as RoomTypeDetail // force convert to HotelDetails DataType
        await updateFormDataToHotelDetails()
        await postRoomTypeApi({ data: data })
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
  if (!roomTypeDetails) return
  // set hidden fields
  if (
    roomTypeDetails.facilities.internet_and_office_facility.includes(
      RoomInternetAndOfficeFacilityEnum.WIFI
    )
  ) {
    setSchema([
      {
        field: 'wifiAvailability',
        path: 'hidden',
        value: false
      },
      {
        field: 'wifiSpecifications',
        path: 'hidden',
        value: false
      }
    ])
  }
  if (
    roomTypeDetails.facilities.internet_and_office_facility.includes(
      RoomInternetAndOfficeFacilityEnum.WIRED_INTERNET
    )
  ) {
    setSchema([
      {
        field: 'wiredInternetAvailability',
        path: 'hidden',
        value: false
      }
    ])
  }
  if (
    roomTypeDetails.facilities.entertainment_facility.includes(RoomEntertainmentFacilityEnum.TV)
  ) {
    setSchema([
      {
        field: 'tvSize',
        path: 'hidden',
        value: false
      },
      {
        field: 'tvResolution',
        path: 'hidden',
        value: false
      },
      {
        field: 'tvCasting',
        path: 'hidden',
        value: false
      },
      {
        field: 'tvContent',
        path: 'hidden',
        value: false
      }
    ])
  }
  // set roomTypePhoto fileList
  setSchema([
    {
      field: 'roomTypePhoto',
      path: 'componentProps.fileList',
      value: roomTypeDetails.photos.map((item) => {
        return { name: item.image, url: item.image }
      })
    }
  ])
  const formData = {
    // fulfill form
    status: roomTypeDetails.status,
    pmsRoomTypeId: roomTypeDetails.pms_room_type_id,
    roomTypeName: roomTypeDetails.room_type_name,
    roomSize: roomTypeDetails.room_size,
    bathSetBrand: roomTypeDetails.bath_set_brand,
    hairdryerType: roomTypeDetails.hairdryer_type,
    internetMaxUpoadSpeed: roomTypeDetails.internet_max_upload_speed,
    internetMaxDownloadSpeed: roomTypeDetails.internet_max_download_speed,
    isWiFi: roomTypeDetails.facilities.internet_and_office_facility.includes(
      RoomInternetAndOfficeFacilityEnum.WIFI
    ),
    isWiredInternet: roomTypeDetails.facilities.internet_and_office_facility.includes(
      RoomInternetAndOfficeFacilityEnum.WIRED_INTERNET
    ),
    wifiAvailability: roomTypeDetails.wifi_availability,
    wifiSpecifications: roomTypeDetails.wifi_specifications,
    wiredInternetAvailability: roomTypeDetails.wired_internet_availability,
    isTv: roomTypeDetails.facilities.entertainment_facility.includes(
      RoomEntertainmentFacilityEnum.TV
    ),
    tvSize: roomTypeDetails.tv_size,
    tvResolution: roomTypeDetails.tv_resolution,
    tvCasting: roomTypeDetails.tv_casting,
    tvContent: roomTypeDetails.tv_content,
    bedsInclude: roomTypeDetails.beds_included,
    floorType: roomTypeDetails.floor_type,
    availableRoomFacility: roomTypeDetails.facilities.room_facility,
    availableBedroomAndLaundryFacility: roomTypeDetails.facilities.bedroom_and_laundry_facility,
    availableBathRoomFacility: roomTypeDetails.facilities.bathroom_facility,
    availableHeatingAndCooling: roomTypeDetails.facilities.heating_and_cooling_facility,
    availableKitchenAndDining: roomTypeDetails.facilities.kitchen_and_dining_facility,
    availableFamily: roomTypeDetails.facilities.family_facility,
    availableEntertainment: roomTypeDetails.facilities.entertainment_facility,
    availableSafety: roomTypeDetails.facilities.safety_facility,
    availableInternetAndOffice: roomTypeDetails.facilities.internet_and_office_facility,
    availableViewType: roomTypeDetails.view_types,
    availablePillowType: roomTypeDetails.pillow_types,
    availablePillowFirmness: roomTypeDetails.pillow_firmness,
    roomTypePhoto: roomTypeDetails.photos
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
