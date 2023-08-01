<template>
<div class="menuItem">
  <ul v-if="item.children && item.children.length>0">
    <li>
      <router-link :to="item.link || item.path">{{item.title}}</router-link>
      <template v-for="(c,i) in item.children">
        <MenuItem :item="c" :key="i"></MenuItem>
      </template>
    </li>
  </ul>
  <ul v-else>
    <li>
      <router-link :to="item.link || item.path">{{item.title}}</router-link>
    </li>
  </ul>
</div>
</template>
<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "MenuItem",
  props:{
    item:Object
  }

})
</script>


<style scoped lang="less">

</style>