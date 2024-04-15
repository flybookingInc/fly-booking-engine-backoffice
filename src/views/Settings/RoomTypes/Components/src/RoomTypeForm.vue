<script setup lang="tsx">
import { CheckboxOption, Form, FormSchema, SelectOption } from '@/components/Form'
import { useForm } from '@/hooks/web/useForm'
import { useValidator } from '@/hooks/web/useValidator'
import { onBeforeMount, reactive, ref } from 'vue'
// import { BaseButton } from '@/components/Button'
import { deleteUploadPhotosApi, postRoomTypeApi, putRoomTypeApi } from '@/api/setting/roomType'
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
import type { RoomTypeDetail, RoomTypePhoto } from '@/types/stores/property'
import { Delete, Download, Plus, CaretLeft, CaretRight } from '@element-plus/icons-vue'
import type { FormItemRule, UploadFile, UploadFiles } from 'element-plus'
import { ElIcon, ElMessage, ElMessageBox, ElTooltip } from 'element-plus'

const { t } = useI18n()
const { required, positiveNumber } = useValidator()
const { setRoomTypeDetail, fetchRoomTypeDetail } = usePropertyStore()
const { hotelDetails } = usePropertyStore()

interface Props {
  propertyId: string
  roomTypeId?: string
}

const props = defineProps<Props>()

