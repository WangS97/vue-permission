<script>
import {defineComponent} from 'vue'
import MenuItem from "@/components/MenuItem.vue";

export default defineComponent({
  name: "SideBar",
  components: {MenuItem}
})
</script>

<template>
  <div class="sideBar">
    <ul>
      <li >
       <router-link to="/Home">首页</router-link>
      </li>
      <template v-for="(item,index) in $store.state.userRouters">
        <MenuItem :item="item" :key="index"></MenuItem>
      </template>
    </ul>

  </div>
</template>

<style scoped lang="less">
.sideBar {
  width: 200px;
  height: 100vh;
  z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
  background-color: skyblue;
  padding-top: 60px;
}
</style>