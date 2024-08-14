<template>
  <div class="hello">
    <!-- 上传器 -->
    <uploader ref="uploader" :options="options" class="uploader-example">
      <unsupport></unsupport>
      <drop>
        <p>在此处拖放文件以上传或者</p>
      </drop>
      <list></list>
    </uploader>
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
