<template>
  <el-pagination
    :current-page="props.page"
    :page-sizes="[10, 20, 30, 40]"
    :page-size="props.limit"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<script lang="ts" setup>
import { PropType } from '@vue/runtime-core'

const props = defineProps({
  page: {
    type: Number,
    default: 1
  },
  limit: {
    type: Number,
    default: 10
  },
  total: {
    type: Number,
    default: 0
  },
  loadList: {
    type: Function,
    default: () => {}
  },
  obj: {
    type: Object as PropType<{ a: string, b: number}>,
    default: () => ({ a: 's', b: 1 })
  }
})

const emit = defineEmits(['update:page', 'update:limit'])

// TS
// interface PropsType {
//   page: number
//   limit: number
//   total: number
//   loadList: () => void
// }

// const props = withDefaults(defineProps<PropsType>(), {
//   page: 1,
//   limit: 10,
//   total: 0,
//   loadList: () => {}
// })

// interface EmitsType {
//   (e: 'update:page', page: number): void
//   (e: 'update:limit', limit: number): void
// }

// const emit = defineEmits<EmitsType>()

const handleCurrentChange = (page: number) => {
  emit('update:page', page)
  props.loadList()
}

const handleSizeChange = (size: number) => {
  emit('update:limit', size)
  emit('update:page', 1)
  props.loadList()
}
</script>

<style lang="scss" scoped></style>
