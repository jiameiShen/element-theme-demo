/* 主题颜色信息 */
import { mapState } from 'vuex'
import { generateColors } from '@/tools/theme/color'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState({
      themeColor: 'themeColor',
    }),
    colors() {
      return generateColors(this.themeColor)
    },
  },
}
