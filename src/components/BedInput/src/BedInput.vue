<script setup lang="ts">
import { ref, watch } from 'vue'
import { propTypes } from '@/utils/propTypes'
import { ElInputNumber, ElButton, ElRow, ElCol, ElSelectV2, ElCard } from 'element-plus'
import { useConfigGlobal } from '@/hooks/web/useConfigGlobal'
import { useDesign } from '@/hooks/web/useDesign'
import { useI18n } from '@/hooks/web/useI18n'
import type { RoomBed } from '@/types/stores/property'
import { BedCodeEnum } from '@/types/enums/dataStore'
const { getPrefixCls } = useDesign()
const { t } = useI18n()
const prefixCls = getPrefixCls('bed-input')
// 輸入欄位的值

const props = defineProps({
  modelValue: propTypes.array.def([])
})
const valueRef = ref<RoomBed[]>([])
const roomTypeOption = Object.values(BedCodeEnum).map((bed) => {
  return {
    label: t(`enum.bed.${bed}`),
    value: bed
  }
})

const { configGlobal } = useConfigGlobal()

const emit = defineEmits(['update:modelValue'])

watch(
  () => props.modelValue,
  (val: RoomBed[]) => {
    valueRef.value = val
  }
)

const removeBed = (index: number) => {
  valueRef.value.splice(index, 1)
  emit('update:modelValue', valueRef.value)
}

const addBed = () => {
  valueRef.value.push({
    code: BedCodeEnum.DOUBLE,
    quantity: 0
  } as RoomBed)
  emit('update:modelValue', valueRef.value)
}
</script>
<template>
  <!-- <div>Hello World</div> -->
  <div :class="[prefixCls, `${prefixCls}--${configGlobal?.size}`]">
    <ElCard class="mb-4">
      <template #header>
        <h4 class="text-lg">{{ t('settings.property.bedTypeAndQuantity') }}</h4>
      </template>
      <div v-for="(_, index) in valueRef" :key="index" class="my-4 flex inline">
        <ElRow>
          <ElCol :span="20">
            <ElRow>
              <ElCol :span="10" class="text-right">
                <span>{{ t('component.bedInput.bedType') }}</span>
              </ElCol>
              <ElCol :span="10">
                <ElSelectV2
                  v-bind="$attrs"
                  v-model="valueRef[index].code"
                  :options="roomTypeOption"
                />
              </ElCol>
            </ElRow>
            <ElRow>
              <ElCol :span="10" class="text-right">
                <span>{{ t('component.bedInput.quantity') }}</span>
              </ElCol>
              <ElCol :span="10">
                <ElInputNumber v-bind="$attrs" v-model="valueRef[index].quantity" :min="1" />
              </ElCol>
            </ElRow>
          </ElCol>
          <ElCol :span="4">
            <ElButton type="danger" class="ml-4" @click="removeBed(index)">{{
              t('common.delete_bed_type')
            }}</ElButton>
          </ElCol>
        </ElRow>
      </div>
      <ElButton type="primary" @click="addBed()">{{ t('common.add_bed_type') }}</ElButton>
    </ElCard>
  </div>
</template>

<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-input-dynamic';

.@{prefix-cls} {
  :deep(.@{elNamespace}-input__clear) {
    margin-left: 5px;
  }

  &__bar {
    background-color: var(--el-text-color-disabled);
    border-radius: var(--el-border-radius-base);

    &::before,
    &::after {
      position: absolute;
      z-index: 10;
      display: block;
      width: 20%;
      height: inherit;
      background-color: transparent;
      border-color: var(--el-color-white);
      border-style: solid;
      border-width: 0 5px;
      content: '';
    }

    &::before {
      left: 20%;
    }

    &::after {
      right: 20%;
    }

    &--fill {
      position: absolute;
      width: 0;
      height: inherit;
      background-color: transparent;
      border-radius: inherit;
      transition:
        width 0.5s ease-in-out,
        background 0.25s;

      &[data-score='0'] {
        width: 20%;
        background-color: var(--el-color-danger);
      }

      &[data-score='1'] {
        width: 40%;
        background-color: var(--el-color-danger);
      }

      &[data-score='2'] {
        width: 60%;
        background-color: var(--el-color-warning);
      }

      &[data-score='3'] {
        width: 80%;
        background-color: var(--el-color-success);
      }

      &[data-score='4'] {
        width: 100%;
        background-color: var(--el-color-success);
      }
    }
  }

  &--mini > &__bar {
    border-radius: var(--el-border-radius-small);
  }
}
</style>
