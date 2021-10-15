<template>
  <div id="editor" />
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import E from 'wangeditor'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

interface EmitsType {
  (e: 'update:model-value', html: string): void
}

const emit = defineEmits<EmitsType>()

const editor = ref<InstanceType<typeof E> | null>(null)

const unWatchModelValue = watch(() => props.modelValue, () => {
  editor.value.txt.html(props.modelValue)
  unWatchModelValue() // 取消监视
})

onMounted(() => {
  initEditor()
})

const initEditor = () => {
  editor.value = new E('#editor')
  editor.value.config.onchange = function (newHtml: string) {
    console.log('change 之后最新的 html', newHtml)
    emit('update:model-value', newHtml)
  }
  editor.value.create()
  // editor.value.txt.html(props.modelValue)
}
</script>

<style lang="scss" scoped></style>
