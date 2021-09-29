<template>
  <h1>登录</h1>
</template>

<script setup lang="ts">
import { getLoginInfo } from '@/api/common'
import { onMounted, ref } from '@vue/runtime-core'
import type { ILoginInfo } from '@/api/types/common'

const list = ref<ILoginInfo['slide']>([])

onMounted(() => {
  getLoginInfo().then(res => {
    console.log(res.msg)
    list.value = res.data.slide
  })
})
</script>

<style lang="scss" scoped></style>
