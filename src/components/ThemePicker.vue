<template>
  <el-color-picker class="u-theme-picker" v-model="color" :predefine="themeList"> </el-color-picker>
</template>

<script>
export default {
  name: 'ThemePicker',
  data() {
    return {
      color: '#409EFF',
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
}
</script>

<style lang="scss">
.u-theme-picker {
  vertical-align: middle;
}
</style>
