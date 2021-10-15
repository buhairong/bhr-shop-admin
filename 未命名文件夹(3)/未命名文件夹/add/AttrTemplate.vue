<template>
  <el-form inline>
    <el-form-item>
      <el-select
        v-model="value"
        placeholder="请选择规格模板"
      >
        <el-option
          v-for="item in list"
          :key="item.id"
          :label="item.rule_name"
          :value="item.rule_value"
          value-key="id"
        />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        @click="handleConfirm"
      >
        确定
      </el-button>
      <el-button type="primary">
        添加规格模板
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getAttrs } from '@/api/product'
import { onMounted } from '@vue/runtime-core'
import type { ProductAttrTpl, AttrRuleValue } from '@/api/types/product'

interface EmitsType {
  (e: 'confirm', value: AttrRuleValue[]): void
}

const emit = defineEmits<EmitsType>()

const value = ref<number | null>(null)
const list = ref<ProductAttrTpl[]>([])
// const attrTpl = ref<AttrRuleValue[]>([])

onMounted(() => {
  loadList()
})

const loadList = async () => {
  list.value = await getAttrs()
}

const handleConfirm = () => {
  if (value.value) {
    const item = list.value.find(item => item.id === value.value)
    if (item) {
      emit('confirm', item)
    }
  }
}
</script>

<style lang="scss" scoped>
:deep(.el-popper) {
  z-index: 20002 !important;
}
</style>
