<template>
  <div class="g-header">
    <div class="logo">主题切换演示</div>
    <div class="menu-list">
      <div class="menu-item">
        切换主题
        <ThemePicker></ThemePicker>
      </div>
    </div>
  </div>
</template>

<script>
import ThemePicker from '@/components/ThemePicker'
export default {
  name: 'headerBar',
  components: {
    ThemePicker,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss">
.g-header {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
