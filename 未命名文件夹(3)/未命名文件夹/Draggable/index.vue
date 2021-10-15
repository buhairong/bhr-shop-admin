<template>
  <div ref="draggableContainer">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import type { PropType } from 'vue'
import Sortable from 'sortablejs'

const draggableContainer = ref<HTMLDivElement | null>(null)

const props = defineProps({
  modelValue: {
    type: Array as PropType<any[]>,
    default: () => []
  },
  // 参考：https://github.com/SortableJS/Sortable#options
  options: {
    type: Object as PropType<Sortable.options>,
    default: () => {}
  }
})

interface EmitsType {
  (e: 'update:model-value', value: any[]): void
}

const emit = defineEmits<EmitsType>()

onMounted(() => {
  initDraggable()
})

const initDraggable = () => {
  if (!draggableContainer.value) return
  const sortable = Sortable.create(draggableContainer.value, {
    Animation: 300,
    onUpdate (e: any) {
      console.log('initDraggable', e)
      if (e.oldIndex !== undefined && e.newIndex !== undefined) {
        // 删除拖拽的元素
        const list = props.modelValue
        const item = list.splice(e.oldIndex, 1)[0]

        // 把删除的元素放到新的索引位置
        list.splice(e.newIndex, 0, item)

        emit('update:model-value', list)
      }
    },
    ...props.options
  })
  console.log(sortable)
}
</script>

<style lang="scss" scoped></style>
