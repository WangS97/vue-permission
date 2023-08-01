<template>
<div class="student">
 <h2>
   学生管理
 </h2>
  <router-view></router-view>
</div>
</template>
<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Student"
})
</script>


<style scoped lang="less">

</style>