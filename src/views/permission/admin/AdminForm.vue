<template>
  <el-dialog
    ref="dialog"
    :title="props.adminId ? '编辑管理员' : '添加管理员'"
    width="30%"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    @closed="emit('update:admin-id', null)"
  >
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleCancel">取消</el-button>
        <el-button
          type="primary"
        >
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { PropType } from 'vue'
import type { IElDialog } from '@/types/element-plus'

const props = defineProps({
  adminId: {
    type: Number as PropType<number | null>,
    default: null
  }
})

interface EmitsType {
  (e: 'update:admin-id', value: number | null): void
}

const emit = defineEmits<EmitsType>()

const dialog = ref<IElDialog | null>(null)

const handleCancel = () => {
  if (dialog.value) {
    dialog.value.visible = false
  }
}
</script>

<style lang="scss" scoped></style>
