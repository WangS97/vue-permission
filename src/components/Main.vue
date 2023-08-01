<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Main"
})
</script>

<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 60px 30px 30px 230px;
  background-color: pink;
}
</style>