const { formRegister, formMethods } = useForm()
const { setValues, getFormData, getElFormExpose, setSchema } = formMethods
const roomTypeDetails: RoomTypeDetail = {} as RoomTypeDetail
// const photoUrl = ref('')
const UPLOAD_PHOTO_LIMIT = 50
const UPLOAD_PHOTO_SIZE_LIMIT = 1 // MB
const schema = reactive<FormSchema[]>([
  {
    field: 'roomTypeName',
    label: t('router.views.properties.propertyForm.roomTypeNameLabel'),
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
    field: 'roomTypeId',
    label: t('router.views.properties.propertyForm.roomTypeIdLabel'),
    component: 'Input',
    colProps: {
      span: 12
    },
    hidden: true
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
    },
    formItemProps: {
      rules: [required(), positiveNumber()]
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
    formItemProps: {
      rules: [required()]
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
    formItemProps: {
      rules: [required()]
    },
    hidden: true,
    componentProps: {
      options: []
    },
    value: false,
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
    formItemProps: {
      rules: [required()]
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
    formItemProps: {
      rules: [required()]
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
    formItemProps: {
      rules: [required()]
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
    formItemProps: {
      rules: [required()]
    }
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
    field: 'RoomFacilityNote',
    label: t('router.views.roomType.propertyForm.RoomFacilityNoteTitle'),
    component: 'DynamicInput',
    colProps: {
      span: 24
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
    field: 'BedroomAndLaundryFacilityNote',
    label: t('router.views.roomType.propertyForm.BedroomAndLaundryFacilityNoteTitle'),
    component: 'DynamicInput',
    colProps: {
      span: 24
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
    field: 'BathRoomFacilityNote',
    label: t('router.views.roomType.propertyForm.BathRoomFacilityNoteTitle'),
    component: 'DynamicInput',
    colProps: {
      span: 24
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
    field: 'HeatingAndCoolingFacilityNote',
    label: t('router.views.roomType.propertyForm.HeatingAndCoolingFacilityNoteTitle'),
    component: 'DynamicInput',
    colProps: {
      span: 24
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
    field: 'KitchenAndDiningFacilityNote',
    label: t('router.views.roomType.propertyForm.HeatingAndCoolingFacilityNoteTitle'),
    component: 'DynamicInput',
    colProps: {
      span: 24
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
    field: 'FamilyFacilityNote',
    label: t('router.views.roomType.propertyForm.FamilyFacilityNoteTitle'),
    component: 'DynamicInput',
    colProps: {
      span: 24
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
    field: 'EntertainmentFacilityNote',
    label: t('router.views.roomType.propertyForm.EntertainmentFacilityNoteTitle'),
    component: 'DynamicInput',
    colProps: {
      span: 24
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
    field: 'SafetyFacilityNote',
    label: t('router.views.roomType.propertyForm.SafetyFacilityNoteTitle'),
    component: 'DynamicInput',
    colProps: {
      span: 24
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
    field: 'InternetAndOfficeFacilityNote',
    label: t('router.views.roomType.propertyForm.InternetAndOfficeFacilityNoteTitle'),
    component: 'DynamicInput',
    colProps: {
      span: 24
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
          label: t(`enum.pillow_firmness.${item}`),
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
    formItemProps: {
      rules: [required()]
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
        const photos: RoomTypePhoto[] = formData.roomTypePhoto
        response.data.photoUrls.forEach((url: string) => {
          photos.push({ image: url, thumb: url })
        })
        await setValues({ roomTypePhoto: photos })
        setRommTypePhotoSechema(photos)
      },
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
              <span onClick={() => handleMovePhoto(file.file, -1)}>
                <ElIcon>
                  <ElTooltip content={t('common.moveLeft')}>
                    <CaretLeft />
                  </ElTooltip>
                </ElIcon>
              </span>
              {!disabled.value && (
                <span>
                  <ElIcon>
                    <ElTooltip content={t('common.download')}>
                      <a href={file.file.url} target="_blank" class="text-white">
                        <Download />
                      </a>
                    </ElTooltip>
                  </ElIcon>
                </span>
              )}
              {!disabled.value && (
                <span onClick={() => handleRemovePhoto(file.file)}>
                  <ElIcon>
                    <ElTooltip content={t('common.delete')}>
                      <Delete />
                    </ElTooltip>
                  </ElIcon>
                </span>
              )}
              <span onClick={() => handleMovePhoto(file.file, 1)}>
                <ElIcon>
                  <ElTooltip content={t('common.moveRight')}>
                    <CaretRight />
                  </ElTooltip>
                </ElIcon>
              </span>
            </span>
          </div>
        ),
        tip: () => (
          <div>
            {t('settings.roomType.uploadPhotoSizeLimit', { size: UPLOAD_PHOTO_SIZE_LIMIT })}
          </div>
        )
      }
    }
  }
])
const disabled = ref(false)
let formMode: string = 'add'

const rules = reactive<{
  [key: string]: FormItemRule[]
}>({})
//   {
//   roomSize: [required()],
//   roomTypeName: [required()],
//   name: [required()],
//   price: [required()]
// }

/**
 * Executes the code block before the component is mounted.
 * If both propertyId and roomTypeId is provided, it enters the update mode, loads hotel details using the usePropertyStore() function,
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
  setRommTypePhotoSechema(photos)
}

const setRommTypePhotoSechema = (photos: RoomTypePhoto[]) => {
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

const submit = async () => {
  try {
    const elForm = await getElFormExpose()
    const valid = await elForm?.validate().catch((err) => {
      console.log(err)
    })
    if (valid) {
      if (formMode === 'add') {
        // create new property
        const data = (await getRoomTypeDetailFromForm()) as Omit<RoomTypeDetail, 'room_type_id'>
        const res = await postRoomTypeApi({ data: data, property_id: props.propertyId })
        if (!res.data.success || !res.data.data) {
          ElMessage.error(t('common.createFailed'))
          return
        }
        setRoomTypeDetail({ room_type_id: res.data.data.room_type_id, ...data }) // add data to store
        ElMessage.success(t('common.createSuccessful'))
      } else {
        // update exist property
        if (!props.propertyId || !hotelDetails) {
          ElMessage.error(t('error.propertyIdIsNull'))
          return
        }
        const data = (await getRoomTypeDetailFromForm()) as RoomTypeDetail
        const res = await putRoomTypeApi({
          data: data,
          room_type_id: data.room_type_id,
          property_id: props.propertyId
        })
        if (!res.data.success) {
          ElMessage.error(t('common.editFailed'))
          return
        }
        setRoomTypeDetail(data) // // update data to store
        ElMessage.success(t('common.editSuccessful'))
      }
    }
  } catch (err) {
    console.log(err)
  }
}

const getRoomTypeDetailFromForm = async (): Promise<
  RoomTypeDetail | Omit<RoomTypeDetail, 'room_type_id'>
> => {
  const data = await getFormData()
  const facilities: RoomTypeDetail['facilities'] = {
    internet_and_office_facility: data.availableInternetAndOffice || [],
    internet_and_office_notes: data.InternetAndOfficeFacilityNote || [],
    entertainment_facility: data.availableEntertainment || [],
    entertainment_notes: data.EntertainmentFacilityNote || [],
    room_facility: data.availableRoomFacility || [],
    room_notes: data.RoomFacilityNote || [],
    bedroom_and_laundry_facility: data.availableBedroomAndLaundryFacility || [],
    bedroom_and_laundry_notes: data.BedroomAndLaundryFacilityNote || [],
    bathroom_facility: data.availableBathRoomFacility || [],
    bathroom_notes: data.BathRoomFacilityNote || [],
    heating_and_cooling_facility: data.availableHeatingAndCooling || [],
    heating_and_cooling_notes: data.HeatingAndCoolingFacilityNote || [],
    kitchen_and_dining_facility: data.availableKitchenAndDining || [],
    kitchen_and_dining_notes: data.KitchenAndDiningFacilityNote || [],
    family_facility: data.availableFamily || [],
    family_notes: data.FamilyFacilityNote || [],
    safety_facility: data.availableSafety || [],
    safety_notes: data.SafetyFacilityNote || []
  }

  const roomTypeDetail: Omit<RoomTypeDetail, 'room_type_id'> = {
    status: data.status,
    pms_room_type_id: data.pmsRoomTypeId,
    room_type_name: data.roomTypeName,
    room_size: data.roomSize,
    bath_set_brand: data.bathSetBrand || '',
    hairdryer_type: data.hairdryerType || '',
    internet_max_upload_speed: data.internetMaxUpoadSpeed,
    internet_max_download_speed: data.internetMaxDownloadSpeed,
    facilities: facilities || {},
    view_types: data.availableViewType || [],
    pillow_types: data.availablePillowType || [],
    pillow_firmness: data.availablePillowFirmness || [],
    photos: data.roomTypePhoto,
    wifi_availability: data.wifiAvailability || [],
    wifi_specifications: data.wifiSpecifications || [],
    wired_internet_availability: data.wiredInternetAvailability || [],
    tv_size: data.tvSize,
    tv_resolution: data.tvResolution || [],
    tv_casting: data.tvCasting || [],
    tv_content: data.tvContent || [],
    beds_included: data.bedsInclude || [],
    floor_type: data.floorType || []
  }
  if (formMode !== 'add') {
    return { room_type_id: data.roomTypeId, ...roomTypeDetail } as RoomTypeDetail
  }
  return roomTypeDetail
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
  setRommTypePhotoSechema(roomTypeDetails.photos)
  const formData = {
    // fulfill form
    status: roomTypeDetails.status,
    roomTypeId: props.roomTypeId || '',
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
