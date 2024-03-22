<script setup lang="ts">
// import { ref, unref, watch } from 'vue'
// import { propTypes } from '@/utils/propTypes'
// import { ElInput, ElButton } from 'element-plus'
// import { useConfigGlobal } from '@/hooks/web/useConfigGlobal'
// import { useDesign } from '@/hooks/web/useDesign'

// const { getPrefixCls } = useDesign()

// const prefixCls = getPrefixCls('input-dynamic')

// // interface Props {
// //   modelValue: string[]
// //   type?: string
// // }

// // const props = withDefaults(defineProps<Props>(), {
// const props = defineProps({
//   modelValue: propTypes.array.def([]),
//   type: propTypes.string.def('text')
// })

// watch(
//   () => props.modelValue,
//   (val: string[]) => {
//     if (val === unref(valueRef)) return
//     valueRef.value = val
//   }
// )

// const { configGlobal } = useConfigGlobal()

// const emit = defineEmits(['update:modelValue'])

// // 設置input的type屬性
// const textType = ref<string>(props.type)
// console.log('props.modelValue=', props.modelValue)

// const remove = (index: number) => {
//   valueRef.value.splice(index, 1)
//   emit('update:modelValue', valueRef.value)
// }

// const add = () => {
//   valueRef.value.push('')
//   emit('update:modelValue', valueRef.value)
// }

// 輸入欄位的值
// const valueRef = ref(props.modelValue as string[])
</script>
<template>
  <spin>Hello World</spin>
  <!-- <div :class="[prefixCls, `${prefixCls}--${configGlobal?.size}`]"> -->
  <!-- {{ props.modelValue }}
    <div v-for="(item, index) in props.modelValue" :key="index" class="my-4 flex inline">
      <ElInput v-bind="$attrs" v-model="valueRef[index]" :type="textType" :value="item" /><ElButton
        type="danger"
        class="ml-4"
        @click="remove(index)"
        >刪除</ElButton
      >
    </div>
    <ElButton type="primary" @click="add()">增加</ElButton> -->
  <!-- </div> -->
</template>
