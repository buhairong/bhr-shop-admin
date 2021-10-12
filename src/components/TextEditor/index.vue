<template>
  <div id="editor" />
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import E from 'wangeditor'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

onMounted(() => {
  initEditor()
})

const initEditor = () => {
  const editor = new E('#editor')
  editor.create()
  editor.txt.html(props.modelValue)
}
</script>

<style lang="scss" scoped></style>
