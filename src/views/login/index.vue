<template>
  <h1>登录</h1>
</template>

<script setup lang="ts">
import { getLoginInfo } from '@/api/common'
import { onMounted } from '@vue/runtime-core'

onMounted(() => {
  getLoginInfo()
})
</script>

<style lang="scss" scoped></style>
