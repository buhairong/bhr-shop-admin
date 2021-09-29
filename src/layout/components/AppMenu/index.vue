<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#304156"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    :collapse="$store.state.isCollapse"
    router
  >
    <el-menu-item index="/">
      <i class="el-icon-menu" />
      <template #title>
        首页
      </template>
    </el-menu-item>
    <el-sub-menu index="/product">
      <template #title>
        <i class="el-icon-location" />
        <span>商品</span>
      </template>
      <el-menu-item index="/product/list">
        <i class="el-icon-menu" />
        <template #title>
          商品列表
        </template>
      </el-menu-item>
      <el-menu-item index="/product/classify">
        <i class="el-icon-menu" />
        <template #title>
          商品分类
        </template>
      </el-menu-item>
      <el-menu-item index="/product/attr">
        <i class="el-icon-menu" />
        <template #title>
          商品规格
        </template>
      </el-menu-item>
      <el-menu-item index="/product/reply">
        <i class="el-icon-menu" />
        <template #title>
          商品评论
        </template>
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/order">
      <template #title>
        <i class="el-icon-location" />
        <span>订单</span>
      </template>
      <el-menu-item index="/order/list">
        <i class="el-icon-menu" />
        <template #title>
          订单列表
        </template>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/media">
      <i class="el-icon-menu" />
      <template #title>
        媒体
      </template>
    </el-menu-item>
    <el-sub-menu index="/permission">
      <template #title>
        <i class="el-icon-location" />
        <span>权限</span>
      </template>
      <el-menu-item index="/permission/role">
        <i class="el-icon-menu" />
        <template #title>
          角色
        </template>
      </el-menu-item>
      <el-menu-item index="/permission/admin">
        <i class="el-icon-menu" />
        <template #title>
          管理员
        </template>
      </el-menu-item>
      <el-menu-item index="/permission/rule">
        <i class="el-icon-menu" />
        <template #title>
          权限规则
        </template>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}

.el-menu:not(.el-menu--collapse) {
  width: 200px;
}
</style>
