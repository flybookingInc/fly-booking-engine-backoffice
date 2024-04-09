<template>
  <ContentWrap :title="t('router.views.settings.ratePlansList.title')">
    <ElRow>
      <ElCol :span="12">
        <BaseButton type="primary" @click.passive="addAction">{{
          t('router.views.settings.ratePlansList.add_ratePlan')
        }}</BaseButton>
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
import { ElSwitch, ElButton, ElMessage, ElSelectV2, ElRow, ElCol } from 'element-plus'
import { Alignment } from 'element-plus/es/components/table-v2/src/constants'
import { ref, watch, reactive, onMounted } from 'vue'
import { useI18n } from '@/hooks/web/useI18n'
import { RatePlanListRowData } from '@/types/views/settings/ratePlan'
import { useRouter } from 'vue-router'
import { HotelDetails } from '@/types/stores/property'
import { getPropertiesApi } from '@/api/setting/property'
import { useUserStore } from '@/store/modules/user'
import { usePropertyStore } from '@/store/modules/property'

const { push } = useRouter()
const { t } = useI18n()
const { currentPropertyId } = useUserStore()
const { fetchRatePlans, fetchRoomTypes } = usePropertyStore()
const tableRef = ref<typeof Table>()
const loading = ref(false)
const selectPropertyId = ref<string>()
const propertySelectOptions = ref<{ value: string; label: string }[]>([])
const tableData = reactive<RatePlanListRowData[]>([])

const columns: TableColumn[] = [
  {
    field: 'ratePlanName',
    label: t('router.views.settings.ratePlansList.ratePlanName')
  },
  {
    field: 'roomTypeName',
    label: t('router.views.settings.ratePlansList.roomTypeName')
  },
  {
    field: 'status',
    label: t('router.views.settings.ratePlansList.status'),
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
    await getSelectedPropertyRatePlanList()
  }
})

const getSelectedPropertyRatePlanList = async () => {
  if (!selectPropertyId.value) return
  loading.value = true
  try {
    const roomTypesDetail = await fetchRoomTypes(selectPropertyId.value)
    const ratePlansDetail = await fetchRatePlans(selectPropertyId.value)
    ratePlansDetail.forEach((ratePlan) => {
      tableData.push({
        ratePlanId: ratePlan.room_type_id,
        ratePlanName: ratePlan.rate_plan_name,
        roomTypeName:
          roomTypesDetail.find((roomType) => roomType.room_type_id === ratePlan.room_type_id)
            ?.room_type_name || '',
        status: true
      })
    })
  } catch (err) {
    ElMessage.error('取得方案列表失敗')
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

const updateAction = (row: RatePlanListRowData) => {
  push(
    `/settings/ratePlans/update?propertyId=${selectPropertyId.value}&ratePlanId=${row.ratePlanId}`
  )
}

const addAction = () => {
  push(`/settings/ratePlans/add?propertyId=${selectPropertyId.value}`)
}
</script>
@/types/views/settings/property/ratePlan
