<template>
  <ContentWrap :title="t('router.views.settings.roomTypesList.title')">
    <ElRow>
      <ElCol :span="12">
        <div class="flex inline">
          <BaseButton type="primary" @click.passive="addAction">{{
            t('router.views.settings.roomTypesList.add_roomType')
          }}</BaseButton>
          <BaseButton @click.passive="importAction">{{
            t('router.views.settings.roomTypesList.import_roomType')
          }}</BaseButton>
        </div>
      </ElCol>
      <ElCol :span="12">
        <div class="w-48 mb-4">
          <ElSelectV2 v-model="selectPropertyId" :options="propertySelectOptions" />
        </div>
      </ElCol>
    </ElRow>

    <Table
      ref="tableRef"
      row-key="id"
      :columns="columns"
      :data="tableData"
      :loading="loading"
      :fixed="true"
      :defaultSort="{ prop: 'roomTypeName', order: 'ascending' }"
    />
  </ContentWrap>
</template>

<script setup lang="tsx">
import { ContentWrap } from '@/components/ContentWrap'
import { Table, TableColumn } from '@/components/Table'
import { ElSwitch, ElButton, ElMessage, ElSelectV2, ElRow, ElCol, ElMessageBox } from 'element-plus'
import { Alignment } from 'element-plus/es/components/table-v2/src/constants'
import { ref, watch, reactive, onMounted } from 'vue'
import { useI18n } from '@/hooks/web/useI18n'
import { RoomTypeListRowData } from '@/types/views/settings/roomType'
import { useRouter } from 'vue-router'
import { HotelDetails } from '@/types/stores/property'
import { getPropertiesApi } from '@/api/setting/property'
import { useUserStore } from '@/store/modules/user'
import { usePropertyStore } from '@/store/modules/property'
import { deleteRoomTypeApi } from '@/api/setting/roomType'

const { push } = useRouter()
const { t } = useI18n()
const { currentPropertyId } = useUserStore()
const { fetchRoomTypes, importRoomTypes, FetchHotelDetails } = usePropertyStore()
const property = usePropertyStore()
const tableRef = ref<typeof Table>()
const loading = ref(false)
const selectPropertyId = ref<string>()
const propertySelectOptions = ref<{ value: string; label: string }[]>([])
const tableData = reactive<RoomTypeListRowData[]>([])

const columns: TableColumn[] = [
  {
    field: 'id',
    label: 'ID',
    hidden: true
  },
  {
    field: 'roomTypeName',
    label: t('router.views.settings.roomTypesList.roomTypeName')
  },
  {
    field: 'status',
    label: t('router.views.settings.roomTypesList.status'),
    align: Alignment.CENTER,
    slots: {
      default: (data: any) => {
        return (
          <ElSwitch
            v-model={data.row.disabled}
            active-text={t('common.actived')}
            active-value={false}
            inactive-text={t('common.deactived')}
            inactive-value={true}
            inline-prompt
            disabled={true}
            size="large"
          />
        )
      }
    }
  },
  {
    field: 'actions',
    label: t('common.actions'),
    search: {
      hidden: true
    },
    form: {
      hidden: true
    },
    detail: {
      hidden: true
    },
    slots: {
      default: (data: any) => {
        return (
          <div class="flex inline">
            <ElButton type="primary" onClick={() => updateAction(data.row)}>
              {t('common.edit')}
            </ElButton>
            <ElButton type="primary" onClick={() => deleteAction(data.row)}>
              {t('common.delete')}
            </ElButton>
          </div>
        )
      }
    }
  }
]

watch(selectPropertyId, async (newVal) => {
  if (newVal) {
    tableData.splice(0, tableData.length)
    await getSelectedPropertyRoomTypeList()
  }
})

// get selected property room type list
const getSelectedPropertyRoomTypeList = async () => {
  if (!selectPropertyId.value) return
  loading.value = true
  try {
    const roomTypesDetail = await fetchRoomTypes(selectPropertyId.value)
    tableData.splice(0, tableData.length)
    roomTypesDetail.forEach((roomType) => {
      tableData.push({
        roomTypeId: roomType.room_type_id,
        roomTypeName: roomType.room_type_name,
        status: true
      })
    })
  } catch (err) {
    ElMessage.error(t('common.fetchDataFailed'))
  } finally {
    loading.value = false
  }
}

// get table list data
const getPropertyList = async () => {
  loading.value = true
  try {
    const response = await getPropertiesApi()
    if (response.status !== 200 || !response.data) throw new Error()
    const hotels = response.data.data as HotelDetails[]
    for (let hotel of hotels) {
      // set select options
      propertySelectOptions.value.push({
        label: hotel.name,
        value: hotel.property_id
      })
    }
  } catch (err) {
    ElMessage.error(t('common.fetchDataFailed'))
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  await getPropertyList()
  // set default select value
  if (currentPropertyId) {
    selectPropertyId.value = currentPropertyId
  }
})

const updateAction = (row: RoomTypeListRowData) => {
  push(
    `/settings/roomTypes/update?propertyId=${selectPropertyId.value}&roomTypeId=${row.roomTypeId}`
  )
}

const addAction = () => {
  push(`/settings/roomTypes/add?propertyId=${selectPropertyId.value}`)
}

const deleteAction = (row: RoomTypeListRowData) => {
  try {
    ElMessageBox.confirm(t('common.delWarning'), t('common.warning'), {
      confirmButtonText: t('common.confirm'),
      cancelButtonText: t('common.cancel'),
      type: 'warning'
    }).then(async () => {
      if (!selectPropertyId.value) return
      await deleteRoomTypeApi({ property_id: selectPropertyId.value, room_type_id: row.roomTypeId })
      await getSelectedPropertyRoomTypeList()
      ElMessage.success('刪除成功')
    })
  } catch (err) {
    ElMessage.error('刪除失敗')
  }
}

const importAction = async () => {
  try {
    // get data from database
    Object.assign(property.hotelDetails, await FetchHotelDetails(selectPropertyId.value))
    // get pms_property_id
    const pms_property_id = property.hotelDetails.pms_property_id
    // use pms_property_id to get room type data from PMS
    await importRoomTypes(pms_property_id)
    // refresh table data
    await getSelectedPropertyRoomTypeList()

    ElMessage.success(t('common.importSuccessful'))
  } catch (err) {
    ElMessage.error(t('error.importFailed'))
  }
}
</script>
@/types/views/settings/property/roomType
