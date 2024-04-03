<template>
  <ContentWrap :title="t('router.views.settings.roomTypesList.title')">
    <div class="w-48 mb-4">
      <ElSelectV2 v-model="selectPropertyId" :options="propertySelectOptions" />
    </div>
    <Table
      ref="tableRef"
      row-key="id"
      :columns="columns"
      :data="tableData"
      :loading="loading"
      :fixed="true"
      :defaultSort="{ prop: 'hotelName', order: 'ascending' }"
    />
  </ContentWrap>
</template>

<script setup lang="tsx">
import { ContentWrap } from '@/components/ContentWrap'
import { Table, TableColumn } from '@/components/Table'
import { ElSwitch, ElButton, ElMessage, ElSelectV2 } from 'element-plus'
import { Alignment } from 'element-plus/es/components/table-v2/src/constants'
import { ref, watch, reactive, onMounted } from 'vue'
import { useI18n } from '@/hooks/web/useI18n'
import { RoomTypeListRowData } from '@/types/views/settings/roomType'
import { useRouter } from 'vue-router'
import { HotelDetails } from '@/types/stores/property'
import { getPropertiesApi } from '@/api/setting/property'
import { useUserStore } from '@/store/modules/user'
import { usePropertyStore } from '@/store/modules/property'

const { push } = useRouter()
const { t } = useI18n()
const { currentPropertyId } = useUserStore()
const { fetchRoomTypes } = usePropertyStore()
const tableRef = ref<typeof Table>()
const loading = ref(false)
const selectPropertyId = ref<string>()
const propertySelectOptions = ref<{ value: string; label: string }[]>([])
const tableData = reactive<RoomTypeListRowData[]>([])

const columns: TableColumn[] = [
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
            inactive-text={t('common.inactived')}
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
    label: '動作',
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
          <div>
            <ElButton type="primary" onClick={() => updateAction(data.row)}>
              編輯
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

const getSelectedPropertyRoomTypeList = async () => {
  if (!selectPropertyId.value) return
  loading.value = true
  try {
    const roomTypesDetail = await fetchRoomTypes(selectPropertyId.value)
    roomTypesDetail.forEach((roomType) => {
      tableData.push({
        roomTypeId: roomType.room_type_id,
        roomTypeName: roomType.room_type_name,
        status: true
      })
    })
  } catch (err) {
    ElMessage.error('取得房型列表失敗')
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
    ElMessage.error('取得旅館列表失敗')
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
  push(`/settings/roomTypes/update?propertyId=${row.roomTypeId}&roomTypeId=${row.roomTypeId}`)
}
</script>
@/types/views/settings/property/roomType
