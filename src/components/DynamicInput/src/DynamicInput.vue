<script setup lang="ts">
import { ref, unref, watch } from 'vue'
import { propTypes } from '@/utils/propTypes'
import { ElInput, ElButton } from 'element-plus'
import { useConfigGlobal } from '@/hooks/web/useConfigGlobal'
import { useDesign } from '@/hooks/web/useDesign'
import { useI18n } from '@/hooks/web/useI18n'

const { getPrefixCls } = useDesign()
const { t } = useI18n()
const prefixCls = getPrefixCls('input-dynamic')

const props = defineProps({
  modelValue: propTypes.array.def([]),
  type: propTypes.string.def('text')
})

watch(
  () => props.modelValue,
  (val: string[]) => {
    if (val === unref(valueRef)) return
    valueRef.value = val
  }
)

const { configGlobal } = useConfigGlobal()

const emit = defineEmits(['update:modelValue'])

// 設置input的type屬性
const textType = ref<string>(props.type)

const remove = (index: number) => {
  valueRef.value.splice(index, 1)
  emit('update:modelValue', valueRef.value)
}

const add = () => {
  valueRef.value.push('')
  emit('update:modelValue', valueRef.value)
}

// 輸入欄位的值
const valueRef = ref(props.modelValue as string[])
</script>
<template>
  <!-- <div>Hello World</div> -->
  <div :class="[prefixCls, `${prefixCls}--${configGlobal?.size}`]">
    <div v-for="(item, index) in props.modelValue" :key="index" class="my-4 flex inline">
      <ElInput v-bind="$attrs" v-model="valueRef[index]" :type="textType" :value="item" /><ElButton
        type="danger"
        class="ml-4"
        @click="remove(index)"
        >{{ t('common.delete_line') }}</ElButton
      >
    </div>
    <ElButton type="primary" @click="add()">{{ t('common.add_new_line') }}</ElButton>
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
