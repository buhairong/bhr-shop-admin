<template>
  <el-container>
    <el-aside>
      <AppMenu />
    </el-aside>
    <el-container>
      <el-header>
        <AppHeader />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import AppMenu from './components/AppMenu/index.vue'
import AppHeader from './components/AppHeader/index.vue'
</script>

<style lang="scss" scoped>
.el-header {
  color: var(--el-text-color-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-aside {
  background-color: #304156;
  color: var(--el-text-color-primary);
  width: auto;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
}

.el-container {
  height: 100vh;
}
</style>
