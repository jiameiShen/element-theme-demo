<template>
  <div>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button round>圆角按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button type="info" round>信息按钮</el-button>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>

    <el-alert title="成功提示的文案" type="success"> </el-alert>
    <el-alert title="themeData中设置的样式" type="info"> </el-alert>
    <el-alert title="警告提示的文案" type="warning"> </el-alert>
    <el-alert title="错误提示的文案" type="error"> </el-alert>

    <div class="primary-block" :style="{ 'background-color': primaryColor }">
      主题
    </div>

    <ul class="color-list">
      <li
        class="color-item"
        v-for="[key, value] in alphaColors"
        :key="key"
        :style="{ 'background-color': value }"
      >
        {{ key }}
      </li>
    </ul>

    <ul class="color-list">
      <li
        class="color-item"
        v-for="[key, value] in lightColors"
        :key="key"
        :style="{ 'background-color': value }"
      >
        {{ key }}
      </li>
    </ul>

    <ul class="color-list">
      <li
        class="color-item"
        v-for="[key, value] in shadeColors"
        :key="key"
        :style="{ 'background-color': value }"
      >
        {{ key }}
      </li>
    </ul>
  </div>
</template>

<script>
import colorMixin from '@/mixin/colorMixin'
export default {
  name: 'homePage',
  mixins: [colorMixin],
  data() {
    return {}
  },
  computed: {
    primaryColor() {
      return this.colors['primary']
    },
    alphaColors() {
      return Object.entries(this.colors).filter(item => item[0].indexOf('alpha-') > -1).reverse()
    },
    lightColors() {
      return Object.entries(this.colors).filter(item => item[0].indexOf('light-') > -1)
    },
    shadeColors() {
      return Object.entries(this.colors).filter(item => item[0].indexOf('shade-') > -1)
    }
  },
}
</script>

<style lang="scss">
.el-row,
.el-alert {
  margin-top: 10px;
}

.primary-block {
  margin-top: 10px;
  width: 720px;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: #fff;
  text-align: center;
}

.color-list {
  display: flex;
}

.color-item {
  width: 80px;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: #fff;
  text-align: center;
}
</style>