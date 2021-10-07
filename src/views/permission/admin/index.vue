<template>
  <el-space direction="vertical">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>数据筛选</span>
        </div>
      </template>
      <el-form
        :inline="true"
        ref="form"
        :model="listParams"
        :disabled="listLoading"
        @submit.prevent="handleQuery"
      >
        <el-form-item label="状态">
          <el-select
            v-model="listParams.status"
            placeholder="请选择"
            clearable
          >
            <el-option
              label="全部"
              value=""
            />
            <el-option
              label="显示"
              :value="1"
            />
            <el-option
              label="不显示"
              :value="0"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="管理员名称">
          <el-input
            v-model="listParams.name"
            clearable
            placeholder="请输入身份昵称"
          />
        </el-form-item>
        <el-form-item>
          <el-button native-type="submit">
            查询
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </el-space>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <el-button class="button">
          添加管理员
        </el-button>
      </div>
    </template>
    <el-table
      :data="list"
      stripe
      style="width: 100%"
      v-loading="listLoading"
    >
      <el-table-column
        prop="id"
        label="ID"
      />
      <el-table-column
        prop="real_name"
        label="姓名"
      />
      <el-table-column
        prop="account"
        label="账号"
      />
      <el-table-column
        prop="roles"
        label="身份"
        min-width="180"
      >
        <template #default="scope">
          <el-space wrap>
            <el-tag
              class="role-tag"
              v-for="(item) in scope.row.roles.split(',')"
              :key="item"
            >
              {{ item }}
            </el-tag>
          </el-space>
        </template>
      </el-table-column>
      <el-table-column
        label="最后一次登录时间"
        prop="last_time"
      />
      <el-table-column
        label="最后一次登录IP"
        prop="last_ip"
      />
      <el-table-column label="状态">
        <template #default="scope">
          <el-switch
            v-model="scope.row.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="0"
            :loading="scope.row.statusLoading"
          />
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        fixed="right"
        min-width="100"
        align="center"
      >
        <template #default="">
          <el-button
            type="text"
          >
            编辑
          </el-button>
          <el-popconfirm
            title="确认删除吗？"
          >
            <template #reference>
              <el-button type="text">
                删除
              </el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-model:currentPage="listParams.page"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="listParams.limit"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </el-card>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { getAdmins } from '@/api/admin'
import type { IListParams, Admin } from '@/api/types/admin'

const list = ref<Admin[]>([])
const listLoading = ref(false)
const total = ref(0)
const listParams = reactive({
  page: 1,
  limit: 10,
  name: '',
  roles: '',
  status: '' as IListParams['status']
})

onMounted(() => {
  loadList()
})

const loadList = async () => {
  const data = await getAdmins(listParams)
  list.value = data.list
  total.value = data.count
}

const handleQuery = async () => {
  listParams.page = 1
  loadList()
}

const handleSizeChange = (val: number) => {
  listParams.limit = val
  listParams.page = 1
  loadList()
}

const handleCurrentChange = (val: number) => {
  listParams.page = val
  loadList()
}
</script>

<style lang="scss" scoped>
.el-space {
  display: flex;
  :deep(.el-space__item) {
    width: 100%;
  }
}
</style>
