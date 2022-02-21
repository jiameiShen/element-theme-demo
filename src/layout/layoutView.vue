<template>
  <div>
    <el-container>
      <el-header>
        <header-bar></header-bar>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <side-menu></side-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import headerBar from "./components/headerBar.vue"
import sideMenu from "./components/sideMenu.vue"
export default {
  name: 'layoutView',
  components: {
    headerBar,
    sideMenu,
  },
  data() {
    return {}
  }
}
</script>