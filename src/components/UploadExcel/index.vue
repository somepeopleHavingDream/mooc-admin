<template>
  <div class="upload-excel">
    <div class="btn-upload">
      <el-button :loading="loading" type="primary" @click="handleUpload">
        {{ $t('msg.uploadExcel.upload') }}
      </el-button>
    </div>
    <input
      ref="excelUploadInput"
      type="file"
      class="excel-upload-input"
      accept=".xlsx, .xls"
      @change="handleChange"
    />
    <div
      class="drop"
      @drop.stop.prevent="handleDrop"
      @dragover.stop.prevent="handleDragover"
      @dragenter.stop.prevent="handleDragover"
    >
      <i class="el-icon-upload"></i>
      <span>{{ $t('msg.uploadExcel.drop') }}</span>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import XLSX from 'xlsx'
import { getHeaderRow } from './utils'

const props = defineProps({
  // 上传之前的回调
  beforeUpload: Function,
  // 上传之后的回调
  onSuccess: Function
})

// 点击上传触发
const loading = ref(false)
const excelUploadInput = ref(null)

const handleUpload = () => {
  excelUploadInput.value.click()
}
const handleChange = (e) => {
  const files = e.target.files
  const rawFile = files[0]
  if (!rawFile) return
  upload(rawFile)
}

/**
 * 触发上传事件
 */
const upload = (rawFile) => {
  console.log('excelUploadInput', excelUploadInput)
  console.log('excelUploadInput.value', excelUploadInput.value)
  console.log('excelUploadInput.value.value', excelUploadInput.value.value)

  excelUploadInput.value.value = null
  // 如果没有指定上传前的回调
  if (!props.beforeUpload) {
    readerData(rawFile)
    return
  }
  // 如果用户指定了上传前的回调，那么只有返回 true 的时候，才会执行对应的后续操作
  const before = props.beforeUpload(rawFile)
  if (before) {
    readerData(rawFile)
  }
}

/**
 * 读取数据（异步）
 */
const readerData = (rawFile) => {
  loading.value = true
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    // 读取操作完成时触发
    reader.onload = (e) => {
      // 获取到解析后的数据
      const data = e.target.result
      console.log('data', data)

      // 利用 XLSX 对数据进行解析
      const workbook = XLSX.read(data, { type: 'array' })
      // 获取第一张表格（工作簿）名称
      const firstSheetName = workbook.SheetNames[0]
      // 读取 sheet1 （第一张表格）的数据
      const workSheet = workbook.Sheets[firstSheetName]
      // 解析数据表头
      const header = getHeaderRow(workSheet)
      // 解析数据体
      const results = XLSX.utils.sheet_to_json(workSheet)
      // 传入解析之后的数据
      generateData({ header, results })
      // 处理 looading
      loading.value = false
      // 成功回调
      resolve()
    }

    reader.readAsArrayBuffer(rawFile)
  })
}

// 根据导入的内容，生成数据
const generateData = excelData => {
  props.onSuccess && props.onSuccess(excelData)
}
</script>
<style lang="scss" scoped>
.upload-excel {
  display: flex;
  justify-content: center;
  margin-top: 100px;
  .excel-upload-input {
    display: none;
    z-index: -9999;
  }
  .btn-upload,
  .drop {
    border: 1px dashed #bbb;
    width: 350px;
    height: 160px;
    text-align: center;
    line-height: 160px;
  }
  .drop {
    line-height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #bbb;
    i {
      font-size: 60px;
      display: block;
    }
  }
}
</style>
