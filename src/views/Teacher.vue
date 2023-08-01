<template>
<div class="teacher">
 <h2>
   教师信息
 </h2>
  <router-view></router-view>
</div>
</template>
<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Teacher"
})
</script>


<style scoped lang="less">

</style>