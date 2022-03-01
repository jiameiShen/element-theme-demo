<template>
  <el-color-picker
    class="u-theme-picker"
    v-model="themeColor"
    :predefine="themeList"
    @change="handleChangeColor"
  >
  </el-color-picker>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import store from '@/store'
export default {
  name: 'ThemePicker',
  data() {
    return {
      themeColor: store.state.themeColor,
      themeList: [
        '#409EFF',
        '#3C6CFE',
        '#00AE8A',
        '#30BDF4',
        '#6772E5',
        '#FB6B01',
        '#353D64',
        '#7A40F2',
      ],
    }
  },
  methods: {
    ...mapMutations(['setTheme']),
    ...mapActions(['changeThemeStyle']),
    handleChangeColor(val) {
      this.setTheme(val)
      this.changeThemeStyle()
    },
  },
}
</script>

<style lang="scss">
.u-theme-picker {
  vertical-align: middle;
}
</style>
