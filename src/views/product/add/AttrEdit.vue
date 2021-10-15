<template>
  <el-form class="ssr">
    <el-form-item
      v-for="item in values"
      :key="item.value"
    >
      <template #label>
        <i class="iconfont icondrag2" />
      </template>
      <el-space
        direction="vertical"
        alignment="end"
      >
        <el-tag>
          {{ item.value }}
        </el-tag>
        <el-space>
          <el-tag
            v-for="detail in item.detail"
            :key="detail"
            closable
          >
            {{ detail }}
          </el-tag>
        </el-space>
      </el-space>
    </el-form-item>
  </el-form>
  <attr-form
    v-if="isAddVisible"
    @cancel="isAddVisible = false"
  />
  <div v-else>
    <el-button
      icon="el-icon-plus"
      type="primary"
      @click="isAddVisible = true"
    >
      添加新规格
    </el-button>
    <el-button
      type="success"
      @click="handleConfirm"
    >
      立即生成
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import AttrForm from './AttrForm.vue'
import type { PropType } from 'vue'
import type { AttrRuleValue } from '@/api/types/product'
import { generateAttr } from '@/api/product'
import { cloneDeep } from 'lodash'
import { ElMessage } from 'element-plus'

const props = defineProps({
  values: {
    type: Array as PropType<AttrRuleValue[]>,
    default: () => []
  }
})

const emit = defineEmits(['confirm'])

const values = ref(cloneDeep(props.values))

watch(() => props.values, (value) => {
  values.value = value
})

const isAddVisible = ref(false)

const handleConfirm = async () => {
  if (!values.value.length) {
    ElMessage.warning('规格模板不能为空')
    return
  }
  const data = await generateAttr(0, 1, {
    attrs: values.value
  })
  emit('confirm', data.info)
}

</script>

<style lang="scss" scoped>
// .auto-scroll :deep(.el-form-item__content) {
//   overflow: auto;
// }

// .iconfont {
//   font-size: 25px;
//   cursor: move;
//   color: #d8d8d8;
// }

// .el-form-item {
//   align-items: center;
// }

</style>
