<template>
  <div class="hello">
    <!-- 上传器 -->
    <uploader :options="options" class="uploader-example">
      <unsupport></unsupport>
      <drop>
        <p>在此处拖放文件以上传或者</p>
        <btn id="uploader-btn" :attrs="attrs" ref="uploadBtn">选择文件<i class="el-icon-upload el-icon--right"></i></btn>
      </drop>
      <list></list>
    </uploader>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      options: {
        // https://github.com/simple-uploader/Uploader/tree/develop/samples/Node.js
        target: '//localhost:3000/upload',
        testChunks: false
      },
      attrs: {
        accept: 'image/*'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.uploader-example {
  width: 880px;
  padding: 15px;
  margin: 40px auto 0;
  font-size: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .4);
}
.uploader-example .uploader-btn {
  margin-right: 4px;
}
.uploader-example .uploader-list {
  max-height: 440px;
  overflow: auto;
  overflow-x: hidden;
}
</style>
