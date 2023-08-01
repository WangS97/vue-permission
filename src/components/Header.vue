<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Header"
})
</script>

<template>
  <div class="header">
    <h2>头部</h2>
  </div>
</template>

<style scoped lang="less">
.header {
  width: 100%;
  height: 60px;
  background-color: #000;
  position: fixed;
  top: 0;
  z-index: 2;
  color: white;
}
</style>