<template>
  <h1>首页</h1>
  <el-button>Default</el-button>
  <el-date-picker
    v-model="value1"
    type="date"
    placeholder="Pick a day"
  />
</template>

<script setup lang="ts">
import { ref } from '@vue/runtime-core'
const value1 = ref('')
</script>

<style lang="scss" scoped></style>
