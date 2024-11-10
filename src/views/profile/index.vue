<template>
  <div class="">
    <el-pagination
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000"
    />

    <el-row>
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
    </el-row>
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="scss" scoped></style>
