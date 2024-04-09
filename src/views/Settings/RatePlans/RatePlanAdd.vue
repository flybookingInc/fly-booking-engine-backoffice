<script setup lang="ts">
import { RatePlanForm } from './Components'
import { ContentDetailWrap } from '@/components/ContentDetailWrap'
import { ref, unref } from 'vue'
import { ElButton } from 'element-plus'
import { useI18n } from '@/hooks/web/useI18n'
import { useRouter, useRoute } from 'vue-router'

const { push, go } = useRouter()
const { query } = useRoute()
const { t } = useI18n()

const formRef = ref<ComponentRef<typeof RatePlanForm>>()

const loading = ref(false)

const propertyId = query.propertyId as string

const save = async () => {
  const form = unref(formRef)
  await form?.submit()
}
</script>

<template>
  <ContentDetailWrap title="新增" @back="push('/settings/ratePlans/list')">
    <RatePlanForm ref="formRef" :property-id="propertyId" />

    <template #header>
      <ElButton @click.passive="go(-1)">
        {{ t('common.back') }}
      </ElButton>
      <ElButton type="primary" :loading="loading" @click.passive="save">
        {{ t('common.save') }}
      </ElButton>
    </template>
  </ContentDetailWrap>
</template>
