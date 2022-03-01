const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      // 解决scss :export为空的情况
      // https://webpack.js.org/loaders/css-loader/
      css: {
        modules: {
          mode: 'icss',
        },
      },
      sass: {
        // additionalData: `@import "@/assets/scss/var.scss";`,
        // 文件中再引入var.scss会抛错
        // 该写法解决Syntax Error: SassError: This file is already being loaded.
        additionalData: (content, loaderContext) => {
          const { resourcePath } = loaderContext
          if (resourcePath.endsWith('var.scss')) return content
          return `@import "@/assets/scss/var.scss"; ${content}`
        },
      },
    },
  },
})
