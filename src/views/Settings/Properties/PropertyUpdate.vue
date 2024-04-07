<script setup lang="ts">
import { PropertyForm } from './Components'
import { ContentDetailWrap } from '@/components/ContentDetailWrap'
import { ref, unref } from 'vue'
import { ElButton } from 'element-plus'
import { useI18n } from '@/hooks/web/useI18n'
import { useRouter, useRoute } from 'vue-router'
const { query } = useRoute()

const propertyId = query.propertyId as string
const { push, go } = useRouter()

const { t } = useI18n()

const formRef = ref<ComponentRef<typeof PropertyForm>>()

const loading = ref(false)

const save = async () => {
  const write = unref(formRef)
  if (!write) return
  await write.submit()
}
</script>

<template>
  <ContentDetailWrap title="編輯" @back="push('/settings/properties/list')">
    <PropertyForm ref="formRef" :property-id="propertyId" />

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
