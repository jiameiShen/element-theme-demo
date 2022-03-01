import { generateColors } from './color'
import axios from 'axios'
import formula from './formula.json'
import variables from '@/assets/scss/var.scss'

let originalStyle = ''

export function writeNewStyle(themeColor) {
  let colors = generateColors(themeColor)
  let cssText = originalStyle
  let colorsCssText = ''
  Object.keys(colors).forEach((key) => {
    cssText = cssText.replace(new RegExp('(:|\\s+)' + key, 'g'), '$1' + `${colors[key]}`)
    colorsCssText += `
      .color-${key}{color: ${colors[key]}!important;}
      .bg-${key}{background-color: ${colors[key]}!important;}
      .border-${key}{border-color: ${colors[key]}!important;}
    `
  })
  document.getElementById('themeStyle').innerText = cssText + colorsCssText
}

export function getIndexStyle() {
  return new Promise((resolve) => {
    if (!originalStyle) {
      axios.all([axios.get('/theme/index.css'), axios.get('/themeData/extra.css')]).then(
        axios.spread((file, extraFile) => {
          const fileData = file.data
          const extraFileData = extraFile.data.replace(/[\r\n]/g, '')
          originalStyle = getStyleTemplate(fileData + extraFileData)
          resolve()
        })
      )
    } else {
      resolve()
    }
  })
}

export function getStyleTemplate(data) {
  let colors = generateColors(variables.themeColor)
  const colorMap = new Map()
  Object.keys(formula).forEach((key) => {
    colorMap.set(colors[key], key)
  })

  for (let [key, value] of colorMap) {
    data = data.replace(new RegExp(key, 'ig'), value)
  }

  return data
}
