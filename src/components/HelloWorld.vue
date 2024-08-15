<template>
  <div class="hello">
    <!-- 上传器 -->
    <el-upload
        class="upload-demo"
        action=""
        multiple
        :limit="3"
    >
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
