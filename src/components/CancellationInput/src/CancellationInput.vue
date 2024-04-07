<script setup lang="ts">
import { ref, unref, watch } from 'vue'
import { propTypes } from '@/utils/propTypes'
import {
  ElInput,
  ElInputNumber,
  ElDatePicker,
  ElButton,
  ElRow,
  ElCol,
  ElSelectV2,
  ElCard
} from 'element-plus'
import { useConfigGlobal } from '@/hooks/web/useConfigGlobal'
import { useDesign } from '@/hooks/web/useDesign'
import { useI18n } from '@/hooks/web/useI18n'
import type { CancellationPolicy } from '@/types/stores/property'
import { ValueOrPercentEnum } from '@/types/enums/dataStore'
const { getPrefixCls } = useDesign()
const { t } = useI18n()
const prefixCls = getPrefixCls('cancellation-input')
// 輸入欄位的值

const props = defineProps({
  modelValue: propTypes.array.def([])
})

const valueRef = ref(props.modelValue as CancellationPolicy[])
const daysBeforeCheckinRulesRef = ref<CancellationPolicy[]>([]) // 距離天數規則的值
const specificDateRulesRef = ref<CancellationPolicy[]>([]) // 特定日期規則的值

watch(
  () => props.modelValue,
  (val: CancellationPolicy[]) => {
    if (val === unref(valueRef)) return
    valueRef.value = val
    daysBeforeCheckinRulesRef.value = valueRef.value.filter((item) => {
      return item.days_before_checkin !== undefined
    })
    specificDateRulesRef.value = valueRef.value.filter((item) => {
      return item.specific_date !== undefined
    })
  }
)
const { configGlobal } = useConfigGlobal()

const emit = defineEmits(['update:modelValue'])

const removeDaysBeforeCheckinRules = (index: number) => {
  daysBeforeCheckinRulesRef.value.splice(index, 1)
  emit('update:modelValue', daysBeforeCheckinRulesRef.value.concat(specificDateRulesRef.value))
}

const removeSpecificDateRules = (index: number) => {
  specificDateRulesRef.value.splice(index, 1)
  emit('update:modelValue', daysBeforeCheckinRulesRef.value.concat(specificDateRulesRef.value))
}

const addDaysBeforeCheckinRules = () => {
  daysBeforeCheckinRulesRef.value.push({
    days_before_checkin: undefined,
    penalty_type: ValueOrPercentEnum.PERCENT,
    penalty_value: 0,
    specific_date: undefined
  } as CancellationPolicy)
  emit('update:modelValue', daysBeforeCheckinRulesRef.value.concat(specificDateRulesRef.value))
}

const addSpecificDateRules = () => {
  specificDateRulesRef.value.push({
    days_before_checkin: undefined,
    penalty_type: ValueOrPercentEnum.PERCENT,
    penalty_value: 0,
    specific_date: undefined
  } as CancellationPolicy)
  emit('update:modelValue', daysBeforeCheckinRulesRef.value.concat(specificDateRulesRef.value))
}

const getPenaltyTypeOptions = () => {
  return Object.values(ValueOrPercentEnum).map((item) => {
    return {
      label: t(`enum.valueOrPercent.${item}`),
      value: item
    }
  })
}
</script>
<template>
  <!-- <div>Hello World</div> -->
  <div :class="[prefixCls, `${prefixCls}--${configGlobal?.size}`]">
    <ElCard class="mb-4">
      <template #header>
        <h4 class="text-lg">{{ t('settings.property.dayToStayRule') }}</h4>
      </template>
      <div v-for="(_, index) in daysBeforeCheckinRulesRef" :key="index" class="my-4 flex inline">
        <ElRow>
          <ElCol :span="20">
            <ElRow :gutter="20">
              <ElCol :span="12" class="text-right">
                <span>距離入住日天數</span>
              </ElCol>
              <ElCol :span="12">
                <ElInputNumber
                  v-bind="$attrs"
                  v-model="daysBeforeCheckinRulesRef[index].days_before_checkin"
                />
              </ElCol>
            </ElRow>
            <ElRow :gutter="20">
              <ElCol :span="12" class="text-right">
                <span>取消費計算型式</span>
              </ElCol>
              <ElCol :span="12">
                <ElSelectV2
                  v-bind="$attrs"
                  v-model="daysBeforeCheckinRulesRef[index].penalty_type"
                  :options="getPenaltyTypeOptions()"
                />
              </ElCol>
            </ElRow>
            <ElRow :gutter="20">
              <ElCol :span="12" class="text-right">
                <span>取消罰額</span>
              </ElCol>
              <ElCol :span="12">
                <ElInput v-bind="$attrs" v-model="daysBeforeCheckinRulesRef[index].penalty_value" />
              </ElCol>
            </ElRow>
          </ElCol>
          <ElCol :span="4">
            <ElButton
              type="danger"
              class="ml-4"
              @click.passive="removeDaysBeforeCheckinRules(index)"
              >{{ t('common.delete_rule') }}</ElButton
            >
          </ElCol>
        </ElRow>
      </div>
      <ElButton type="primary" @click.passive="addDaysBeforeCheckinRules()">{{
        t('common.add_rule')
      }}</ElButton>
    </ElCard>
    <ElCard>
      <template #header>
        <h4 class="text-lg">{{ t('settings.property.specificDateRule') }}</h4>
        <p>{{ t('settings.property.specificDateRuleDescription') }}</p>
      </template>
      <div v-for="(_, index) in specificDateRulesRef" :key="index" class="my-4 flex inline">
        <ElRow>
          <ElCol :span="20">
            <ElRow :gutter="20">
              <ElCol :span="12" class="text-right">
                <span>特定日期規則</span>
              </ElCol>
              <ElCol :span="12">
                <ElDatePicker
                  v-bind="$attrs"
                  v-model="specificDateRulesRef[index].specific_date"
                  type="date"
                />
              </ElCol>
            </ElRow>
            <ElRow :gutter="20">
              <ElCol :span="12" class="text-right">
                <span>取消費計算型式</span>
              </ElCol>
              <ElCol :span="12">
                <ElSelectV2
                  v-bind="$attrs"
                  v-model="specificDateRulesRef[index].penalty_type"
                  :options="getPenaltyTypeOptions()"
                />
              </ElCol>
            </ElRow>
            <ElRow :gutter="20">
              <ElCol :span="12" class="text-right">
                <span>取消罰額</span>
              </ElCol>
              <ElCol :span="12">
                <ElInput v-bind="$attrs" v-model="specificDateRulesRef[index].penalty_value" />
              </ElCol>
            </ElRow>
          </ElCol>
          <ElCol :span="4">
            <ElButton type="danger" class="ml-4" @click.passive="removeSpecificDateRules(index)">{{
              t('common.delete_rule')
            }}</ElButton>
          </ElCol>
        </ElRow>
      </div>
      <ElButton type="primary" @click.passive="addSpecificDateRules()">{{
        t('common.add_rule')
      }}</ElButton>
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
