<template>
  <div class="home">
    <Header></Header>
    <SideBar></SideBar>
    <Main></Main>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import SideBar from "@/components/SideBar.vue";

export default {
  name: 'Home',
  data() {
    return {}
  },
  components: {
    Header,
    Main,
    SideBar
  }
}
</script>
<style lang="less">

</style>