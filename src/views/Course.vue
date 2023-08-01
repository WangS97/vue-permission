<template>
<div class="course">
 <h2>课程管理</h2>
  <router-view></router-view>
</div>
</template>
<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Course"
})
</script>


<style scoped lang="less">

</style>