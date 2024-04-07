<script setup lang="ts">
/**
 * This component show how to warp a component and forward all attrs, slots to child warpped component
 */
import { ref, watch, defineModel } from 'vue'
import { propTypes } from '@/utils/propTypes'
import { ElCard, ElUpload, ElIcon, ElDialog } from 'element-plus'
import type { UploadUserFile, UploadFile, UploadFiles } from 'element-plus'
import { Delete, Download, ZoomIn } from '@element-plus/icons-vue'
import { useConfigGlobal } from '@/hooks/web/useConfigGlobal'
import { useDesign } from '@/hooks/web/useDesign'
import { useI18n } from '@/hooks/web/useI18n'
import type { BasePhoto } from '@/types/stores/property'
const { getPrefixCls } = useDesign()
const { t } = useI18n()
const prefixCls = getPrefixCls('bed-input')
// 輸入欄位的值

// v-model bind
const props = defineProps({
  modelValue: propTypes.array.def([])
})
const emit = defineEmits(['update:modelValue'])

const model = defineModel<UploadUserFile[]>('modelValue')
// const uploadPhotos = ref<UploadUserFile[]>([])
// const uploadThumblrs = ref<UploadUserFile[]>([])
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)
// const roomTypeOption = Object.values(BedCodeEnum).map((bed) => {
//   return {
//     label: t(`enum.bed.${bed}`),
//     value: bed
//   }
// })

const { configGlobal } = useConfigGlobal()

// asign props.modelValue to valueRef
watch(
  () => props.modelValue,
  (_val: BasePhoto[]) => {
    // uploadPhotos.value = val.map((photo) => {
    //   return { name: photo.image, url: photo.image }
    // })
    // uploadThumblrs.value = val.map((photo) => {
    //   return { name: photo.thumb, url: photo.thumb }
    // })
  }
)

// watch([uploadPhotos, uploadThumblrs], ([photoVal, thumbVal]) => {
//   if (photoVal.length !== thumbVal.length) return
//   try {
//     const photos = photoVal.map((photo) => photo.url ?? '')
//     const thumbs = thumbVal.map((thumb) => thumb.url ?? '')
//     const returnValue: BasePhoto[] = []
//     for (let i = 0; i < photos.length; i++) {
//       returnValue.push({
//         image: photos[i],
//         thumb: thumbs[i]
//       })
//     }
//     emit('update:modelValue', returnValue)
//   } catch (e) {
//     console.log(e)
//   }
// })

const handleChange = (_uploadFile: UploadFile, _uploadFiles: UploadFiles) => {
  console.log('handleChange() executed')
  // emit('update:modelValue', uploadFile, uploadFiles)
}

const handleRemove = (file: UploadFile) => {
  console.log(file)
}

const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url!
  dialogVisible.value = true
}

const handleDownload = (file: UploadFile) => {
  console.log(file)
}
</script>
<template>
  <!-- <div>Hello World</div> -->
  <div :class="[prefixCls, `${prefixCls}--${configGlobal?.size}`]">
    <ElCard class="mb-4">
      <template #header>
        <h4 class="text-lg">{{ t('component.inputImage.headtitle') }}</h4>
      </template>
      <!-- v-bind="$attrs" <== forward all attrs -->
      <el-upload
        v-model:file-list="model"
        list-type="picture-card"
        v-bind="$attrs"
        :on-change="handleChange"
      >
        <!-- Forward all slots -->
        <template v-for="(_, name) in $slots" #[name]="slotProps">
          <slot :name="name" v-bind="slotProps"></slot>
        </template>
        <!-- Default File slot -->
        <template #file="{ file }">
          <div>
            <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
            <span class="el-upload-list__item-actions">
              <span
                class="el-upload-list__item-preview"
                @click.passive="handlePictureCardPreview(file)"
              >
                <el-icon><zoom-in /></el-icon>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click.passive="handleDownload(file)"
              >
                <el-icon><Download /></el-icon>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click.passive="handleRemove(file)"
              >
                <el-icon><Delete /></el-icon>
              </span>
            </span>
          </div>
        </template>
      </el-upload>
      <el-dialog v-model="dialogVisible">
        <img h-full :src="dialogImageUrl" alt="Preview Image" />
      </el-dialog>
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
