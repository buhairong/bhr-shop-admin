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
  }
})

const emit = defineEmits(['update:page', 'update:limit'])

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
